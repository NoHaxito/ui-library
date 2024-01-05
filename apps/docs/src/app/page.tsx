import { Button } from "@deluxe/ui";
import { Bell, House } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral-50 dark:bg-neutral-950 min-h-screen justify-center items-center gap-2">
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
          <div className="animate-indeterminated-progress origin-[0%_50%] w-full h-full bg-blue-500"></div>
        </div>
      </div>
    </main>
  );
}
