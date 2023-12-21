import { SidebarComp } from "@/components/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[calc(100vh-4rem)] md:gap-10 grid md:grid-cols-[auto_minmax(0,1fr)]">
            <SidebarComp />
            {children}
        </div>
    )
}