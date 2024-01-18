"use client";

import { useState } from "react";
// import {
//   TooltipProvider,
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "@sihaxito/deluxe-ui";

import { cn } from "@/lib/utils";
import { Check, Copy } from "@phosphor-icons/react";

type CopyButtonProps = {
  className?: string;
  content: string;
};

export function CopyButton({ className, content }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div>
      {/* <TooltipProvider>
        <Tooltip open={isCopied}>
          <TooltipTrigger asChild> */}
      <button
        className={cn(
          isCopied && "pointer-events-none",
          className,
          "copy-button inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md border border-neutral-800 bg-neutral-950 text-sm font-medium text-white ring-offset-neutral-950 transition duration-300 ease-in-out hover:bg-neutral-900 hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        )}
        onClick={handleCopy}
        type="button"
      >
        {isCopied ? (
          <Check className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Copy className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </button>
      {/* </TooltipTrigger>
          <TooltipContent side="left">Copied</TooltipContent>
        </Tooltip>
      </TooltipProvider> */}
    </div>
  );
}
