import { Bell, User } from "@phosphor-icons/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Switch,
} from "@sihaxito/deluxe-ui";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[300px]">
      <TabsList className="w-full">
        <TabsTrigger className="w-full" value="account" left={<User />}>
          Account
        </TabsTrigger>
        <TabsTrigger className="w-full" value="notifications" left={<Bell />}>
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="account"
        className="rounded-lg border p-4 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <h3 className="mb-2 text-2xl font-semibold leading-none tracking-tight">
          Account
        </h3>
        <p className="mb-5 text-[15px] leading-normal text-neutral-600 dark:text-neutral-400">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none text-neutral-800 dark:text-neutral-200"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="h-[35px] shrink-0 grow rounded-lg px-2.5 text-[15px] leading-none text-neutral-700 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-neutral-800 dark:text-neutral-300 dark:shadow-neutral-800"
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none text-neutral-800 dark:text-neutral-200"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="h-[35px] shrink-0 grow rounded-lg px-2.5 text-[15px] leading-none text-neutral-700 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-neutral-800 dark:text-neutral-300 dark:shadow-neutral-800"
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset>
        <div className="mt-5 flex justify-end">
          <button className="inline-flex h-[35px] cursor-pointer items-center justify-center rounded-lg bg-green-500 px-[15px] text-[15px] font-medium leading-none outline-none hover:bg-green-600 focus:shadow-[0_0_0_2px] focus:shadow-green-700">
            Save changes
          </button>
        </div>
      </TabsContent>
      <TabsContent
        value="notifications"
        className="rounded-lg border p-4 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <h3 className="mb-2 text-2xl font-semibold leading-none tracking-tight">
          Notifications
        </h3>
        <p className="mb-5 text-[15px] leading-normal text-neutral-600 dark:text-neutral-400">
          Manage the notifications you wish to receive
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="marketing-emails" className="text-sm">
              Marketing emails
            </label>
            <Switch
              id="marketing-emails"
              className="dark:bg-neutral-800 dark:data-[state=checked]:bg-blue-500"
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="social-emails" className="text-sm">
              Social emails
            </label>
            <Switch
              id="social-emails"
              className="dark:bg-neutral-800 dark:data-[state=checked]:bg-blue-500"
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="activity-emails" className="text-sm">
              Activity emails
            </label>
            <Switch
              id="activity-emails"
              className="dark:bg-neutral-800 dark:data-[state=checked]:bg-blue-500"
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <label htmlFor="security-emails" className="text-sm">
              Security emails
            </label>
            <Switch
              checked
              disabled
              id="security-emails"
              className="dark:bg-neutral-800 dark:data-[state=checked]:bg-blue-500"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
