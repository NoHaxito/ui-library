"use client";
import * as React from "react";
import {
  TooltipArrow as TooltipPrimitiveArrow,
  TooltipContent as TooltipPrimitiveContent,
  type TooltipContentProps,
  TooltipPortal as TooltipPrimitivePortal,
} from "@radix-ui/react-tooltip";
import { cn } from "../../utils";
import { tooltip } from "./theme";

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
        {arrow && !props.asChild ? (
          <TooltipPrimitiveArrow className={tooltip().arrow} />
        ) : null}
      </TooltipPrimitiveContent>
    </TooltipPrimitivePortal>
  );
});
TooltipContent.displayName = "TooltipContent";
export { TooltipContent, type TooltipContentProps };
