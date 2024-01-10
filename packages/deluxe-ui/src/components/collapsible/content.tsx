import {
  CollapsibleContent as RadixCollapsibleContent,
  CollapsibleContentProps as RadixCollapsibleContentProps,
} from "@radix-ui/react-collapsible";
import { type ElementRef, forwardRef } from "react";
import { collapsibleTheme } from "./theme";

export type CollapsibleContentProps = RadixCollapsibleContentProps;

export const CollapsibleContent = forwardRef<
  ElementRef<typeof RadixCollapsibleContent>,
  CollapsibleContentProps
>(({ className, ...props }, ref) => {
  const { content } = collapsibleTheme();
  return (
    <RadixCollapsibleContent
      ref={ref}
      className={content({ className })}
      {...props}
    />
  );
});

CollapsibleContent.displayName = "CollapsibleContent";
