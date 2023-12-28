/* eslint-disable react/no-array-index-key -- line 49, needed because line doesnt have an id */
"use client";
import { Prism, Highlight, themes } from "prism-react-renderer";
import { Check, Copy } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import bashLang from "refractor/lang/bash";
import { cn } from "@/lib/utils";

bashLang(Prism);

export function CodeHighlighter({
  language,
  code,
  highligthLines = [],
  showLines = false,
}: {
  language: "javascript" | "tsx" | "jsx" | "bash";
  code: string;
  highligthLines: number[];
  showLines?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(code);
    setCopied(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <Highlight
      code={code}
      language={language}
      prism={Prism}
      theme={themes.oneDark}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div className="group relative grid px-2">
          <pre
            className="md:scrollbar-none group-hover:md:scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-400 scrollbar-thumb-rounded-full relative my-2 grid max-h-[350px] overflow-x-auto rounded-lg !bg-neutral-900 py-2 [scrollbar-gutter:stable]"
            style={style}
          >
            <code className="flex-none">
              {tokens.map((line, i) => {
                const isHighlighted = highligthLines.includes(i + 1);

                return (
                  <div
                    key={i}
                    {...getLineProps({ line })}
                    className={cn(
                      "border-l-2 pl-2",
                      isHighlighted
                        ? "border-indigo-500 bg-neutral-700"
                        : "border-transparent",
                    )}
                  >
                    {showLines ? (
                      <span className={cn("mr-4 select-none text-neutral-500")}>
                        {i + 1}
                      </span>
                    ) : null}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                );
              })}
            </code>
          </pre>
          <button
            className="absolute inset-y-0 right-0 flex h-8 w-8 items-center justify-center gap-2 rounded-lg bg-neutral-100 opacity-0 transition-[transform,opacity] duration-300 ease-in-out active:scale-95 group-hover:opacity-100 dark:bg-neutral-800"
            onClick={handleCopy}
            type="button"
          >
            {copied ? <Check /> : <Copy />}
          </button>
        </div>
      )}
    </Highlight>
  );
}
