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
import { Bell, CheckCircle, Circle, Gear, User } from "@phosphor-icons/react";

export default function TestPage() {
  return (
    <div className="container mx-auto relative space-y-1 py-4">
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
      <section className="my-4 space-y-4">
        <h2>Tabs</h2>
        <div className="flex flex-wrap gap-12">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">
                <User /> Account
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Gear /> Settings
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell />
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">Account tab</TabsContent>
            <TabsContent value="settings">Settings tab</TabsContent>
            <TabsContent value="notifications">Notifications tab</TabsContent>
          </Tabs>
          <Tabs variant="underline" defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">
                <User /> Account
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Gear /> Settings
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell />
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">Account tab</TabsContent>
            <TabsContent value="settings">Settings tab</TabsContent>
            <TabsContent value="notifications">Notifications tab</TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
