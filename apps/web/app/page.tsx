"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@sihaxito/deluxe-ui";
import { BellRing, Box, DollarSign } from "lucide-react";
import { useSidebarContext } from "../components/sidebar-context";

export default function Home() {
  const { context } = useSidebarContext();
  return (
    <main className="relative text-neutral-400 p-6  lg:p-8">
      <div className="py-2 flex flex-wrap items-center gap-2">
        <button
          onClick={() => context.setOverlay(!context.overlay)}
          className="flex items-center gap-2 justify-center px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-300 dark:hover:text-neutral-900"
        >
          Toggle overlay
        </button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => context.setCollapsed(!context.collapsed)}
                className="flex items-center gap-2 justify-center px-4 py-2 rounded-lg bg-neutral-800 text-neutral-200 hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-800 dark:hover:bg-neutral-300 dark:hover:text-neutral-900"
              >
                Toggle Collapse
              </button>
            </TooltipTrigger>
            <TooltipContent arrow>Collapse sidebar :0</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div
        id="cards_container"
        className="grid grid-cols-1 sm:grid-cols-3 gap-2"
      >
        <div
          id="card_root"
          className="text-neutral-200 bg-neutral-900 shadow-sm rounded-lg"
        >
          <div id="card_header" className="flex flex-col space-y-1.5 p-6">
            <h3
              id="card_title"
              className="text-2xl font-semibold leading-none tracking-tight"
            >
              Notifications
            </h3>
            <span id="card_description" className="text-sm text-neutral-500 ">
              You have 3 unread messages.
            </span>
          </div>
          <div id="card_content" className="grid gap-4 p-6 pt-0">
            <div className=" flex items-center space-x-4 rounded-md border dark:border-neutral-800 p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <label className="relative inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-dark:bg-neutral-950 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-neutral-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-300 peer-checked:bg-neutral-600"></div>
              </label>
            </div>
            <div className="grid gap-y-1">
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="gap-x-4 flex-1 bg-neutral-800/80 rounded-xl p-3 flex items-center gap-2"
                >
                  <Box className="h-4 w-4" />
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {notification.description}
                    </p>
                  </div>
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];
