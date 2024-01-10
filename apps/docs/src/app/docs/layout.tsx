// import { SidebarComp } from "@/components/sidebar";

import Link from "next/link";
import "@/styles/mdx.css";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-6">
      {/* <SidebarComp /> */}
      <aside className="fixed left-0 min-w-[16rem] top-[4rem] z-30 !h-[calc(100vh-4rem)] w-full shrink-0 -translate-x-[200%] border-r border-none bg-white transition-[width,transform] duration-500 data-[open=true]:translate-x-0 dark:border-deluxe-800 dark:bg-deluxe-950 md:sticky md:-ml-4 md:block md:translate-x-0 md:duration-300">
        <nav className="overflow-hidden overflow-y-auto h-full my-0 pr-2 first:my-4 px-3 overflow-x-hidden flex flex-1 flex-col gap-y-6">
          <ul className="flex flex-col">
            <li>
              <Link
                href="#"
                className="px-3 max-h-[2rem] min-h-[2rem] rounded-deluxe bg-deluxe-200 dark:bg-deluxe-900  text-deluxe-500 dark:text-deluxe-400 hover:text-deluxe-700  dark:hover:text-deluxe-100 border border-transparent group truncate w-full flex items-center text-sm outline-none ring-inset focus-visible:ring-2 focus-visible:rounded-deluxe py-2.5 gap-x-3"
              >
                <span className="flex w-full items-center justify-between transition-opacity duration-[800ms]">
                  Installation
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      {children}
    </div>
  );
}
