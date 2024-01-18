/* eslint-disable jsx-a11y/anchor-has-content  -- TODO */
/* eslint-disable jsx-a11y/heading-has-content  -- TODO */
"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
//   Collapsible,
//   CollapsibleTrigger,
//   CollapsibleContent,
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@sihaxito/deluxe-ui";
import { Hash } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

// import { CodeHighlighter } from "./code-highlighter";
// import { ComponentPreview } from "./component-preview";
import AstroIcon from "@/components/icons/astro";
import NextIcon from "@/components/icons/next";
import RemixIcon from "@/components/icons/remix";
import ViteIcon from "@/components/icons/vite";
import ReactIcon from "@/components/icons/react";
import { CopyButton } from "./docs/copy-button";

const components = {
  AstroIcon,
  NextIcon,
  ReactIcon,
  RemixIcon,
  ViteIcon,
  //   Accordion,
  //   AccordionContent,
  //   AccordionItem,
  //   AccordionTrigger,
  //   Collapsible,
  //   CollapsibleTrigger,
  //   CollapsibleContent,
  //   Tabs,
  //   TabsList,
  //   TabsTrigger,
  //   TabsContent,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    >
      <LinkHeading id={props.id ?? "link-h2"}>{props.children}</LinkHeading>
    </h2>
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      <LinkHeading id={props.id ?? "link-h3"}>{props.children}</LinkHeading>
    </h3>
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "leading-7 text-neutral-500 dark:text-neutral-400 [&:not(:first-child)]:mt-4",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element -- TODO
    <img alt={alt} className={cn("rounded-md", className)} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 border-0 md:my-8 dark:border-neutral-800" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-muted m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  //   CodeHighlighter,
  //   ComponentPreview,
  pre: ({
    children,
    className,
    raw,
    title,
    ...otherProps
  }: React.HTMLAttributes<HTMLPreElement> & {
    raw?: string;
    title?: string;
  }) => {
    return (
      <div className="group">
        {title !== undefined && (
          <div className="-mb-2 mt-2 flex w-full items-center justify-between gap-x-3 rounded-t-lg border border-neutral-800 bg-zinc-950 px-5 py-2 text-[13px] font-medium text-neutral-200">
            {title}
            <CopyButton content={raw!} />
          </div>
        )}
        <pre
          className={cn(
            "not-prose my-2 max-h-[650px] overflow-x-auto border border-neutral-300 py-4 leading-6 dark:border-neutral-800",
            raw && "!bg-zinc-950",
            className,
            title !== undefined ? "rounded-b-lg border-t-0" : "rounded-lg",
          )}
          {...otherProps}
        >
          {children}
          {raw && title === undefined ? (
            <CopyButton
              className="absolute right-3 top-3 opacity-0 group-hover:opacity-100"
              content={raw}
            />
          ) : null}
        </pre>
      </div>
    );
  },
  code: ({ className, ...otherProps }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "not-prose relative rounded bg-white px-[0.3rem] py-[0.15rem] font-mono text-[13px] leading-6 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-200",
        className,
      )}
      {...otherProps}
    />
  ),
  Code2: ({ className, ...otherProps }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "!w-max !rounded-lg !bg-neutral-200 !px-1 text-black dark:!bg-neutral-800 dark:text-white",
        className,
      )}
      {...otherProps}
    />
  ),
  Image,
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l border-neutral-200 pl-8 [counter-reset:step] dark:border-neutral-800"
      {...props}
    />
  ),

  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "ease flex w-full flex-col items-center gap-y-1 rounded-xl border border-neutral-200 bg-neutral-100/50 p-6 opacity-60 shadow transition-[colors,opacity,transform] duration-300 hover:bg-neutral-100 hover:opacity-100 active:scale-95 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:bg-neutral-900",
        className,
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}

function LinkHeading({
  id,
  children,
  className,
  ...props
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "group relative flex w-fit items-center gap-1 text-inherit",
        className,
      )}
      href={`#${id}`}
      id={id}
      {...props}
    >
      {children}
      <span className="text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
        <Hash aria-hidden className="h-5 w-5" />
      </span>
    </Link>
  );
}
