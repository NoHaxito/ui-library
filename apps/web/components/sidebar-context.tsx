"use client";

import type { ReactNode} from "react";
import { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  overlay: boolean;
  setOverlay: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  collapsed: false,
  setCollapsed: () => {},
  open: false,
  setOpen: () => {},
  overlay: false,
  setOverlay: () => {},
});

export function SidebarContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  return (
    <SidebarContext.Provider
      value={{ collapsed, setCollapsed, open, setOpen, overlay, setOverlay }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  return { context, SidebarContext };
};
