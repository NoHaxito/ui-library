export function Badge({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="hhover:bg-deluxe-900/80 border-deluxe-200 bg-deluxe-900 text-deluxe-50 focus:ring-deluxe-950 dark:border-deluxe-800 dark:bg-deluxe-50 dark:text-deluxe-900 dark:hover:bg-deluxe-50/80 dark:focus:ring-deluxe-300 inline-flex items-center gap-1 whitespace-nowrap rounded-lg border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
      {...props}
    />
  );
}
