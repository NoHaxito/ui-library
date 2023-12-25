"use client";

import { Check, X } from "@phosphor-icons/react";
import { KeyboardEvent, useRef, useState } from "react";

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
    values.filter((item) => autocomplete.indexOf(item) < 0)
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
    <div className="max-w-sm relative">
      <div
        onMouseDown={(e) => {
          if (open) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className="transition-[height] duration-300 w-full px-3 py-2 flex border border-neutral-300 dark:border-neutral-800 rounded-md items-center gap-1"
      >
        <div className="flex w-full items-center gap-y-2 gap-x-1 flex-wrap">
          {values.map((value) => (
            <span
              key={value.value}
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="flex items-center gap-x-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {value.label}
              <button onClick={() => handleRemove(value.value)} className="">
                <X />
              </button>
            </span>
          ))}
          {values.length !== 0 && (
            <div className="h-4 mx-2 w-px bg-neutral-800" />
          )}
          <div className="flex-1 relative">
            <input
              onKeyDown={onKeyDown}
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              className="min-w-[50px] pr-6 outline-none text-sm w-full h-full bg-transparent text-neutral-700 placeholder:text-neutral-500 dark:text-neutral-200 placeholder:dark:text-neutral-500"
              placeholder="Add a tag..."
              required
            />
            {values.length !== 0 && (
              <button
                onClick={handleClear}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <X />
              </button>
            )}
          </div>
        </div>
      </div>
      {open && (
        <div
          data-state={!open ? "closed" : "open"}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="max-h-52 overflow-y-auto translate-y-1 duration-1000 grid gap-y-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-20 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90 slide-in-from-top-4 transition-all dark:bg-neutral-900 bg-neutral-100 rounded-lg shadow-md z-50 data-[state=closed]:slide-out-from-top-4 px-3 py-2 w-full mt-1 absolute top-full"
        >
          {selectables.filter((value) =>
            value.label.toLowerCase().includes(inputValue.toLowerCase())
          ).length !== 0 ? (
            selectables
              .filter((value) =>
                value.label.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((complete) => {
                const isSelected = values.some(
                  (v) => v.value === complete.value
                );
                return (
                  <button
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      if (isSelected) {
                        handleRemove(complete.value);
                      } else {
                        handleSelect(complete);
                      }
                    }}
                    className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    key={complete.value}
                  >
                    {complete.label}
                    <span className="ml-auto">{isSelected && <Check />}</span>
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
            <div className="border-t dark:border-neutral-800 sticky -bottom-1 bg-neutral-100 dark:bg-neutral-900">
              <button
                onClick={handleClear}
                className=" w-full flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800"
              >
                Clear selected values
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
