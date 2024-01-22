"use client";

import { useEffect, useState } from "react";

export const useBackdrop = (
  query: string,
  {
    parent = document,
    type = "manual",
  }: { type?: "mouse" | "manual"; parent?: HTMLElement | Document } = {},
) => {
  const [activeTab, setActiveTab] = useState<{
    width: number;
    height: number;
    top: number;
    left: number;
  } | null>({ width: 0, height: 0, top: 0, left: 0 });
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      setActiveTab({ width: 0, height: 0, top: 0, left: 0 });
    }
    setInterval(() => {
      if (type === "manual") {
        // this type requires be more specific with the query
        const element = parent.querySelector<HTMLElement>(query);
        if (!element) {
          setActiveTab({ width: 0, height: 0, top: 0, left: 0 });
        }

        setActiveTab({
          width: element?.offsetWidth!,
          height: element?.offsetHeight!,
          top: element?.offsetTop!,
          left: element?.offsetLeft!,
        });
      }
      if (type === "mouse") {
        setActiveTab({ width: 0, height: 0, top: 0, left: 0 });
      }
    }, 100);
  }, []);
  return activeTab;
};
