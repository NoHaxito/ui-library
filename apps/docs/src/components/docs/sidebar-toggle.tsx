"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  open: false,
  setOpen: () => {},
});

export function SidebarContextProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  return { context, SidebarContext };
};
