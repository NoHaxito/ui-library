"use client";
import * as React from "react";
import {
  TooltipArrow as TooltipPrimitiveArrow,
  TooltipContent as TooltipPrimitiveContent,
  type TooltipContentProps,
  TooltipPortal as TooltipPrimitivePortal,
} from "@radix-ui/react-tooltip";
import { tooltipTheme } from "./theme";

interface ContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitiveContent> {
  arrow?: boolean;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitiveContent>,
  ContentProps
>(({ className, side = "top", arrow, ...props }, forwardedRef) => {
  return (
    <TooltipPrimitivePortal>
      <TooltipPrimitiveContent
        ref={forwardedRef}
        side={side}
        {...props}
        className={tooltipTheme.content({ className, side })}
      >
        {props.children}
        {arrow && !props.asChild ? (
          <TooltipPrimitiveArrow className={tooltipTheme.arrow} />
        ) : null}
      </TooltipPrimitiveContent>
    </TooltipPrimitivePortal>
  );
});
TooltipContent.displayName = "TooltipContent";
export { TooltipContent, type TooltipContentProps };
