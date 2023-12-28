"use client";

import { Check, X } from "@phosphor-icons/react";
import type { KeyboardEvent} from "react";
import { useRef, useState } from "react";
import { Badge } from "@/components/badge";

const autocomplete = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in-progress",
    label: "In progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "cancelled",
    label: "Cancelled",
  },
];

export default function MultiSelect() {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState<{ value: string; label: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const selectables = autocomplete.concat(
    values.filter((item) => !autocomplete.includes(item)),
  );

  const handleSelect = (value: string | { value: string; label: string }) => {
    if (typeof value === "object") {
      setValues([...values, value]);
    }
  };
  const handleRemove = (value: string) => {
    const newValues = values.filter((v) => v.value !== value);
    setValues(newValues);
  };
  const handleRemoveLast = () => {
    const newValues = [...values];
    newValues.pop();
    setValues(newValues);
  };
  const handleClear = () => {
    setValues([]);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (inputRef.current === null) return;
    if (e.key === "Enter") {
      if (inputValue.length === 0 || inputValue.trim().length === 0) return;
      const exists = values.filter((s) => inputValue.toLowerCase() === s.value);
      if (exists.length) {
        setInputValue("");
        return;
      }
      const isSelectable = (
        selectables as { value: string; label: string }[]
      ).find((v) => v.value.includes(inputValue.toLowerCase()));
      e.preventDefault();
      if (isSelectable) {
        setInputValue("");
        handleSelect(isSelectable);
      } else {
        const toAdd = { label: inputValue, value: inputValue.toLowerCase() };
        handleSelect(toAdd);
      }

      e.currentTarget.value = "";
      setInputValue("");
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      if (inputValue === "") {
        e.preventDefault();
        handleRemoveLast();
      }
    }
    if (e.key === "Escape") {
      inputRef.current.blur();
    }
  };
  return (
    <div className="relative max-w-sm">
      <div
        className="flex w-full items-center gap-1 rounded-md border border-neutral-300 px-3 py-2 transition-[height] duration-300 dark:border-neutral-800"
        onMouseDown={(e) => {
          if (open) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <div className="flex w-full flex-wrap items-center gap-x-1 gap-y-2">
          {values.map((value) => (
            <Badge
              key={value.value}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              {value.label}
              <button className="" onClick={() => { handleRemove(value.value); }}>
                <X />
              </button>
            </Badge>
          ))}
          {values.length !== 0 && (
            <div className="mx-2 h-4 w-px bg-neutral-800" />
          )}
          <div className="relative flex-1">
            <input
              className="h-full w-full min-w-[50px] bg-transparent pr-6 text-sm text-neutral-700 outline-none placeholder:text-neutral-500 dark:text-neutral-200 placeholder:dark:text-neutral-500"
              onBlur={() => { setOpen(false); }}
              onChange={(e) => { setInputValue(e.currentTarget.value); }}
              onFocus={() => { setOpen(true); }}
              onKeyDown={onKeyDown}
              placeholder="Add a tag..."
              ref={inputRef}
              required
              value={inputValue}
            />
            {values.length !== 0 && (
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={handleClear}
              >
                <X />
              </button>
            )}
          </div>
        </div>
      </div>
      {open ? <div
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-20 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90 slide-in-from-top-4 data-[state=closed]:slide-out-from-top-4 absolute top-full z-50 mt-1 grid max-h-52 w-full translate-y-1 gap-y-2 overflow-y-auto rounded-lg bg-neutral-100 px-3 py-2 shadow-md transition-all duration-1000 dark:bg-neutral-900"
          data-state={!open ? "closed" : "open"}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {selectables.filter((value) =>
            value.label.toLowerCase().includes(inputValue.toLowerCase()),
          ).length !== 0 ? (
            selectables
              .filter((value) =>
                value.label.toLowerCase().includes(inputValue.toLowerCase()),
              )
              .map((complete) => {
                const isSelected = values.some(
                  (v) => v.value === complete.value,
                );
                return (
                  <button
                    className="flex items-center gap-2 rounded-lg px-3 py-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    key={complete.value}
                    onClick={(e) => {
                      if (isSelected) {
                        handleRemove(complete.value);
                      } else {
                        handleSelect(complete);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    {complete.label}
                    <span className="ml-auto">{isSelected ? <Check /> : null}</span>
                  </button>
                );
              })
          ) : (
            <div className="text-sm text-neutral-500">
              No options found for{" "}
              <code className="text-neutral-700 dark:text-neutral-300">
                {inputValue}
              </code>
              ,{" "}
              <kbd className="text-neutral-700 dark:text-neutral-300">
                Enter
              </kbd>{" "}
              to add
            </div>
          )}
          {values.length !== 0 && (
            <div className="sticky -bottom-1.5 w-full border-t bg-neutral-100 py-1 text-center dark:border-neutral-800 dark:bg-neutral-900">
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-1 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                onClick={handleClear}
              >
                Clear <strong>{values.length}</strong> selected values
              </button>
            </div>
          )}
        </div> : null}
    </div>
  );
}
