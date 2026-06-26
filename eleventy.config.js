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

  // Self-host the Inter variable font (latin subset) from @fontsource-variable/inter.
  // Copied from node_modules at build time so the binary stays out of the repo,
  // is version-pinned via package.json, and ships with its OFL license.
  const fontPkg = "node_modules/@fontsource-variable/inter";
  eleventyConfig.addPassthroughCopy({
    [`${fontPkg}/files/inter-latin-wght-normal.woff2`]:
      "fonts/inter-latin.woff2",
    [`${fontPkg}/LICENSE`]: "fonts/inter-OFL.txt",
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

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["webc", "md"],
  };
}
