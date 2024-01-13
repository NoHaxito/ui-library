"use client";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@deluxe/ui";
import { Bell, House, List } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
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
          <DropdownMenuContent>
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem variant="danger">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </main>
  );
}
