"use client";

import { cn } from "@/lib/utils";
import { Button } from "@deluxe/ui";
import { CaretLeft, List } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "./sidebar-toggle";

export const SubNav = () => {
  const pathname = usePathname();
  const { context } = useSidebarContext();
  if (!pathname.startsWith("/docs/")) return null;
  return (
    <div className="sticky top-[4rem] bg-white z-20 dark:bg-neutral-950 h-[3rem] container mx-auto border-b dark:border-neutral-800 flex md:hidden items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => context.setOpen(!context.open)}
        className="h-8 w-8"
        left={<List className="h-5 w-5" />}
      />
      <hr className="h-[50%] border-0 bg-neutral-200 dark:bg-neutral-800 w-px" />
      <div className="text-sm pl-2 gap-x-2 flex items-center">
        {pathname
          ?.replace("/docs/", "")
          .split("/")
          .map((path) => {
            return (
              <div
                className={cn(
                  path === pathname?.replace("/docs/", "").split("/").pop() &&
                    "dark:!text-white text-neutral-800",
                  "flex items-center gap-x-2 capitalize text-neutral-500 dark:text-neutral-400"
                )}
                key={path}
              >
                <span className="line-clamp-1">{path.replace("-", " ")}</span>
                {/* add a separator to all elements but the last one in the array doesnt have a separator */}
                {path !== pathname?.replace("/docs/", "").split("/").pop() && (
                  <CaretLeft className="rotate-180" />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
