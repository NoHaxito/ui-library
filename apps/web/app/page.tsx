import { BookOpenText } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function DefaultPage() {
  return (
    <div className="container relative mx-auto py-4">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        <Link
          className="relative flex flex-col rounded-xl bg-neutral-100/80 bg-clip-border text-neutral-700 hover:bg-neutral-100 dark:bg-neutral-900/80 dark:text-neutral-200 dark:hover:bg-neutral-900"
          href="/docs"
        >
          <div className="p-6">
            <BookOpenText className="h-12 w-12" weight="fill" />
            <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-neutral-900 antialiased dark:text-white">
              Documentation
            </h5>
            <p className="block text-base font-light leading-relaxed text-inherit text-neutral-600 antialiased dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ea
              laudantium.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
