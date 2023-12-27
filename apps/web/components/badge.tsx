export function Badge({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="hhover:bg-neutral-900/80 inline-flex items-center gap-1 whitespace-nowrap rounded-lg border border-neutral-200 border-transparent bg-neutral-900 px-2.5 py-0.5 text-xs font-semibold text-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80 dark:focus:ring-neutral-300"
      {...props}
    />
  );
}
