import { SidebarComp } from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-6">
      <SidebarComp />
      {children}
    </div>
  );
}
