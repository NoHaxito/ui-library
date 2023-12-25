import * as React from "react";

interface MultiSelectContextProps {
  type: "single" | "multiple";
  open: boolean;
  onOpenChange: () => void;
  selectedValue: { label: string; value: string };
  selectedValues:
    | { label: string; value: string }[]
    | { label: string; value: string };
  defaultValue: { label: string; value: string };
  defaultValues:
    | { label: string; value: string }[]
    | { label: string; value: string };
  disabled?: boolean;
}

export const MultiSelectContext =
  React.createContext<MultiSelectContextProps | null>(null);

export const useMultiSelectContext = () => {
  const context = React.useContext(MultiSelectContext);

  return { context, MultiSelectContext };
};
