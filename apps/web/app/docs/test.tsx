import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function DefaultPage() {
  return (
    <main className="relative grid p-6 lg:grid-cols-[1fr_275px] lg:gap-10 lg:p-8">
      <div className="grid h-max gap-2 sm:grid-cols-2">
        <Link href="/docs">
          <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow transition-colors duration-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Documentation
            </h5>
            <p className="mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
              consectetur ratione exercitationem a corrupti eveniet.
            </p>
          </div>
        </Link>
        <Link href="/examples">
          <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow transition-colors duration-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Examples
            </h5>
            <p className="mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
              consectetur ratione exercitationem a corrupti eveniet.
            </p>
          </div>
        </Link>
      </div>
      <div className="hidden text-sm lg:flex">
        <div className="sticky top-16 -mt-10 pt-4">
          <div className="sticky top-16 -mt-10 h-[calc(100vh-4rem)] py-12">
            <div className="space-y-2">
              <p className="font-medium">On this page</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
