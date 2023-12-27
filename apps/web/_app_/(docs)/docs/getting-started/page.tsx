import { DiscordDropdownMenu } from "@/components/discord-dropdown";

export default function GettingStarted() {
  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:py-8">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2">
          <h1 className={"scroll-m-20 text-3xl font-bold tracking-tight"}>
            Getting Started
          </h1>
          <p className="text-lg text-neutral-500">
            This guide will help you get started with your project.
          </p>
        </div>
        <div className="pb-12 pt-8"></div>
      </div>
    </main>
  );
}
