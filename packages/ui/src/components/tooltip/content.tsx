"use client";
import * as React from "react";
import { tooltip } from "./theme";
import {
  TooltipArrow as TooltipPrimitiveArrow,
  TooltipContent as TooltipPrimitiveContent,
  TooltipContentProps,
  TooltipPortal as TooltipPrimitivePortal,
} from "@radix-ui/react-tooltip";
import { cn } from "../../utils";

interface ContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitiveContent> {
  arrow?: boolean;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitiveContent>,
  ContentProps
>(({ className, arrow, ...props }, forwardedRef) => {
  return (
    <TooltipPrimitivePortal>
      <TooltipPrimitiveContent
        ref={forwardedRef}
        {...props}
        className={cn(tooltip().content, className)}
      >
        {props.children}
        {arrow && !props.asChild && (
          <TooltipPrimitiveArrow className={tooltip().arrow} />
        )}
      </TooltipPrimitiveContent>
    </TooltipPrimitivePortal>
  );
});
export { TooltipContent, type TooltipContentProps };
