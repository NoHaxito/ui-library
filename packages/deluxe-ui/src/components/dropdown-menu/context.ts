"use client";

import { createContext, useContext } from "react";

export interface DropdownMenuContextProps {
  open: boolean;
  setOpen?: (value: boolean) => void;
}
const DropdownMenuContext = createContext<DropdownMenuContextProps>({
  open: false,
});

export const useDropdownMenuContext = () => {
  const context = useContext(DropdownMenuContext);
  return { context, DropdownMenuContext };
};
