"use client";
import * as React from "react";
import {
  DropdownMenuPortal as RadixDropdownMenuPortal,
  DropdownMenuContent as RadixDropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { cn } from "../../lib/utils";
import { dropdownTheme } from "./theme";
import { Transition } from "@headlessui/react";
import { useDropdownMenuContext } from "./context";

type DropdownMenuContentProps = React.ComponentProps<
  typeof RadixDropdownMenuContent
>;

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenuContent>,
  DropdownMenuContentProps
>(({ className, side = "bottom", sideOffset = 4, ...props }, forwardedRef) => {
  const {
    context: { open, setOpen },
  } = useDropdownMenuContext();
  const content = dropdownTheme.content;
  const animations = dropdownTheme.animations;

  return (
    <RadixDropdownMenuPortal>
      {/* <Transition.Root as={React.Fragment} show={open}>
        <Transition.Child as={React.Fragment} {...animations[side]}> */}
          <RadixDropdownMenuContent
            forceMount
            {...props}
            className={cn(
              content({ className }),
              "[transform-origin:bottom_right]"
            )}
            ref={forwardedRef}
            sideOffset={sideOffset}
          />
        {/* </Transition.Child>
      </Transition.Root> */}
    </RadixDropdownMenuPortal>
  );
});
DropdownMenuContent.displayName = "DropdownMenuContent";
