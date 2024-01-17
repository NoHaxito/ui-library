import { dialogTheme } from "../theme";

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { base } = dialogTheme.header();
  return <div className={base({ className })} {...props} />;
};
DialogHeader.displayName = "DialogHeader";

export { DialogTitle } from "./title";
export { DialogDescription } from "./description";
