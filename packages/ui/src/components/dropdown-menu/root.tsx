"use client";
import * as React from "react";
import { Root } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuProps = React.ComponentProps<typeof Root>;

export const DropdownMenu = ({
  modal = false,
  ...props
}: DropdownMenuProps) => {
  return <Root {...props} modal={modal} />;
};
