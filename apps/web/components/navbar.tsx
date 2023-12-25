"use client";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils";
import { useSidebarContext } from "./sidebar-context";
import Link from "next/link";
import { List, MagnifyingGlass, SquaresFour, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { context } = useSidebarContext();
  const pathname = usePathname();
  return (
    <header className="border-b dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 w-full sticky top-0 z-50">
      <div className="container h-[4rem] max-w-screen-2xl flex justify-between items-center">
        <div className="mr-4 flex items-center gap-x-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <SquaresFour className="h-8 w-8" weight="fill" />
            <span className="font-bold text-lg">Deluxe UI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className={cn(
                "transition-colors text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-200 hover:text-neutral-800"
              )}
            >
              Docs
            </Link>
            <Link
              href="/docs/components"
              className={cn(
                "transition-colors dark:hover:text-neutral-200 hover:text-neutral-800",
                pathname?.startsWith("/docs/components")
                  ? "dark:text-neutral-200 text-neutral-800"
                  : "text-neutral-600 dark:text-neutral-400"
              )}
            >
              Components
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:!block relative">
            <div className="absolute inset-y-0 left-0 justify-center flex items-center pl-3">
              <MagnifyingGlass className="h-4 w-4" />
            </div>
            <input
              className="text-sm w-24 sm:w-max h-8 !pl-8 rounded-lg border border-transparent bg-neutral-100 px-2 py-0.5 text-neutral-700 transition-[border] duration-300 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none dark:bg-neutral-900 dark:text-neutral-200 placeholder:dark:text-neutral-500 focus:dark:border-neutral-800"
              placeholder="Search..."
              required
            />
          </div>
          <nav className="flex items-center gap-2">
            <button className="md:hidden active:scale-90 ease-in-out duration-300 transform inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-transparent hover:bg-neutral-100 hover:text-neutral-900 dark:bg-transparent dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 w-8">
              <MagnifyingGlass className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Toggle search</span>
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
              className="active:scale-90 ease-in-out duration-300 transform inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-transparent hover:bg-neutral-100 hover:text-neutral-900 dark:bg-transparent dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 w-8"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
            {pathname.startsWith("/docs/") && (
              <button
                onClick={() => {
                  context.setOpen(!context.open);
                }}
                className="md:hidden active:scale-90 ease-in-out duration-300 transform inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 border border-neutral-200 bg-transparent hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-transparent dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-8 w-8"
              >
                {!context.open && <List className="h-5 w-5" />}
                {context.open && <X />}
                <span className="sr-only">Toggle sidebar</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
