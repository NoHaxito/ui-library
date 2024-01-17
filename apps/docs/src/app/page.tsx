"use client";
import { Badge } from "@/components/badge";
import { Carousel } from "@/components/carousel";
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@deluxe/ui";
import { Question } from "@phosphor-icons/react";
import {
  Bell,
  CaretRight,
  Gear,
  House,
  List,
  Trash,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="container space-y-2 mx-auto py-4">
      <div className="flex items-center gap-2">
        <Button left={<House />} size="sm">
          Home
        </Button>
        <Button
          left={<Bell />}
          right={
            <div className="dark:bg-black bg-white px-2 py-0.5 rounded-lg text-xs text-black dark:text-white">
              NEW
            </div>
          }
          size="sm"
        >
          Notifications
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" left={<House />} size="sm">
          Home
        </Button>
        <Button
          variant="outline"
          left={<Bell />}
          right={
            <div className="dark:bg-black bg-white px-2 py-0.5 rounded-lg text-xs text-black dark:text-white">
              NEW
            </div>
          }
          size="sm"
        >
          Notifications
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon">
          <House />
        </Button>
        <Button variant="outline" size="icon">
          <Bell />
        </Button>
      </div>
      <div className="w-52 rounded-lg overflow-hidden">
        <div className="h-1.5 w-full bg-deluxe-200 dark:bg-deluxe-800 group overflow-hidden">
          <div className="animate-indeterminated-progress duration-1000 origin-[0%_50%] w-full h-full bg-blue-500"></div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <DropdownMenu modal>
          <DropdownMenuTrigger asChild>
            <Button left={<List />} size="sm">
              Open menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem icon={<User weight="fill" />}>
              Account
            </DropdownMenuItem>
            <DropdownMenuItem
              rightIcon={<Badge>New</Badge>}
              icon={<Gear weight="fill" />}
            >
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem icon={<Question weight="fill" />} shortcut={"F1"}>
              Support
            </DropdownMenuItem>
            <DropdownMenuItem
              icon={<Trash weight="fill" />}
              shortcut={"⌘D"}
              variant="danger"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="dark:text-white">Hello, World!</p>
          </PopoverContent>
        </Popover>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Open dialog</Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Get Started</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                maxime, debitis officiis.
              </DialogDescription>
            </DialogHeader>
            <input
              defaultValue={"npm install @deluxe/ui"}
              readOnly
              className="text-neutral-500 dark:text-neutral-300 w-full border focus:outline-none focus:border-deluxe-300 dark:focus:border-deluxe-700 bg-transparent transition-[border] duration-300 px-3 py-1 text-sm border-deluxe-200 dark:border-deluxe-900 rounded-deluxe"
            />
            <Button size="sm">See documentation</Button>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
