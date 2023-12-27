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
    <header className="sticky top-0 z-50 w-full border-b bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="container flex h-[4rem] max-w-screen-2xl items-center justify-between">
        <div className="mr-4 flex items-center gap-x-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <SquaresFour className="h-8 w-8 rotate-45 hover:-rotate-90 ease-in duration-500 transition-transform" weight="fill" />
            <span className="text-lg font-bold">Deluxe UI</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="/docs"
              className={cn(
                "text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200",
              )}
            >
              Docs
            </Link>
            <Link
              href="/docs/components"
              className={cn(
                "transition-colors hover:text-neutral-800 dark:hover:text-neutral-200",
                pathname?.startsWith("/docs/components")
                  ? "text-neutral-800 dark:text-neutral-200"
                  : "text-neutral-600 dark:text-neutral-400",
              )}
            >
              Components
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden md:!block">
            <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
              <MagnifyingGlass className="h-4 w-4" />
            </div>
            <input
              className="h-8 w-24 rounded-lg border border-transparent bg-neutral-100 px-2 py-0.5 !pl-8 text-sm text-neutral-700 transition-[border] duration-300 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none dark:bg-neutral-900 dark:text-neutral-200 placeholder:dark:text-neutral-500 focus:dark:border-neutral-800 sm:w-max"
              placeholder="Search..."
              required
            />
          </div>
          <nav className="flex items-center gap-2">
            <button className="inline-flex h-8 w-8 transform items-center justify-center gap-2 rounded-md bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300 md:hidden">
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
              className="inline-flex h-8 w-8 transform items-center justify-center gap-2 rounded-md bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300"
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
                className="inline-flex h-8 w-8 transform items-center justify-center gap-2 rounded-md border border-neutral-200 bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300 md:hidden"
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
