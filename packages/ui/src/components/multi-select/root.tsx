"use client";
import * as React from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useMultiSelectContext } from "./context";

interface MultiSelectProps
  extends Omit<React.ComponentProps<"div">, "defaultValue"> {
  // type: "single" | "multiple";
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  options?: string[];
}

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  ({ children, ...props }, forwardedRef) => {
    const { context, MultiSelectContext } = useMultiSelectContext();
    const [open, setOpen] = useControllableState({
      defaultProp: props.open,
      prop: props.open,
      onChange: props.onOpenChange,
    });
    const [value, setValue] = useControllableState({
      defaultProp: props.defaultValue,
      prop: props.value,
      onChange: props.onValueChange,
    });
    React.useEffect(() => {
      if (props.options) {
        context?.setOptions(
          props.options.concat(
            value!.filter(
              (item) => props.options && props.options.indexOf(item) < 0
            )
          )
        );
      }
    }, [context?.value]);
    return (
      <MultiSelectContext.Provider
        value={{
          value: value ?? [],
          setValue,
          open: open ?? false,
          setOpen,
          defaultValue: props.defaultValue!,
          disabled: props.disabled,
          options: props.options ?? undefined,
          // eslint-disable-next-line @typescript-eslint/no-empty-function -- TODO
          setOptions: (_options: string[]) => {},
        }}
      >
        <div className="relative max-w-sm" ref={forwardedRef}>
          {children}
        </div>
      </MultiSelectContext.Provider>
    );
  }
);
MultiSelect.displayName = "MultiSelect";
