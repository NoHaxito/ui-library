import * as React from "react";
import { ButtonVariants, buttonVariants } from "./theme";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      left,
      right,
      variant,
      size,
      className,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        data-disabled={props.disabled}
        ref={ref}
        {...props}
      >
        {left && left}
        {children}
        {right && <span className="ml-auto">{right}</span>}
      </Comp>
    );
  }
);

Button.displayName = "Button";
