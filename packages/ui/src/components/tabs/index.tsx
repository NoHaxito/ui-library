/* eslint-disable react-hooks/exhaustive-deps -- TODO */
"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { cn } from "../../utils";
import { type TabsVariant, tabs } from "./theme";

const { indicator, list, trigger } = tabs();

interface TabsContextProps {
  value: string | null;
  variant: TabsVariant["variant"];
}

const TabsContext = React.createContext<TabsContextProps>({
  value: null,
  variant: "solid",
});
function useTabsContext(): { context: TabsContextProps } {
  const context = React.useContext(TabsContext);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- TODO
  if (!context) {
    throw new Error(
      "Tabs components must be used within a Tabs or Tabs.Root component",
    );
  }

  return { context };
}

export interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  variant?: "solid" | "underline";
}
const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ activationMode = "automatic", children, variant, ...props }, ref) => {
  const [value, setValue] = useControllableState({
    defaultProp: props.defaultValue,
    prop: props.value,
    onChange: props.onValueChange,
  });
  return (
    <TabsPrimitive.Root
      activationMode={activationMode}
      onValueChange={setValue}
      ref={ref}
      value={value}
      {...props}
    >
      <TabsContext.Provider value={{ value: value ?? null, variant }}>
        {children}
      </TabsContext.Provider>
    </TabsPrimitive.Root>
  );
});
Tabs.displayName = TabsPrimitive.Root.displayName;

export type TabsListProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.List
>;
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ children, className, ...props }, ref) => {
  const id = React.useId();
  const { context } = useTabsContext();
  const [activeTab, setActiveTab] = React.useState<{
    width: undefined | null | number;
    height: undefined | null | number;
    top: undefined | null | number;
    left: undefined | null | number;
  }>({
    width: null,
    height: null,
    top: null,
    left: null,
  });
  React.useEffect(() => {
    if (context.value === null) {
      const activeNode = document
        .getElementById(id)
        ?.querySelectorAll<HTMLButtonElement>(`[role="tab"]`);
      setActiveTab({
        width: activeNode?.[0].offsetWidth,
        height: activeNode?.[0].offsetHeight,
        top: activeNode?.[0].offsetTop,
        left: activeNode?.[0].offsetLeft,
      });
    } else {
      const activeNode = document
        .getElementById(id)
        ?.querySelector<HTMLButtonElement>(`[role="tab"][data-state="active"]`);
      setActiveTab({
        width: activeNode?.offsetWidth,
        height: activeNode?.offsetHeight,
        top: activeNode?.offsetTop,
        left: activeNode?.offsetLeft,
      });
    }
  }, [context.value]);
  return (
    <TabsPrimitive.List
      className={cn(list({ variant: context.variant, className }))}
      id={id}
      ref={ref}
      {...props}
    >
      {children}
      <div
        className={cn(indicator({ variant: context.variant }))}
        style={{
          ["--radix-tab-active-width" as string]: !activeTab.width
            ? null
            : `${activeTab.width}px`,
          ["--radix-tab-active-height" as string]: !activeTab.height
            ? null
            : `${activeTab.height}px`,
          ["--radix-tab-active-left" as string]: !activeTab.left
            ? null
            : `${activeTab.left}px`,
          ["--radix-tab-active-top" as string]: !activeTab.top
            ? null
            : `${activeTab.top}px`,
        }}
      />
    </TabsPrimitive.List>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { context } = useTabsContext();
  return (
    <TabsPrimitive.Trigger
      className={cn(trigger({ variant: context.variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn(
      "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
