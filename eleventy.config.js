import fs from "fs";
import path from "path";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import tailwindcss from "@tailwindcss/postcss";
import postcss from "postcss";
import { DateTime } from "luxon";

const TIME_ZONE = "Asia/Singapore";

export default async function (eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_includes/components/**/*.webc",
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // passthrough copy
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicons");

  // date parsing with luxon
  eleventyConfig.addDateParsing(function (dateValue) {
    let localDate;
    if (dateValue instanceof Date) {
      // and YAML
      localDate = DateTime.fromJSDate(dateValue, { zone: "utc" }).setZone(
        TIME_ZONE,
        { keepLocalTime: true },
      );
    } else if (typeof dateValue === "string") {
      localDate = DateTime.fromISO(dateValue, { zone: TIME_ZONE });
    }
    if (localDate?.isValid === false) {
      throw new Error(
        `Invalid \`date\` value (${dateValue}) is invalid for ${this.page.inputPath}: ${localDate.invalidReason}`,
      );
    }
    return localDate;
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

    const result = await postcss([tailwindcss()]).process(cssContent, {
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
