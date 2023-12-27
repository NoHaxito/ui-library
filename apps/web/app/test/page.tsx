"use client";
import { MultiSelectValues } from "@sihaxito/deluxe-ui";
import MultiS from "./multi-select";
import { MultiSelect, MultiSelectInput } from "@sihaxito/deluxe-ui";
import { MultiSelectOptions } from "@sihaxito/deluxe-ui";
import { CheckCircle, Circle } from "@phosphor-icons/react";

export default function TestPage() {
  return (
    <div className="relative max-w-sm p-4">
      <p>Default select options</p>
      <MultiSelect
        options={["Backlog", "Todo", "In progress", "Done", "Cancelled"]}
      >
        <div className="flex w-full flex-wrap items-center gap-1 rounded-md border border-neutral-300 px-3 py-2 duration-300 dark:border-neutral-800">
          <MultiSelectValues />
          <MultiSelectInput isClearable placeholder="Add tag..." />
        </div>
        <MultiSelectOptions />
      </MultiSelect>
      <p>Custom select options</p>
      <MultiSelect
        options={["Backlog", "Todo", "In progress", "Done", "Cancelled"]}
      >
        <div className="flex w-full flex-wrap items-center gap-1 rounded-md border border-neutral-300 px-3 py-2 duration-300 dark:border-neutral-800">
          <MultiSelectValues />
          <MultiSelectInput isClearable placeholder="Add tag..." />
        </div>
        <MultiSelectOptions>
          {({ options, selected, setValue }) => (
            <div className="grid">
              {options.map((option) => {
                const isSelected = selected.find((s) => s.includes(option));
                return (
                  <button
                    className="flex w-full items-center gap-2 px-2 py-1"
                    onClick={() => {
                      if (!isSelected) {
                        setValue([...selected, option]);
                      } else {
                        const newValues = selected.filter((s) => s !== option);
                        setValue(newValues);
                      }
                    }}
                    key={option}
                  >
                    {option}
                    {isSelected ? (
                      <CheckCircle className="ml-auto" />
                    ) : (
                      <Circle className="ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </MultiSelectOptions>
      </MultiSelect>
    </div>
  );
}
