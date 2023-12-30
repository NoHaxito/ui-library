import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

import { addCode, postProcess, preProcess } from "./lib/rehype";
import { visit } from "unist-util-visit";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    url: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}` },
  },
}));

const prettyCodeOptions: Options = {
  defaultLang: {
    block: "tsx",
    inline: "tsx",
  },
  theme: "vitesse-dark",
};

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      preProcess,
      rehypeSlug,
      addCode,
      // @ts-expect-error rehype-pretty-code types are wrong
      [rehypePrettyCode, prettyCodeOptions],
      postProcess,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figcaption") {
            // console.log(node);
            ("adadasdsad");
          }
        });
      },
    ],
  },
  contentDirExclude: ["./content/examples"],
});
