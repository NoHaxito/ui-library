import { DiscordDropdownMenu } from "@/components/discord-dropdown";

export default function DropdownPage() {
  return (
    <main className="relative py-6 lg:py-8 lg:grid lg:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2">
          <h1 className={"scroll-m-20 text-3xl font-bold tracking-tight"}>
            Dropdown Menu
          </h1>
          <p className="text-lg text-neutral-500">
            Displays a menu to the user—such as a set of actions or
            functions—triggered by a button.
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="grid place-items-center h-[300px] bg-neutral-100 dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <DiscordDropdownMenu />
          </div>
        </div>
      </div>
    </main>
  );
}