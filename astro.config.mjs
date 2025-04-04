import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://gabrielkryss.github.io/",
  base: "portfolio-blog-website/",
  integrations: [mdx(), sitemap(), tailwind()],
});
