"use client";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@sihaxito/deluxe-ui";

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Im a tooltip!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
