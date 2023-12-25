"use client";
import { MultiSelectValues } from "@sihaxito/deluxe-ui";
import MultiS from "./multi-select";
import { MultiSelect, MultiSelectInput } from "@sihaxito/deluxe-ui";

export default function TestPage() {
  return (
    <div className="p-4 relative">
      <MultiS />
      <MultiSelect
        // defaultValue={["pinga con camote"]}
        onValueChange={(e) => console.log(e)}
      >
        <div className="duration-300 flex-wrap w-full px-3 py-2 flex border border-neutral-300 dark:border-neutral-800 rounded-md items-center gap-1">
          <MultiSelectValues />
          <MultiSelectInput isClearable placeholder="Add tag..." />
        </div>
      </MultiSelect>
    </div>
  );
}
