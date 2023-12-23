import React from "react";

export const tooltip = {
  "tooltip-basic": {
    component: React.lazy(() => import("./basic")),
    code: `"use client";
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
    }`,
  },
  "tooltip-multiple": {},
};
