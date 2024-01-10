"use client";

import { Button } from "@deluxe/ui";
import { CaretUp } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import Github from "../icons/github";
import Link from "next/link";

export function EditPageLink() {
  const baseUrl =
    "https://github.com/NoHaxito/ui-library/edit/main/apps/docs/src/content";
  const pathname = usePathname();

  return (
    <Button
      size="sm"
      variant="ghost"
      className="w-full sm:w-auto text-start hover:text-neutral-700 dark:hover:text-neutral-300"
      left={<Github className="h-4 w-4" />}
      asChild
    >
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={`${baseUrl}${pathname}.mdx`}
      >
        Edit on github
      </Link>
    </Button>
  );
}
