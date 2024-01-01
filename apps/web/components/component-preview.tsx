"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  type TabsProps,
} from "@sihaxito/deluxe-ui";
import { CircleNotch } from "@phosphor-icons/react";
import { Suspense, useMemo } from "react";
import { Examples } from "@/content/examples";
import { cn } from "@/lib/utils";

type PreviewProps = TabsProps & {
  align?: "start" | "center" | "end";

  name: string;
};

export function ComponentPreview({
  name = "",
  children,
  ...props
}: PreviewProps) {
  const Example = Examples[name as keyof typeof Examples];
  const Preview = useMemo(() => {
    const Component = Example?.component;

    if (!Component) {
      return (
        <p className="text-sm text-neutral-500">
          Example{" "}
          {name !== "" && (
            <code className="relative rounded bg-neutral-200 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-neutral-800">
              {name}
            </code>
          )}{" "}
          not found.
        </p>
      );
    }

    return <Component />;
  }, [name]);
  return (
    <Tabs variant="underline" defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code" disabled={Example?.code === undefined}>
          Code
        </TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="my-4">
        <div
          className={cn(
            "relative flex min-h-[350px] w-full items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 p-10 dark:border-zinc-800 dark:bg-zinc-900",
          )}
        >
          <Suspense
            fallback={<CircleNotch className="animate-spin" size={16} />}
          >
            {Preview}
          </Suspense>
        </div>
      </TabsContent>
      <TabsContent
        value="code"
        className="flex flex-1 rounded-lg [&_pre]:max-h-[350px] [&_pre]:overflow-auto"
      >
        <div className="not-prose w-full">{children}</div>
      </TabsContent>
    </Tabs>
  );
}
