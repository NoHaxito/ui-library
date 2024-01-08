import { useEffect, useState } from "react";
import {
  Command,
  MagnifyingGlass,
  Moon,
  SquaresFour,
  Sun,
} from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import Github from "../icons/Github";
export function Navbar({ pathname }: { pathname: string }) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="container mx-auto flex h-[3.8rem] items-center justify-between">
        <div className="mr-1 flex items-center gap-x-1">
          <a
            className="flex items-center space-x-2 transition-transform ease-in active:scale-95"
            href="/"
          >
            <div className="group flex h-8 w-8 items-center justify-center rounded-[10px] bg-black">
              <SquaresFour
                className="h-6 w-6 rotate-45 text-white transition-transform duration-500 ease-in group-hover:-rotate-90"
                weight="fill"
              />
            </div>
            <span className="text-lg font-bold">Deluxe UI</span>
          </a>
          <nav className="ml-10 hidden items-center gap-6 text-sm md:flex">
            <a
              className={cn(
                "text-neutral-600 transition-[transform,colors] ease-in hover:text-neutral-800 active:scale-95 dark:text-neutral-400 dark:hover:text-neutral-200"
              )}
              href="/docs"
            >
              Docs
            </a>
            <a
              className={cn(
                "transition-[transform,colors] ease-in hover:text-neutral-800 active:scale-95 dark:hover:text-neutral-200",
                pathname.startsWith("/docs/components")
                  ? "font-bold text-neutral-800 dark:text-neutral-200"
                  : "text-neutral-600 dark:text-neutral-400"
              )}
              href="/docs/components"
            >
              Components
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="hidden h-8 w-56 items-center justify-between gap-2 rounded-lg border border-transparent bg-neutral-100 px-2 py-0.5 text-sm text-neutral-700 transition-[border,transform] duration-300 focus:border-neutral-200 focus:outline-none active:scale-95 dark:bg-neutral-900 dark:text-neutral-200 focus:dark:border-neutral-800 md:flex"
            type="button"
          >
            <div className=" flex items-center gap-x-2 text-neutral-600 dark:text-neutral-400">
              <MagnifyingGlass className="h-4 w-4" />
              Search
            </div>
            <kbd className="flex items-center rounded-md bg-neutral-200 px-1 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              <Command className="h-4 w-4" /> K
            </kbd>
          </button>
          <nav className="flex items-center gap-1">
            <button
              className="inline-flex h-8 w-8 transform items-center justify-center gap-2 rounded-md bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300 md:hidden"
              type="button"
            >
              <MagnifyingGlass className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Toggle search</span>
            </button>
            <a
              className="group inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300"
              href="https://github.com/nohaxito/ui-library"
              rel="noreferrer"
              target="_blank"
            >
              <Github
                className="opacity-80 group-hover:opacity-100 "
                size={19.2}
              />
              <span className="sr-only">DeluxeUI Github </span>
            </a>
            <button
              className="inline-flex h-8 w-8 items-center justify-center gap-2 rounded-md bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300"
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
              {theme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" weight="fill" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" weight="fill" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
            {/* {pathname.startsWith("/docs/") && (
              <button
                className="inline-flex h-8 w-8 transform items-center justify-center gap-2 rounded-md bg-transparent text-sm font-medium ring-offset-white transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-300 md:hidden"
                onClick={() => {
                  context.setOpen(!context.open);
                }}
                type="button"
              >
                {!context.open && <List className="h-5 w-5" />}
                {context.open ? <X /> : null}
                <span className="sr-only">Toggle sidebar</span>
              </button>
            )} */}
          </nav>
        </div>
      </div>
    </header>
  );
}
