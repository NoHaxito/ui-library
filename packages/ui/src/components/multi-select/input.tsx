"use client";
import { X } from "@phosphor-icons/react";
import * as React from "react";
import { useMultiSelectContext } from "./context";
import { useComposedRefs } from "@radix-ui/react-compose-refs";

interface MultiSelectInputProps extends React.ComponentProps<"input"> {
  isClearable?: boolean;
}
export const MultiSelectInput = React.forwardRef<
  HTMLInputElement,
  MultiSelectInputProps
>(({ ...props }, forwardedRef) => {
  const { context } = useMultiSelectContext();
  const { options, setOpen, value, setValue } = context!;
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const mixedRefs = useComposedRefs(inputRef, forwardedRef);

  const handleSelect: (val: string) => void = (val: string) => {
    setValue([...value, val]);
  };
  const handleRemoveLast: () => void = () => {
    const newValues = [...value];
    newValues.pop();
    setValue(newValues);
  };
  const handleClear: () => void = () => {
    setValue([]);
  };
  const onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (inputRef.current === null) return;
    if (e.key === "Enter") {
      if (inputValue.length === 0 || inputValue.trim().length === 0) return;
      const exists = value.find(
        (s) => inputValue.toLowerCase() === s.toLowerCase()
      );
      if (exists !== undefined) {
        setInputValue("");
        return;
      }
      const isSelectable =
        options !== undefined
          ? options.find((v) => v.includes(inputValue.toLowerCase()))
          : false;
      e.preventDefault();
      if (isSelectable) {
        setInputValue("");
        handleSelect(isSelectable);
      } else {
        const toAdd = inputValue;
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
    <div className="relative flex-1">
      <input
        onBlur={() => {
          setOpen(false);
        }}
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        onFocus={() => {
          setOpen(true);
        }}
        onKeyDown={onKeyDown}
        ref={mixedRefs}
        type="text"
        value={inputValue}
        {...props}
        className="min-w-[50px] flex-1 pr-6 outline-none text-sm w-full h-full bg-transparent text-neutral-700 placeholder:text-neutral-500 dark:text-neutral-200 placeholder:dark:text-neutral-500"
      />
      {value.length !== 0 && props.isClearable ? (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => {
            handleClear();
            inputRef.current?.focus();
          }}
          type="button"
        >
          <X />
        </button>
      ) : null}
    </div>
  );
});

MultiSelectInput.displayName = "MultiSelectInput";
