import * as React from "react";

interface MultiSelectContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string[];
  setValue: (value: string[]) => void;
  defaultValue: string[];
  disabled?: boolean;
  options?: string[];
  setOptions: (options: string[]) => void;
}

export const MultiSelectContext =
  React.createContext<MultiSelectContextProps | null>(null);

export const useMultiSelectContext: () => {
  context: MultiSelectContextProps | null;
  MultiSelectContext: React.Context<MultiSelectContextProps | null>;
} = () => {
  const context = React.useContext(MultiSelectContext);

  return { context, MultiSelectContext };
};
