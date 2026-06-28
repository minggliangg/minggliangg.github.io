import fs from "fs";
import path from "path";
import { createRequire } from "module";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import tailwindcss from "@tailwindcss/postcss";
import postcss from "postcss";

const require = createRequire(import.meta.url);

export default async function (eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/**/*.webc",
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // passthrough copy
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicons");

  // Self-host the JetBrains Mono variable font (latin subset) from
  // @fontsource-variable/jetbrains-mono. Copied from node_modules at build time
  // so the binary stays out of the repo, is version-pinned via package.json,
  // and ships with its Apache-2.0 license.
  const fontPkg = "node_modules/@fontsource-variable/jetbrains-mono";
  eleventyConfig.addPassthroughCopy({
    [`${fontPkg}/files/jetbrains-mono-latin-wght-normal.woff2`]:
      "fonts/jetbrains-mono.woff2",
    [`${fontPkg}/LICENSE`]: "fonts/jetbrains-mono-LICENSE.txt",
  });

  // tailwind + daisyui
  eleventyConfig.on("eleventy.before", async () => {
    const tailwindInputPath = path.resolve("./src/styles/index.css");
    const tailwindOutputPath = "./_site/styles/index.css";
    const cssContent = fs.readFileSync(tailwindInputPath, "utf8");
    const outputDir = path.dirname(tailwindOutputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Minify the CSS on production builds; keep it readable for `eleventy --serve`.
    const isProduction = process.env.ELEVENTY_RUN_MODE === "build";
    const processors = [tailwindcss()];
    if (isProduction) {
      // require() (not ESM import) to load cssnano's CJS build without tripping
      // the ESM bundler's static analysis of its dependency tree.
      const cssnano = require("cssnano");
      processors.push(cssnano());
    }

    const result = await postcss(processors).process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  // Minify inline <script> blocks on production builds. Only touches scripts
  // without a `src` (i.e. inline JS inlined by WebC). Loaded via a runtime
  // dynamic import() so the ESM bundler doesn't statically analyse terser's
  // dependency tree — the same lazy-load trick used for cssnano above.
  const isProduction = process.env.ELEVENTY_RUN_MODE === "build";
  if (isProduction) {
    eleventyConfig.addTransform("minify-inline-js", async function (content) {
      if (!this.page.outputPath?.endsWith(".html")) return content;

      const { minify } = await import("terser");
      // String.replace ignores returned promises, so collect matches and
      // rebuild the string once every block has been minified.
      const re = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/g;
      const parts = [];
      let last = 0;
      let match;
      while ((match = re.exec(content)) !== null) {
        parts.push(content.slice(last, match.index));
        const [whole, attrs, body] = match;
        // Skip external scripts and empty blocks.
        if (/\bsrc=/.test(attrs || "") || !body.trim()) {
          parts.push(whole);
        } else {
          const result = await minify(body, {
            compress: true,
            mangle: true,
            format: { comments: false },
          });
          parts.push(`<script${attrs || ""}>${result.code}</script>`);
        }
        last = re.lastIndex;
      }
      parts.push(content.slice(last));
      return parts.join("");
    });
  }

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["webc", "md"],
  };
}
