"use client";
import * as React from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { Popover, PopoverTrigger } from "../popover";
import { pickChildren } from "../../lib/children";
import { useMultiSelectContext } from "./context";
import { MultiSelectOptions } from "./options";

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
  inputValue?: string;
  onInputValueChange?: (value: string) => void;
}

export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  ({ children, ...props }, forwardedRef) => {
    const { MultiSelectContext } = useMultiSelectContext();
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
    const [inputValue, setInputValue] = useControllableState({
      defaultProp: "",
      prop: props.inputValue,
      onChange: props.onInputValueChange,
    });
    const [options, setOptions] = React.useState(props.options ?? []);
    React.useEffect(() => {
      try {
        if (props.options) {
          setOptions(
            props.options.concat(
              value!.filter(
                (item) => props.options && props.options.indexOf(item) < 0,
              ),
            ),
          );
        }
      } catch (error) {
        // eslint-disable-next-line no-console -- needed
        console.log(error);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps -- no  more dependencies needed
    }, [value]);

    const [childrenWithoutOptions, optionsComp] = pickChildren(
      children,
      MultiSelectOptions,
    );
    return (
      <MultiSelectContext.Provider
        value={{
          value: value ?? [],
          setValue,
          open: open ?? false,
          setOpen,
          defaultValue: props.defaultValue!,
          disabled: props.disabled,
          options,
          setOptions,
          inputValue,
          setInputValue,
        }}
      >
        <Popover open={open}>
          <PopoverTrigger asChild>
            <div className="relative" ref={forwardedRef}>
              {childrenWithoutOptions}
            </div>
          </PopoverTrigger>
          {optionsComp}
        </Popover>
      </MultiSelectContext.Provider>
    );
  },
);
MultiSelect.displayName = "MultiSelect";
