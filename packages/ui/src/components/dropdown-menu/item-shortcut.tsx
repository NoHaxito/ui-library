"use client";

import * as React from "react";
import { dropdownMenu } from "./theme";

interface DropdownItemShortcutProps extends React.ComponentProps<"div"> {}

export const DropdownMenuItemShortcut = ({
  ...props
}: DropdownItemShortcutProps) => {
  const { shortcut } = dropdownMenu();
  return (
    <div {...props} className={shortcut({ className: props.className })} />
  );
};
