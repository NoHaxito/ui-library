/* eslint-disable @typescript-eslint/no-explicit-any -- TODO */
/* eslint-disable import/no-extraneous-dependencies -- TODO */
"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../utils";

const Tabs = TabsPrimitive.Root;

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  variant: "solid" | "underline";
}
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant = "solid", ...props }, ref) => {
  const id = React.useId();
  const [activeTab, setActiveTab] = React.useState<{
    width: null | number;
    height: null | number;
    top: null | number;
    left: null | number;
  }>({
    width: null,
    height: null,
    top: null,
    left: null,
  });
  const variantClasses = {
    solid:
      "relative z-10 inline-flex h-10 items-center justify-center rounded-lg bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-900",
    underline:
      "relative inline-flex h-10 items-center justify-center p-1 text-neutral-500",
  };
  const indicatorClasses = {
    solid:
      "absolute -z-[2] flex rounded-lg items-center left-0 h-[var(--radix-tab-active-height)] w-[var(--radix-tab-active-width)] translate-x-[var(--radix-tab-active-left)] bg-neutral-200 px-3 transition-[width,transform] duration-300 dark:bg-neutral-800",
    underline:
      "absolute bottom-0 left-0 h-[2px] w-[var(--radix-tab-active-width)] translate-x-[var(--radix-tab-active-left)] bg-black px-3 transition-[width,transform] duration-300 dark:bg-white",
  };
  React.useEffect(() => {
    setInterval(() => {
      const childNodes = document
        .getElementById(id)
        ?.querySelectorAll<HTMLButtonElement>(
          `[role="tab"][data-state="active"]`,
        );
      childNodes?.forEach((childNode) => {
        const dataState = childNode.getAttribute("data-state");
        const isActive = dataState === "active";
        if (isActive) {
          setActiveTab({
            width: childNode.offsetWidth,
            height: childNode.offsetHeight,
            top: childNode.offsetTop,
            left: childNode.offsetLeft,
          });
        }
      });
    }, 200);
  }, []);
  return (
    <TabsPrimitive.List
      className={cn(variantClasses[variant], className)}
      id={id}
      ref={ref}
      {...props}
    >
      {props.children}
      <div
        className={cn(indicatorClasses[variant])}
        style={{
          ["--radix-tab-active-width" as any]: !activeTab.width
            ? null
            : `${activeTab.width}px`,
          ["--radix-tab-active-height" as any]: !activeTab.height
            ? null
            : `${activeTab.height}px`,
          ["--radix-tab-active-left" as any]: !activeTab.left
            ? null
            : `${activeTab.left}px`,
          ["--radix-tab-active-top" as any]: !activeTab.top
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
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-300 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-neutral-200 data-[state=active]:text-neutral-900 dark:focus-visible:ring-white dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white",
      className,
    )}
    ref={ref}
    {...props}
  />
));
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
