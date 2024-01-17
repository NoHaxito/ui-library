import { dialogTheme } from "../theme";

export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const base = dialogTheme.footer;
  return <div className={base({ className })} {...props} />;
};
DialogFooter.displayName = "DialogFooter";
