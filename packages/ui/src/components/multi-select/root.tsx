// "use client";
// import * as React from "react";
// import { useMultiSelectContext } from "./context";
// import { useControllableState } from "@radix-ui/react-use-controllable-state";

// interface MultiSelectProps
//   extends Omit<React.ComponentProps<"div">, "defaultValue"> {
//   type: "single" | "multiple";
//   open: boolean;
//   onOpenChange: () => void;
//   selectedValue: { label: string; value: string };
//   selectedValues:
//     | { label: string; value: string }[]
//     | { label: string; value: string };
//   defaultValue: { label: string; value: string };
//   defaultValues:
//     | { label: string; value: string }[]
//     | { label: string; value: string };
//   disabled?: boolean;
// }

// export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
//   ({ children, ...props }, forwardedRef) => {
//     const { MultiSelectContext } = useMultiSelectContext();
//     const [] = useControllableState({

//     })
//     return (
//       <MultiSelectContext.Provider value={{ }}>
//         <div ref={forwardedRef}>{children}</div>
//       </MultiSelectContext.Provider>
//     );
//   }
// );

// MultiSelect.displayName = "MultiSelect";
