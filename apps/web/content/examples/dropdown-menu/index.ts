import React from "react";

export const dropdownMenu = {
  "dropdown-basic": {
    component: React.lazy(() => import("./basic")),
    code: `"use client";
    
    import {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
    } from "@sihaxito/deluxe-ui";
    
    export default function DropdownMenuDemo() {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>Click me</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }`,
  },
};
