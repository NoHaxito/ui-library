"use client";

import { useState } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@sihaxito/deluxe-ui";

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
      <TooltipProvider>
        <Tooltip open={isCopied}>
          <TooltipTrigger asChild>
            <button
              className={cn(
                isCopied && "pointer-events-none",
                className,
                "copy-button inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md bg-neutral-200 text-sm font-medium text-neutral-950 ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-300 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-950 dark:text-white dark:ring-offset-neutral-950 dark:hover:bg-neutral-900 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300",
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
          </TooltipTrigger>
          <TooltipContent side="left">Copied</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
