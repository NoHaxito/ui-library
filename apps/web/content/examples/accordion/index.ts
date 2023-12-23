import React from "react";

export const accordion = {
  "accordion-basic": {
    component: React.lazy(() => import("./basic")),
    code: `"use client";
    import {
      Accordion,
      AccordionItem,
      AccordionTrigger,
      AccordionContent,
    } from "@sihaxito/deluxe-ui";
    
    export default function AccordionDemo() {
      return (
        <Accordion type="single" collapsible className="w-full min-w-lg">
          <AccordionItem
            value="item-1"
            className="border-b dark:border-neutral-800"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-b dark:border-neutral-800"
          >
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-b dark:border-neutral-800"
          >
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    }`,
  },
};
