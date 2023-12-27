/**
 * Taked from NEXTUI
 */

import { Children, isValidElement, type ReactNode } from "react";

export function getValidChildren(children: React.ReactNode) {
  return Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as React.ReactElement[];
}

export const pickChildren = <T = ReactNode>(
  children: T | undefined,
  targetChild: React.ElementType,
): [T | undefined, T[] | undefined] => {
  let target: T[] = [];

  const withoutTargetChildren = Children.map(children, (item) => {
    if (!isValidElement(item)) return item;
    if (item.type === targetChild) {
      target.push(item as T);

      return null;
    }

    return item;
  })?.filter(Boolean) as T;

  const targetChildren = target.length >= 0 ? target : undefined;

  return [withoutTargetChildren, targetChildren];
};
