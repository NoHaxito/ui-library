export default function Home() {
  return (
    <main className="flex bg-deluxe-50 dark:bg-deluxe-950 min-h-screen justify-center items-center gap-2">
      <button className="active:scale-95 hover:opacity-90 active:opacity-80 transition-[transform,opacity] px-3 py-2 text-sm flex items-center justify-center gap-2 rounded-deluxe bg-deluxe-900 text-white dark:bg-deluxe-200 dark:text-black">
        Button
      </button>
      <button className="active:scale-95 hover:opacity-90 active:opacity-80 transition-[transform,opacity] px-3 py-2 text-sm flex items-center justify-center gap-2 rounded-deluxe bg-slate-900 text-white dark:bg-slate-200 dark:text-black">
        Button
      </button>
    </main>
  );
}
