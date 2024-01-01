import { Tabs, TabsList, TabsTrigger, TabsContent } from "@sihaxito/deluxe-ui";

export default function TabsNoAnimationDemo() {
  return (
    <Tabs defaultValue="tab-1" disableAnimation>
      <TabsList>
        <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
