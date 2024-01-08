import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/docs": "/docs/installation",
  },
  integrations: [
    tailwind(),
    react(),
    mdx({
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
          },
        ],
      ],
      shikiConfig: {
        // Choose from Shiki's built-in themes (or add your own)
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        theme: "dracula",

        // Add custom languages
        // Note: Shiki has countless langs built-in, including .astro!
        // https://github.com/shikijs/shiki/blob/main/docs/languages.md
        langs: ["javascript", "typescript", "bash"],
        // Enable word wrap to prevent horizontal scrolling
        wrap: true,
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
