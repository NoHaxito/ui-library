// @ts-nocheck
/* -------------------------------------------------------------------------- */
/*                    GENERATED FILE, DO NOT EDIT MANUALLY!                   */
/* -------------------------------------------------------------------------- */
import { lazy, type LazyExoticComponent } from "react";

type Example = {
  component: LazyExoticComponent<() => JSX.Element>;
  code: string;
};

export const Examples: Record<string, Example> = {
  "accordion/basic": {
    component: lazy(() => import("@/content/examples/accordion/basic.tsx")),
    code: `"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@sihaxito/deluxe-ui";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="min-w-lg w-full">
      <AccordionItem
        value="item-1"
        className="border-b dark:border-neutral-800"
      >
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-b dark:border-neutral-800"
      >
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border-b dark:border-neutral-800"
      >
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`,
  },
  "collapsible/basic": {
    component: lazy(() => import("@/content/examples/collapsible/basic.tsx")),
    code: `"use client";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@sihaxito/deluxe-ui";

export function CollapsibleDemo() {
  return (
    <Collapsible className="space-y-2">
      <div className="flex items-center justify-between gap-2 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger className="flex h-6 w-6 items-center justify-center rounded-lg bg-neutral-100 p-2 dark:bg-neutral-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z"></path>
          </svg>
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm dark:border-neutral-800">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 transition-all duration-500 ease-out">
        <div className="rounded-md border px-4 py-3 font-mono text-sm dark:border-neutral-800">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm dark:border-neutral-800">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
`,
  },
  "dropdown-menu/basic": {
    component: lazy(() => import("@/content/examples/dropdown-menu/basic.tsx")),
    code: `"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@sihaxito/deluxe-ui";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Click me</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
`,
  },
  "sidebar/active-item": {
    component: lazy(() => import("@/content/examples/sidebar/active-item.tsx")),
    code: `import { CaretLeft, Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
} from "@sihaxito/deluxe-ui";
import { useState } from "react";

export function SidebarDemo() {
  const [active, setActive] = useState(1);
  return (
    <Sidebar className="absolute left-0 top-0 h-full">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem
            active={active === 1}
            onClick={() => setActive(1)}
            icon={<Layout />}
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            active={active === 2}
            onClick={() => setActive(2)}
            icon={<PaperPlane />}
          >
            Email
          </SidebarItem>
          <SidebarItem
            active={active === 3}
            onClick={() => setActive(3)}
            icon={<Gear />}
          >
            Settings
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
`,
  },
  "sidebar/basic": {
    component: lazy(() => import("@/content/examples/sidebar/basic.tsx")),
    code: `import { Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
} from "@sihaxito/deluxe-ui";

export function SidebarDemo() {
  return (
    <Sidebar>
      <SidebarItems>
      <SidebarItemGroup>
          <SidebarItem icon={<Layout />}> Dashboard</SidebarItem>
          <SidebarItem icon={<PaperPlane />}>Email</SidebarItem>
          <SidebarItem icon={<Gear />}>Settings</SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
`,
  },
  "sidebar/collapsible": {
    component: lazy(() => import("@/content/examples/sidebar/collapsible.tsx")),
    code: `import { CaretLeft, Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarHead,
  SidebarHeadTitle,
  SidebarHeadToggle,
} from "@sihaxito/deluxe-ui";

export function SidebarDemo() {
  return (
    <Sidebar className="absolute left-0 top-0 h-full">
      <SidebarHead className="w-full">
        <SidebarHeadTitle>Sidebar</SidebarHeadTitle>
        <SidebarHeadToggle />
      </SidebarHead>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem icon={<Layout />}> Dashboard</SidebarItem>
          <SidebarItem icon={<PaperPlane />}>Email</SidebarItem>
          <SidebarItem icon={<Gear />}>Settings</SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
`,
  },
  "sidebar/controlled-collapsible": {
    component: lazy(() => import("@/content/examples/sidebar/controlled-collapsible.tsx")),
    code: `import { CaretLeft, Gear, Layout, PaperPlane } from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarHead,
  SidebarHeadTitle,
} from "@sihaxito/deluxe-ui";
import { useState } from "react";

export function SidebarDemo() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sidebar
      className="absolute left-0 top-0 h-full"
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
    >
      <SidebarHead className="w-full">
        <button
          className="absolute right-0 flex h-5 w-5 translate-x-1/2 items-center justify-center rounded-lg bg-neutral-100 text-black"
          onClick={() => setCollapsed(!collapsed)}
        >
          <CaretLeft />
        </button>
        <SidebarHeadTitle>Sidebar</SidebarHeadTitle>
      </SidebarHead>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem icon={<Layout />}> Dashboard</SidebarItem>
          <SidebarItem icon={<PaperPlane />}>Email</SidebarItem>
          <SidebarItem icon={<Gear />}>Settings</SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
`,
  },
  "tabs/basic": {
    component: lazy(() => import("@/content/examples/tabs/basic.tsx")),
    code: `import { Bell, User } from "@phosphor-icons/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Switch,
} from "@sihaxito/deluxe-ui";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[300px]">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="account" left={<User />}>
          Account
        </TabsTrigger>
        <TabsTrigger className="w-full" value="notifications" left={<Bell />}>
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="account"
        className="rounded-lg border p-4 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <h3 className="mb-2 text-2xl font-semibold leading-none tracking-tight">
          Account
        </h3>
        <p className="mb-5 text-[15px] leading-normal text-neutral-600 dark:text-neutral-400">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none text-neutral-800 dark:text-neutral-200"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="h-[35px] shrink-0 grow rounded-lg px-2.5 text-[15px] leading-none text-neutral-700 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-neutral-800 dark:text-neutral-300 dark:shadow-neutral-800"
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none text-neutral-800 dark:text-neutral-200"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="h-[35px] shrink-0 grow rounded-lg px-2.5 text-[15px] leading-none text-neutral-700 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-neutral-800 dark:text-neutral-300 dark:shadow-neutral-800"
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset>
        <div className="mt-5 flex justify-end">
          <button className="inline-flex h-[35px] cursor-pointer items-center justify-center rounded-lg bg-green-500 px-[15px] text-[15px] font-medium leading-none outline-none hover:bg-green-600 focus:shadow-[0_0_0_2px] focus:shadow-green-700">
            Save changes
          </button>
        </div>
      </TabsContent>
      <TabsContent
        value="notifications"
        className="rounded-lg border p-4 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <h3 className="mb-2 text-2xl font-semibold leading-none tracking-tight">
          Notifications
        </h3>
        <p className="mb-5 text-[15px] leading-normal text-neutral-600 dark:text-neutral-400">
          Manage the notifications you wish to receive
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="marketing-emails" className="text-sm">
              Marketing emails
            </label>
            <Switch
              id="marketing-emails"
              className="dark:bg-neutral-800 dark:data-[state=checked]:bg-blue-500"
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="social-emails" className="text-sm">
              Social emails
            </label>
            <Switch
              id="social-emails"
              className="dark:bg-neutral-800 dark:data-[state=checked]:bg-blue-500"
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="activity-emails" className="text-sm">
              Activity emails
            </label>
            <Switch
              id="activity-emails"
              className="dark:bg-neutral-800 dark:data-[state=checked]:bg-blue-500"
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="security-emails" className="text-sm">
              Security emails
            </label>
            <Switch
              checked
              disabled
              id="security-emails"
              className="dark:bg-neutral-800 dark:data-[state=checked]:bg-blue-500"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
`,
  },
  "tabs/no-animation": {
    component: lazy(() => import("@/content/examples/tabs/no-animation.tsx")),
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@sihaxito/deluxe-ui";

export function TabsNoAnimationDemo() {
  return (
    <Tabs defaultValue="tab-1" disableAnimation>
      <TabsList>
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
`,
  },
  "tabs/solid": {
    component: lazy(() => import("@/content/examples/tabs/solid.tsx")),
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@sihaxito/deluxe-ui";

export function TabsSolidDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList>
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
`,
  },
  "tabs/underline": {
    component: lazy(() => import("@/content/examples/tabs/underline.tsx")),
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@sihaxito/deluxe-ui";

export function TabsUnderlineDemo() {
  return (
    <Tabs defaultValue="tab-1" variant="underline">
      <TabsList>
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
`,
  },
  "tabs/with-icons": {
    component: lazy(() => import("@/content/examples/tabs/with-icons.tsx")),
    code: `import { Badge } from "@/components/badge";
import { Bell, Gear, User } from "@phosphor-icons/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@sihaxito/deluxe-ui";

export function TabsWithIconsDemo() {
  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile" left={<User />}>
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings" left={<Gear />}>
          Settings
        </TabsTrigger>
        <TabsTrigger
          value="notifications"
          left={<Bell />}
          right={<Badge>NEW</Badge>}
        >
          Notifications
        </TabsTrigger>
      </TabsList>
      {/* <TabsContent value="profile">Tab 1 content</TabsContent>
      <TabsContent value="settings">Tab 2 content</TabsContent>
      <TabsContent value="notifications">Tab 2 content</TabsContent> */}
    </Tabs>
  );
}
`,
  },
  "tooltip/basic": {
    component: lazy(() => import("@/content/examples/tooltip/basic.tsx")),
    code: `"use client";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@sihaxito/deluxe-ui";

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Im a tooltip!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
`,
  },
};
