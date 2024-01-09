// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

// src/lib/rehype.ts
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// src/examples/index.ts
var Examples = {};

// src/lib/rehype.ts
var preProcess = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      if (!node.children || node.children.length === 0) {
        return;
      }
      const [codeEl] = node.children;
      if (codeEl?.tagName !== "code") {
        return;
      }
      node.raw = codeEl.children?.at(0)?.value;
    }
  });
};
var postProcess = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "figure") {
      if (!node.properties || !("data-rehype-pretty-code-figure" in node.properties)) {
        return;
      }
      const title = node.children?.find(
        (child) => child.tagName === "figcaption"
      )?.children?.[0].value;
      const preElement = node.children?.find(
        (child) => child.tagName === "pre"
      );
      if (preElement?.tagName !== "pre") {
        return;
      }
      if (preElement?.properties) {
        preElement.properties.raw = node.raw;
        preElement.properties.title = title;
      }
    }
  });
};
var addCode = () => (tree) => {
  visit(tree, (node) => {
    if (node.name === "ComponentPreview") {
      const nameAttribute = getNodeAttributeByName(node, "name");
      const code = nameAttribute ? Examples[nameAttribute?.value]?.code ?? "" : "";
      node.children?.push(
        u("element", {
          tagName: "pre",
          properties: {
            raw: code
          },
          raw: code,
          children: [
            u("element", {
              tagName: "code",
              data: { meta: "showLineNumbers" },
              properties: {
                className: ["language-tsx"]
              },
              children: [
                {
                  type: "text",
                  value: code
                }
              ]
            })
          ]
        })
      );
    }
  });
};
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// contentlayer.config.ts
var LinkProperties = defineNestedType(() => ({
  name: "LinkProperties",
  fields: {
    radix: {
      type: "string"
    },
    source: {
      type: "string"
    }
  }
}));
var Doc = defineDocumentType(() => ({
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
      required: false
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    },
    url: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}` }
  }
}));
var prettyCodeOptions = {
  defaultLang: {
    block: "tsx",
    inline: "tsx"
  },
  theme: "vitesse-dark"
};
var contentlayer_config_default = makeSource({
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
      postProcess
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-QX6KI6KJ.mjs.map
