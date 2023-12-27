"use client";

import { type ExampleComponent, examples } from "@/content/examples";
import { cn } from "@/lib/utils";
import { CircleNotch } from "@phosphor-icons/react";
import { Suspense, useMemo } from "react";

export default function ComponentPreview({ name }, { name: string }) {
  const Preview = useMemo(() => {
    const Component = examples[name]?.component;

    if (!Component) {
      return (
        <p className="text-sm text-neutral-500">
          Example{" "}
          <code className="relative rounded bg-neutral-200 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:bg-neutral-800">
            {name}
          </code>{" "}
          not found.
        </p>
      );
    }

    return <Component />;
  }, [name]);
  return (
    <div
      className={cn(
        "preview my-2 flex min-h-[350px] w-full items-center justify-center rounded-lg bg-neutral-50 p-10 dark:bg-black",
      )}
    >
      <Suspense fallback={<CircleNotch size={16} className="animate-spin" />}>
        {Preview}
      </Suspense>
    </div>
  );
}
