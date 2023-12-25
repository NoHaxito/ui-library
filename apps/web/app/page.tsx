import { BookOpenText } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function DefaultPage() {
  return (
    <div className="p-4 relative">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        <Link
          href="/docs"
          className="relative flex flex-col dark:text-neutral-200 text-neutral-700 dark:bg-neutral-900/80 dark:hover:bg-neutral-900 bg-neutral-100/80 hover:bg-neutral-100 bg-clip-border rounded-xl"
        >
          <div className="p-6">
            <BookOpenText className="w-12 h-12" weight="fill" />
            <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal dark:text-white text-neutral-900">
              Documentation
            </h5>
            <p className="dark:text-neutral-400 text-neutral-600 block text-base antialiased font-light leading-relaxed text-inherit">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ea
              laudantium.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
