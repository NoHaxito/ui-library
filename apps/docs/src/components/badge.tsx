export function Badge({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="hhover:bg-deluxe-900/80 inline-flex items-center gap-1 whitespace-nowrap rounded-lg border border-deluxe-200 border-transparent bg-deluxe-900 px-2.5 py-0.5 text-xs font-semibold text-deluxe-50 transition-colors focus:outline-none focus:ring-2 focus:ring-deluxe-950 focus:ring-offset-2 dark:border-deluxe-800 dark:bg-deluxe-50 dark:text-deluxe-900 dark:hover:bg-deluxe-50/80 dark:focus:ring-deluxe-300"
      {...props}
    />
  );
}
