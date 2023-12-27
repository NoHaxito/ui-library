import { SidebarComp } from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-[calc(100vh-4rem)] md:grid-cols-[auto_minmax(0,1fr)] md:gap-10">
      <SidebarComp />
      {children}
    </div>
  );
}
