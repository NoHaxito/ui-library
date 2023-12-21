import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function DefaultPage() {
  return (
    <main className="relative p-6 lg:p-8 grid lg:gap-10 lg:grid-cols-[1fr_275px]">
      <div className="h-max grid sm:grid-cols-2 gap-2">
        <Link href="/docs">
          <div className="hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300 p-4 bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-900 dark:border-neutral-800">
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
          <div className="hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300 p-4 bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-900 dark:border-neutral-800">
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
