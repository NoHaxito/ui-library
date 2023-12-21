import { SidebarComp } from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 md:gap-6 md:grid md:grid-cols-[auto_minmax(0,1fr)]">
      <SidebarComp />
      {children}
    </div>
  );
}
