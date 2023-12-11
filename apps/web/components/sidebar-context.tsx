"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>({
  collapsed: false,
  setCollapsed: () => {},
  open: false,
  setOpen: () => {},
});

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  return { context, SidebarContext };
};
