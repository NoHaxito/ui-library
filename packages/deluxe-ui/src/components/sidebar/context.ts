"use client";
import { createContext, useContext } from "react";

export interface SidebarContextProps {
  collapsed: boolean;
  open: boolean;
  setOpen?: (value: boolean) => void;
  setCollapsed?: (value: boolean) => void;
}
const SidebarContext = createContext<SidebarContextProps>({
  collapsed: false,
  open: false,
});

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  return { context, SidebarContext };
};
