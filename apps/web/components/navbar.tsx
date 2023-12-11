"use client";
import { Award, Command, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils";
import { useSidebarContext } from "./sidebar-context";
export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { context } = useSidebarContext();
  return (
    <nav className="px-4 gap-2 border-b dark:border-neutral-800 h-[4rem] bg-neutral-50 dark:bg-neutral-900 w-full sticky top-0 z-20 flex items-center justify-between">
      <div className="">
        <div className="md:hidden inline-flex items-center gap-2">
          <button
            onClick={() => context.setOpen(!context.open)}
            className="active:scale-90 ease-in-out duration-300 transform inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-transparent dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 w-8"
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </button>
          <Award className="h-8 w-8" />
        </div>
      </div>
      <div className="hidden md:flex h-8 active:scale-[.98] border dark:border-neutral-800 transition items-center gap-2 dark:hover:bg-neutral-800 text-sm max-w-xs w-full px-4 py-2 rounded-md text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400">
        <Search className="min-h-[1rem] min-w-[1rem] max-w-[1rem] max-h-[1rem] h-4 w-4" />
        <p className="line-clamp-1  ">Buscar en toda la pagina</p>
      </div>
      <div className="inline-flex items-center gap-2">
        <button className="flex md:hidden active:scale-90 ease-in-out duration-300 transform items-center justify-center rounded-md text-sm font-medium ring-offset-white transition gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-transparent dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 w-8">
          <Search className="h-[1.2rem] w-[1.2rem]" />
        </button>
        <button
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            } else if (theme === "light") {
              setTheme("dark");
            }
            if (theme === "system") {
              setTheme("light");
            }
          }}
          className=" active:scale-90 ease-in-out duration-300 transform inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-transparent dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 w-8"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </nav>
  );
}
