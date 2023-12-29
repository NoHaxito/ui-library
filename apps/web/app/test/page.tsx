"use client";
import {
  MultiSelectValues,
  MultiSelect,
  MultiSelectInput,
  MultiSelectOptions,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@sihaxito/deluxe-ui";
import { CheckCircle, Circle } from "@phosphor-icons/react";
import { CodeHighlighter } from "@/components/code-highlighter";

export default function TestPage() {
  return (
    <div className="relative space-y-1 p-4">
      <section className="my-4 max-w-sm space-y-1">
        <h2>Multi Select</h2>
        <p>Default select options</p>
        <MultiSelect
          options={["Backlog", "Todo", "In progress", "Done", "Cancelled"]}
        >
          <div className="flex w-full flex-wrap items-center gap-1 rounded-md border border-neutral-300 px-3 py-2 duration-300 dark:border-neutral-800">
            <MultiSelectValues />
            <MultiSelectInput isClearable placeholder="Add tag..." />
          </div>
          <MultiSelectOptions />
        </MultiSelect>
        <p>Custom select options</p>
        <MultiSelect
          options={["Backlog", "Todo", "In progress", "Done", "Cancelled"]}
        >
          <div className="flex w-full flex-wrap items-center gap-1 rounded-md border border-neutral-300 px-3 py-2 duration-300 dark:border-neutral-800">
            <MultiSelectValues />
            <MultiSelectInput isClearable placeholder="Add tag..." />
          </div>
          <MultiSelectOptions>
            {({ options, selected, setValue }) => (
              <div className="grid">
                {options.map((option) => {
                  const isSelected = selected.find((s) => s.includes(option));
                  return (
                    <button
                      className="flex w-full items-center gap-2 px-2 py-1"
                      key={option}
                      onClick={() => {
                        if (!isSelected) {
                          setValue([...selected, option]);
                        } else {
                          const newValues = selected.filter(
                            (s) => s !== option,
                          );
                          setValue(newValues);
                        }
                      }}
                    >
                      {option}
                      {isSelected ? (
                        <CheckCircle className="ml-auto" />
                      ) : (
                        <Circle className="ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </MultiSelectOptions>
        </MultiSelect>
      </section>
      <section className="my-4 max-w-full space-y-4">
        <h2>Tabs</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          <Tabs defaultValue="npm">
            <TabsList variant="solid" className="relative shrink-0">
              <TabsTrigger value="npm" className="!bg-transparent">
                npm
              </TabsTrigger>
              <TabsTrigger className="!bg-transparent" value="yarn">
                yarn
              </TabsTrigger>
              <TabsTrigger className="!bg-transparent" value="pnpm">
                pnpm
              </TabsTrigger>
            </TabsList>
            <TabsContent value="npm" className="p-0">
              <CodeHighlighter
                highligthLines={[]}
                code="npm install @sihaxito/deluxe-ui"
                language="bash"
              />
            </TabsContent>
            <TabsContent value="yarn" className="p-0">
              <CodeHighlighter
                highligthLines={[]}
                code="yarn add @sihaxito/deluxe-ui"
                language="bash"
              />
            </TabsContent>
            <TabsContent value="pnpm" className="p-0">
              <CodeHighlighter
                highligthLines={[]}
                code="pnpm install @sihaxito/deluxe-ui"
                language="bash"
              />
            </TabsContent>
          </Tabs>
          <Tabs defaultValue="npm">
            <TabsList
              variant="underline"
              className="relative flex w-full shrink-0 justify-start rounded-none border-b !bg-transparent dark:border-neutral-900"
            >
              <TabsTrigger
                value="npm"
                className="h-10 rounded-none !bg-transparent"
              >
                npm
              </TabsTrigger>
              <TabsTrigger
                className="h-10 rounded-none !bg-transparent"
                value="yarn"
              >
                yarn
              </TabsTrigger>
              <TabsTrigger
                className="h-10 rounded-none !bg-transparent"
                value="pnpm"
              >
                pnpm
              </TabsTrigger>
            </TabsList>
            <TabsContent value="npm" className="!p-0">
              <CodeHighlighter
                highligthLines={[]}
                code="npm install @sihaxito/deluxe-ui"
                language="bash"
              />
            </TabsContent>
            <TabsContent value="yarn" className="!p-0">
              <CodeHighlighter
                highligthLines={[]}
                code="yarn add @sihaxito/deluxe-ui"
                language="bash"
              />
            </TabsContent>
            <TabsContent value="pnpm" className="!p-0">
              <CodeHighlighter
                highligthLines={[]}
                code="pnpm install @sihaxito/deluxe-ui"
                language="bash"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
