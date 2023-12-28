"use client";
import { Prism } from "prism-react-renderer";
import { cn } from "@/lib/utils";
import { Check, Copy } from "@phosphor-icons/react";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useState } from "react";
import bashLang from "refractor/lang/bash";

bashLang(Prism);

export function CodeHighlighter({
  language,
  code,
  highligthLines,
  showLines = false,
}: {
  language: "javascript" | "tsx" | "jsx" | "bash";
  code: string;
  highligthLines: number[];
  showLines?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);
  return (
    <Highlight
      prism={Prism}
      theme={themes.dracula}
      language={language}
      code={code}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="group relative px-2">
          <pre
            style={style}
            className="md:scrollbar-none group-hover:md:scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-400 scrollbar-thumb-rounded-full relative my-2 grid max-h-[350px] overflow-x-auto rounded-lg !bg-neutral-900 px-2 py-2 [scrollbar-gutter:stable]"
          >
            <code className="mr-1 flex-none">
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className={cn(
                    highligthLines &&
                      highligthLines.some((e) => e === i + 1) &&
                      "bg-neutral-700 ",
                    highligthLines &&
                      highligthLines.length > 1 &&
                      highligthLines.some((l) => l === i + 1) &&
                      highligthLines.findIndex((l) => l === i + 1) === 0 &&
                      "!rounded-b-none !rounded-t-md",
                    highligthLines &&
                      highligthLines.length > 1 &&
                      highligthLines.some((l) => l === i + 1) &&
                      highligthLines.findIndex((l) => l === i + 1) ===
                        highligthLines.length - 1 &&
                      "!rounded-b-md",
                    i === 0 && "rounded-t-md",
                    i === tokens.length - 1 && "rounded-b-md",
                    "pl-1",
                    highligthLines &&
                      highligthLines.length === 1 &&
                      "rounded-l-md rounded-r-md",
                  )}
                >
                  {showLines && (
                    <span className={cn("mr-4 select-none text-neutral-500")}>
                      {i + 1}
                    </span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute right-4 top-1 flex h-8 w-8 items-center justify-center gap-2 rounded-lg bg-neutral-100 opacity-0 transition-[transform,opacity] duration-300 ease-in-out active:scale-95 group-hover:opacity-100 dark:bg-neutral-800"
          >
            {copied ? <Check /> : <Copy />}
          </button>
        </div>
      )}
    </Highlight>
  );
}
