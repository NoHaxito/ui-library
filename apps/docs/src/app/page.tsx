"use client";
import { Badge } from "@/components/badge";
import { cn } from "@/lib/utils";
import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Popover,
  PopoverContent,
  PopoverTrigger,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  useBackdrop,
} from "@deluxe/ui";

import { Copy, Download, Printer, Share } from "@phosphor-icons/react";
import {
  Bell,
  CaretRight,
  Gear,
  House,
  List,
  Trash,
  User,
  Plus,
  Question,
  Dot,
  Checks,
} from "@phosphor-icons/react/dist/ssr";
import { useState, CSSProperties } from "react";
import { Drawer } from "vaul";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const { height, width, left, top } = useBackdrop(
    "#nav-items [data-active=true]",
  );

  return (
    <main className="space-y-2 py-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button left={<House />} size="sm">
          Home
        </Button>
        <Button variant="danger" left={<Trash />} size="sm">
          Danger button
        </Button>
        <Button
          left={<Bell />}
          right={
            <div className="rounded-lg bg-white px-2 py-0.5 text-xs text-black dark:bg-black dark:text-white">
              NEW
            </div>
          }
          size="sm"
        >
          Notifications
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant="outline" left={<House />} size="sm">
          Home
        </Button>
        <Button
          variant="outline"
          left={<Bell />}
          right={
            <div className="rounded-lg bg-white px-2 py-0.5 text-xs text-black dark:bg-black dark:text-white">
              NEW
            </div>
          }
          size="sm"
        >
          Notifications
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button size="icon">
          <House />
        </Button>
        <Button variant="outline" size="icon">
          <Bell />
        </Button>
      </div>
      <div className="w-52 overflow-hidden rounded-lg">
        <div className="bg-deluxe-200 dark:bg-deluxe-800 group h-1.5 w-full overflow-hidden">
          <div className="animate-indeterminated-progress h-full w-full origin-[0%_50%] bg-blue-500 duration-1000"></div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <DropdownMenu modal>
          <DropdownMenuTrigger asChild>
            <Button left={<List />} size="sm">
              Open menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Menu content</DropdownMenuLabel>
            <DropdownMenuItem icon={<User weight="fill" />}>
              Account
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => setOpen(true)}
              icon={<Bell weight="fill" />}
              rightIcon={
                <Badge className="h-4 w-4 rounded-full bg-red-500 text-center text-xs">
                  3
                </Badge>
              }
            >
              Notifications
            </DropdownMenuItem>
            <DropdownMenuItem icon={<Gear weight="fill" />}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem icon={<Question weight="fill" />} shortcut={"F1"}>
              Support
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              icon={<Trash weight="fill" />}
              shortcut={"⌘D"}
              variant="danger"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Drawer.Root open={open} onOpenChange={setOpen} direction="left">
          <Drawer.Trigger asChild>
            <Button
              size="sm"
              left={<Bell />}
              right={
                <Dot weight="fill" className="animate-pulse text-red-500" />
              }
            >
              Notifications
            </Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Content className="fixed inset-x-0 left-0 top-0 z-[60] flex h-full w-72 flex-col rounded-r-[10px] border-r border-neutral-900 bg-neutral-950 p-4 sm:w-64">
              {/* <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-neutral-700 dark:bg-neutral-300" /> */}
              <div className="flex items-center justify-between gap-x-2">
                <h3 className="font-heading text-xl font-semibold tracking-tight after:text-sm after:text-neutral-500 after:content-['_(3)']">
                  Notifications
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  left={<Checks />}
                />
              </div>
              <div className="my-2 h-px w-full rounded-lg bg-neutral-800 dark:bg-neutral-800" />
              <ul className="space-y-1 overflow-auto">
                <li className="flex w-full items-center gap-2 rounded-lg bg-neutral-900 p-2">
                  <div className="size-6 max-h-6 min-h-6 min-w-6 max-w-6 rounded-full bg-neutral-800" />
                  <div>
                    <p className="text-sm">Notification 1</p>
                    <span className=" line-clamp-1 text-xs text-neutral-500">
                      This is a notification description
                    </span>
                  </div>
                  <Dot weight="fill" className="ml-auto text-blue-400" />
                </li>
                <li className="flex w-full items-center gap-2 rounded-lg bg-neutral-900 p-2">
                  <div className="size-6 max-h-6 min-h-6 min-w-6 max-w-6 rounded-full bg-neutral-800" />
                  <div>
                    <p className="text-sm">Notification 2</p>
                    <span className=" line-clamp-1 text-xs text-neutral-500">
                      This is a notification description
                    </span>
                  </div>
                  {/* <Dot weight="fill" className="ml-auto text-blue-400" /> */}
                </li>
                <li className="flex w-full items-center gap-2 rounded-lg bg-neutral-900 p-2">
                  <div className="size-6 max-h-6 min-h-6 min-w-6 max-w-6 rounded-full bg-neutral-800" />
                  <div>
                    <p className="text-sm">Notification 3</p>
                    <span className=" line-clamp-1 text-xs text-neutral-500">
                      This is a notification description
                    </span>
                  </div>
                  {/* <Dot weight="fill" className="ml-auto text-blue-400" /> */}
                </li>
              </ul>
            </Drawer.Content>
            <Drawer.Overlay className="fixed inset-0 z-50 bg-black/80" />
          </Drawer.Portal>
        </Drawer.Root>
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
          <DialogContent className="max-w-sm duration-500">
            <DialogClose className="absolute right-4 top-4" />
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
              className="focus:border-deluxe-300 dark:focus:border-deluxe-700 border-deluxe-200 dark:border-deluxe-900 rounded-deluxe w-full border bg-transparent px-3 py-1 text-sm text-neutral-500 transition-[border] duration-300 focus:outline-none dark:text-neutral-300"
            />
            <DialogFooter>
              <Button size="sm">See documentation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <Button size="sm" className="flex sm:hidden" left={<Gear />}>
              Settings
            </Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Content className="rounded-t-deluxe fixed inset-x-0 bottom-0 z-[60] flex max-h-[96%] w-full flex-col border-neutral-200 bg-neutral-100 dark:border-neutral-900 dark:bg-neutral-950">
              <div className="mx-auto mt-4 mb-2 h-2 w-[100px] rounded-full bg-neutral-700 dark:bg-neutral-500" />
              <div className="overflow-auto p-4">
                <div className="mb-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Flowbite"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="flowbite.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="visitors"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Unique visitors (per month)
                    </label>
                    <input
                      type="number"
                      id="visitors"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="confirm_password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <div className="mb-6 flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </Drawer.Content>
            <Drawer.Overlay className="fixed inset-0 z-50 bg-black/80" />
          </Drawer.Portal>
        </Drawer.Root>
      </div>
      {/* speed dial */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "animate-in fade-in-0 zoom-in-75 slide-in-from-bottom-full group fixed bottom-6 right-6 h-10 w-10",
            )}
            size="icon"
          >
            <Plus className="tranform h-6 w-6 transition-transform duration-300 ease-in-out group-data-[state=open]:-rotate-45" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          side="top"
          align="center"
          className="group mb-2 flex min-w-[40px] max-w-[40px] flex-col items-center justify-center gap-y-2 !bg-transparent p-0"
        >
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "group-data-[state=open]:animate-in group-data-[state=open]:fade-in-0 group-data-[state=open]:slide-in-from-right-4 group-data-[state=open]:zoom-in-0 h-9 w-9 bg-neutral-200 duration-1000 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
                  )}
                  size="icon"
                >
                  <Share className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Share</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "group-data-[state=open]:animate-in group-data-[state=open]:fade-in-0 group-data-[state=open]:slide-in-from-right-4 group-data-[state=open]:zoom-in-0 h-9 w-9 bg-neutral-200 duration-1000 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
                  )}
                  size="icon"
                >
                  <Printer className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Print</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "group-data-[state=open]:animate-in group-data-[state=open]:fade-in-0 group-data-[state=open]:slide-in-from-right-4 group-data-[state=open]:zoom-in-0 h-9 w-9 bg-neutral-200 duration-1000 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
                  )}
                  size="icon"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Download</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={cn(
                    "group-data-[state=open]:animate-in group-data-[state=open]:fade-in-0 group-data-[state=open]:slide-in-from-right-4 group-data-[state=open]:zoom-in-0 h-9 w-9 bg-neutral-200 duration-1000 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white",
                  )}
                  size="icon"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">Copy</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </PopoverContent>
      </Popover>
      {/* speed dial */}

      <div>
        <ul id="nav-items" className="relative z-10 flex items-center gap-x-2">
          {["element 1", "im a bigger element", "element 2"].map(
            (item, idx) => (
              <Button
                onClick={() => setActive(idx)}
                variant="ghost"
                key={idx}
                data-active={active === idx ? true : null}
                size="sm"
              >
                {item}
              </Button>
            ),
          )}
          <div
            style={
              {
                ["--width"]: `${width}px`,
                ["--height"]: `${height}px`,
                ["--top"]: `${top}px`,
                ["--left"]: `${left}px`,
              } as CSSProperties
            }
            className="rounded-deluxe absolute left-0 -z-[2] h-[var(--height)] w-[var(--width)] translate-x-[var(--left)] bg-neutral-900 transition-[width,transform] duration-500 ease-in-out"
          />
        </ul>
      </div>
    </main>
  );
}
