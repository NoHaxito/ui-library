import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import type { Node } from "unist-builder/lib";

import { Examples } from "../examples";

export const preProcess = () => (tree: UnistTree) => {
  visit(tree, "element", (node: UnistNode) => {
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

export const postProcess = () => (tree: UnistTree) => {
  visit(tree, "element", (node: UnistNode) => {
    if (node?.type === "element" && node?.tagName === "figure") {
      if (
        !node.properties ||
        !("data-rehype-pretty-code-figure" in node.properties)
      ) {
        return;
      }
      const title = node.children?.find(
        (child) => child.tagName === "figcaption"
      )?.children?.[0].value;
      const preElement = node.children?.find(
        (child: UnistNode) => child.tagName === "pre"
      );

      if (preElement?.tagName !== "pre") {
        return;
      }

      if (preElement?.properties) {
        preElement.properties.raw = node.raw!;
        preElement.properties.title = title;
      }
    }
  });
};

export const addCode = () => (tree: UnistTree) => {
  visit<UnistNode, "element">(tree, (node: UnistNode) => {
    if (node.name === "ComponentPreview") {
      const nameAttribute = getNodeAttributeByName(node, "name");
      const code = nameAttribute
        ? Examples[nameAttribute?.value as keyof typeof Examples]?.code ?? ""
        : "";

      node.children?.push(
        u("element", {
          tagName: "pre",
          properties: {
            raw: code,
          },
          raw: code,
          children: [
            u("element", {
              tagName: "code",
              data: { meta: "showLineNumbers" },
              properties: {
                className: ["language-tsx"],
              },
              children: [
                {
                  type: "text",
                  value: code,
                },
              ],
            }),
          ],
        }) as unknown as UnistNode
      );
    }
  });
};

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export interface UnistNode extends Node {
  type: string;
  name?: string;
  tagName?: string;
  raw?: string;
  value?: string;
  properties?: {
    raw?: string;
    className?: string;
    [key: string]: unknown;
  };
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
  title?: string;
}

export interface UnistTree extends Node {
  children: UnistNode[];
}
