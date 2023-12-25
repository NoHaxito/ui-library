"use client";

import { X } from "@phosphor-icons/react";
import { useMultiSelectContext } from "./context";

export const MultiSelectValues: () => JSX.Element = () => {
  const { context } = useMultiSelectContext();
  const handleRemove: (value: string) => void = (value: string) => {
    const newValues = context?.value.filter((v) => v !== value);
    context?.setValue(newValues!);
  };
  return (
    <>
      {context?.value.map((val) => (
        <span
          className="inline-flex items-center whitespace-nowrap rounded-lg gap-1 border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300 border-transparent bg-neutral-900 text-neutral-50 hhover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80"
          key={val}
        >
          {val}
          <button
            className=""
            onClick={() => {
              handleRemove(val);
            }}
            type="button"
          >
            <X />
          </button>
        </span>
      ))}
    </>
  );
};
