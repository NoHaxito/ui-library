import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
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

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrismPlus],
  },
});
