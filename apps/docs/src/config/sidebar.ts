import type { SidebarItem } from "@/types/sidebar";

type SidebarDocs = SidebarItem[];

export const sidebarItems: SidebarDocs = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Installation",
        href: "/docs/getting-started/installation",
      },
      {
        title: "Customization",
        href: "/docs/getting-started/customization",
      },
    ],
  },
  {
    title: "Installation",
    items: [
      {
        title: "Next.js",
        href: "/docs/installation/nextjs",
      },
      {
        title: "Vite",
        href: "/docs/installation/vite",
        disabled: true,
      },
      {
        title: "Remix",
        href: "/docs/installation/remix",
        disabled: true,
      },
      {
        title: "Astro",
        href: "/docs/installation/astro",
        disabled: true,
      },
      {
        title: "Manual",
        href: "/docs/installation/manual",
        disabled: true,
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
        disabled: true,
      },
      {
        title: "Alert dialog",
        href: "/docs/components/alert-dialog",
        disabled: true,
      },
      {
        title: "Badge",
        href: "/docs/components/badge",
        disabled: true,
        label: "New",
      },
      {
        title: "Card",
        href: "/docs/components/card",
        disabled: true,
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
        disabled: true,
      },
      {
        title: "Collapsible",
        href: "/docs/components/collapsible",
        disabled: true,
      },
      {
        title: "Context Menu",
        href: "/docs/components/context-menu",
        disabled: true,
      },
      {
        title: "Dialog",
        href: "/docs/components/dialog",
        disabled: true,
      },
      {
        title: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
        disabled: true,
      },
      {
        title: "Hover Card",
        href: "/docs/components/hover-card",
        disabled: true,
      },
      {
        title: "Input",
        href: "/docs/components/input",
        disabled: true,
      },
      {
        title: "Menubar",
        href: "/docs/components/menubar",
        disabled: true,
      },
      {
        title: "Multi Select",
        href: "/docs/components/multi-select",
        label: "New",
        disabled: true,
      },
      {
        title: "Popover",
        href: "/docs/components/popover",
        disabled: true,
      },
      {
        title: "Progress",
        href: "/docs/components/progress",
        disabled: true,
      },
      {
        title: "Radio Group",
        href: "/docs/components/radio-group",
        disabled: true,
      },
      {
        title: "Select",
        href: "/docs/components/select",
        disabled: true,
      },
      {
        title: "Sidebar",
        href: "/docs/components/sidebar",
        label: "New",
        disabled: true,
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
        disabled: true,
      },
      {
        title: "Tabs",
        href: "/docs/components/tabs",
        disabled: true,
      },
      {
        title: "Toast",
        href: "/docs/components/toast",
        label: "Soon",
        disabled: true,
      },
      {
        title: "Tooltip",
        href: "/docs/components/tooltip",
        disabled: true,
      },
    ],
  },
];
