"use client";

import { CircleNotch } from "@phosphor-icons/react";
import { Suspense, useMemo } from "react";
import { examples } from "@/content/examples";
import { cn } from "@/lib/utils";

export default function ComponentPreview({ name = "" }: { name: string }) {
  const Preview = useMemo(() => {
    const Component = (examples as any)[name]?.component;

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
    <div
      className={cn(
        "my-2 flex min-h-[350px] w-full items-center justify-center rounded-lg bg-zinc-100 p-10 dark:bg-zinc-900",
      )}
    >
      <Suspense fallback={<CircleNotch className="animate-spin" size={16} />}>
        {Preview}
      </Suspense>
    </div>
  );
}
