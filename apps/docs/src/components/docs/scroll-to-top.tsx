"use client";

import { Button } from "@deluxe/ui";
import { CaretUp } from "@phosphor-icons/react";

export function ScrollToTop() {
  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      size="sm"
      variant="ghost"
      className="w-full sm:w-auto hover:text-neutral-700 dark:hover:text-neutral-300"
      left={<CaretUp className="h-4 w-4" />}
    >
      Back to top
    </Button>
  );
}
