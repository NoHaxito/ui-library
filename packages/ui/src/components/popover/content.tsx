import * as React from "react";
import {
  PopoverPortal as RadixPopoverPortal,
  PopoverContent as RadixPopoverContent,
} from "@radix-ui/react-popover";
import { cn } from "../../utils";
import { popover } from "./theme";

type PopoverContentProps = React.ComponentProps<typeof RadixPopoverContent>;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof RadixPopoverContent>,
  PopoverContentProps
>(({ ...props }, forwardedRef) => {
  const { content } = popover();
  return (
    <RadixPopoverPortal>
      <RadixPopoverContent
        className={cn(content, props.className)}
        ref={forwardedRef}
        {...props}
      />
    </RadixPopoverPortal>
  );
});
PopoverContent.displayName = "PopoverContent";
