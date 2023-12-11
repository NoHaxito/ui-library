"use client";

import { type ReactNode, createContext, useContext } from "react";

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

export const SidebarProvider: ({
  children,
  value,
}: {
  children: ReactNode;
  value: SidebarContextProps;
}) => JSX.Element = ({
  children,
  value,
}: {
  children: ReactNode;
  value: SidebarContextProps;
}) => {
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const useSidebarContext: () => {
  context: SidebarContextProps;
  SidebarContext: React.Context<SidebarContextProps>;
} = () => {
  const context = useContext(SidebarContext);
  return { context, SidebarContext };
};
