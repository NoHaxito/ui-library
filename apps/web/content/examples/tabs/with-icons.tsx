import { Badge } from "@/components/badge";
import { Bell, Gear, User } from "@phosphor-icons/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@sihaxito/deluxe-ui";

export default function TabsWithIconsDemo() {
  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile" left={<User />}>
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings" left={<Gear />}>
          Settings
        </TabsTrigger>
        <TabsTrigger
          value="notifications"
          left={<Bell />}
          right={<Badge>NEW</Badge>}
        >
          Notifications
        </TabsTrigger>
      </TabsList>
      {/* <TabsContent value="profile">Tab 1 content</TabsContent>
      <TabsContent value="settings">Tab 2 content</TabsContent>
      <TabsContent value="notifications">Tab 2 content</TabsContent> */}
    </Tabs>
  );
}
