"use client";
import "@/styles/mdx.css";
import { DocsSidebar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 items-start md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-6">
      <DocsSidebar />
      {children}
    </div>
  );
}
