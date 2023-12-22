import Link from "next/link";

export default function DefaultPage() {
  return (
    <main className="p-4">
      <div>
        <Link href="/docs">
          <div className="hover:bg-neutral-100 dark:hover:bg-neutral-800 max-w-sm transition-colors duration-300 p-4 bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-900 dark:border-neutral-800">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Documentation
            </h5>
            <p className="mb-3 text-sm font-normal text-neutral-700 dark:text-neutral-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
              consectetur ratione exercitationem a corrupti eveniet.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
