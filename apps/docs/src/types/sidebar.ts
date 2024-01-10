export type SidebarSubItems = {
  title: string;
  href: string;
  label?: string;
  disabled?: boolean;
};
export type SidebarItem = {
  title: string;
  items: SidebarSubItems[];
};
