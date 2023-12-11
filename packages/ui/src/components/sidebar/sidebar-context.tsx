"use client";

import { type ReactNode, createContext, useContext } from "react";

export interface SidebarContextProps {
  collapsed: boolean;
  setCollapsed?: (value: boolean) => void;
}
const SidebarContext = createContext<SidebarContextProps>({
  collapsed: false,
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

export const useSidebarContext: () => SidebarContextProps = () => {
  const context = useContext(SidebarContext);
  return context;
};
