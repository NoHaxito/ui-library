import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

import { addCode, postProcess, preProcess } from "./src/lib/rehype";

const LinkProperties = defineNestedType(() => ({
  name: "LinkProperties",
  fields: {
    radix: {
      type: "string",
    },
    source: {
      type: "string",
    },
  },
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: false },
    links: {
      type: "nested",
      of: LinkProperties,
      description: "",
      required: false,
    },
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
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
  contentDirPath: "./src/content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      preProcess,
      rehypeSlug,
      addCode,
      // @ts-expect-error
      [rehypePrettyCode, prettyCodeOptions],
      postProcess,
    ],
  },
});
