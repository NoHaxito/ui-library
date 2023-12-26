/* eslint-disable @typescript-eslint/no-non-null-assertion -- TODO */
"use client";
import * as React from "react";
import { Check } from "@phosphor-icons/react";
import { PopoverContent } from "../popover";
import { useMultiSelectContext } from "./context";

export const MultiSelectOptions: ({
  children,
}: {
  children?: (props: {
    options: string[];
    selected: string[];
    setValue: (value: string[]) => void;
  }) => React.ReactElement;
}) => JSX.Element | null = ({
  children,
}: {
  children?: (props: {
    options: string[];
    selected: string[];
    setValue: (value: string[]) => void;
  }) => React.ReactElement;
}) => {
  const { context } = useMultiSelectContext();
  const handleSelect: (val: string) => void = (val: string) => {
    context?.setValue([...context.value, val]);
  };
  const handleRemove = (val: string) => {
    const newValues = context?.value.filter((v) => v !== val);
    context?.setValue(newValues!);
  };
  const filteredOptions = React.useMemo(() => {
    return context?.options?.filter((opt) =>
      opt.toLowerCase().includes(context.inputValue!.toLowerCase())
    );
  }, [context?.options, context?.inputValue]);
  if (children && typeof children === "function") {
    return (
      <PopoverContent
        className="max-h-52 overflow-hidden overflow-y-auto transition-all w-[calc(var(--radix-popover-trigger-width))]"
        onFocusOutside={(e) => {
          e.preventDefault();
        }}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
        onPointerDownOutside={(e) => {
          e.preventDefault();
        }}
      >
        {React.cloneElement(
          children({
            options: filteredOptions!,
            selected: context!.value,
            setValue: context!.setValue,
          })
        )}
      </PopoverContent>
    );
  }
  if (context?.options) {
    return (
      <PopoverContent
        className="max-h-52 overflow-hidden overflow-y-auto transition-all w-[calc(var(--radix-popover-trigger-width))]"
        onFocusOutside={(e) => {
          e.preventDefault();
        }}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
        onPointerDownOutside={(e) => {
          e.preventDefault();
        }}
      >
        <div
          className="grid"
          // onMouseDown={(e) => {
          //   e.preventDefault();
          //   e.stopPropagation();
          // }}
        >
          {filteredOptions?.length !== 0 ? (
            filteredOptions?.map((option) => {
              const isSelected = context.value.some((v) => v === option);
              return (
                <button
                  className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800"
                  key={option}
                  onClick={() => {
                    if (isSelected) {
                      handleRemove(option);
                    } else {
                      handleSelect(option);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  type="button"
                >
                  {option}
                  <span className="ml-auto min-w-[1.2rem] max-w-[1.2rem]">
                    {isSelected ? <Check /> : null}
                  </span>
                </button>
              );
            })
          ) : (
            <button
              className="w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800"
              onClick={() => {
                handleSelect(context.inputValue!);
                context.setInputValue!("");
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              type="button"
            >
              <div className="text-xs text-neutral-500">
                No options found for{" "}
                <code className="text-neutral-700 dark:text-neutral-300">
                  {context.inputValue}
                </code>
                ,{" "}
                <kbd className="text-neutral-700 dark:text-neutral-300">
                  Enter
                </kbd>{" "}
                or{" "}
                <kbd className="text-neutral-700 dark:text-neutral-300">
                  Click
                </kbd>{" "}
                to add
              </div>
            </button>
          )}
        </div>
      </PopoverContent>
    );
  }
  return null;
};
