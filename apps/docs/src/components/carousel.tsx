"use client";
import "./carousel.css";

import {
  Children,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { useEventListener } from "./use-event-listener";
import { cn } from "@/lib/utils";
import { Button } from "@deluxe/ui";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface CarouselProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children:
    | ReactNode
    | ((props: {
        onPrev?: () => void;
        onNext?: () => void;
      }) => React.ReactElement);
  visibleItems?: number;
  loopInterval?: number;
  isControls?: boolean;
  itemProps?: React.ComponentPropsWithoutRef<"li">;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      visibleItems = 1,
      loopInterval,
      isControls,
      itemProps,
      onPrevious,
      onNext,
      ...props
    },
    ref,
  ) => {
    const sliderRef = useRef<HTMLUListElement>(null!);

    const getScrollPosition = () => {
      const { scrollLeft, scrollWidth, offsetWidth } = sliderRef.current;

      if (scrollLeft < 1) return "start";
      if (scrollWidth - scrollLeft - offsetWidth < 2) return "end";
      return "mid";
    };

    const getScrollDimensions = () => {
      const computedStyle = window.getComputedStyle(sliderRef.current);

      const { width, columnGap, paddingLeft, paddingRight } = computedStyle;

      const widthPx =
        parseInt(width, 10) -
        parseInt(paddingLeft, 10) -
        parseInt(paddingRight, 10);
      const gridGapPx = parseInt(columnGap, 10);
      const columnWidth =
        (widthPx - gridGapPx * (visibleItems - 1)) / visibleItems;
      console.log();
      return { columnWidth, gridGapPx };
    };

    const handleNext = () => {
      onNext?.();

      const { scrollLeft } = sliderRef.current;
      const { columnWidth, gridGapPx } = getScrollDimensions();
      const left =
        getScrollPosition() === "end"
          ? 0
          : scrollLeft + columnWidth + gridGapPx;
      if (getScrollPosition() === "end") {
        handlePrevious();
      }
      return sliderRef.current.scrollTo({ left, behavior: "smooth" });
    };

    const handlePrevious = () => {
      onPrevious?.();

      const { scrollLeft } = sliderRef.current;
      const { columnWidth, gridGapPx } = getScrollDimensions();
      const left = scrollLeft - columnWidth - gridGapPx;

      sliderRef.current.scrollTo({ left, behavior: "smooth" });
    };

    useEffect(() => {
      if (loopInterval) {
        const interval = setInterval(handleNext, loopInterval);
        return () => clearInterval(interval);
      }
      return undefined;
    }, [loopInterval]);

    useEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
        return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    });
    const child =
      typeof children === "function"
        ? children({ onNext: handleNext, onPrev: handlePrevious })
        : children;
    return (
      <div
        {...props}
        ref={ref}
        className={cn("relative grid w-full", props.className)}
      >
        <div className={cn("veil")}>
          <ul
            ref={sliderRef}
            className={cn("slider w-full")}
            style={
              {
                "--gap": "0rem",
                "--visible-items": visibleItems,
              } as React.CSSProperties
            }
          >
            {child}
            {/* {Children.map(child, (ch) => (
              <li {...itemProps} className={cn("item w-full")}>
                {ch}
              </li>
            ))} */}
          </ul>
        </div>
        {isControls && (
          <>
            <Button
              size="icon"
              className="absolute self-center"
              style={{ left: "-2rem" }}
              onClick={handlePrevious}
            >
              <CaretLeft />
            </Button>
            <Button
              className="absolute self-center"
              size="icon"
              style={{ right: "-2rem" }}
              onClick={handleNext}
            >
              <CaretRight />
            </Button>
          </>
        )}
      </div>
    );
  },
);

Carousel.displayName = "Carousel";
