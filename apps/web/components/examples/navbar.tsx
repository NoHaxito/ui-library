"use client";
import { Award, Menu, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSidebarContext } from "../sidebar-context";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { context } = useSidebarContext();
  return (
    <nav className="sticky top-0 z-50 flex h-[4rem] w-full items-center justify-between gap-2 border-b bg-neutral-50 px-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="">
        <div className="inline-flex items-center gap-2 text-xl font-bold">
          <button
            className="inline-flex h-8 w-8 transform items-center justify-center gap-2 rounded-md border border-neutral-200 bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300 md:hidden"
            onClick={() => {
              context.setOpen(!context.open);
            }}
            type="button"
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </button>
          <Award className="h-8 w-8" />
          Deluxe UI
        </div>
      </div>
      <div className="hidden h-8 w-full max-w-xs items-center gap-2 rounded-md border px-4 py-2 text-sm text-neutral-700 transition hover:bg-neutral-100 active:scale-[.98] dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 md:flex">
        <Search className="h-4 max-h-[1rem] min-h-[1rem] w-4 min-w-[1rem] max-w-[1rem]" />
        <p className="line-clamp-1  ">Buscar en toda la pagina</p>
      </div>
      <div className="inline-flex items-center gap-2">
        <button
          className="flex h-8 w-8 transform items-center justify-center gap-2 rounded-md border border-neutral-200 bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300 md:hidden"
          type="button"
        >
          <Search className="h-[1.2rem] w-[1.2rem]" />
        </button>
        <button
          className=" inline-flex h-8 w-8 transform items-center justify-center gap-2 rounded-md border border-neutral-200 bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300"
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
          type="button"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </nav>
  );
}
