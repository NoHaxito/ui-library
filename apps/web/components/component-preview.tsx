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
          <code className="relative rounded bg-neutral-200 dark:bg-neutral-800 px-[0.3rem] py-[0.2rem] font-mono text-sm">
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
        "my-2 bg-neutral-100 rounded-lg dark:bg-neutral-900 preview flex min-h-[350px] w-full justify-center p-10 items-center"
      )}
    >
      <Suspense fallback={<CircleNotch size={16} className="animate-spin" />}>
        {Preview}
      </Suspense>
    </div>
  );
}
