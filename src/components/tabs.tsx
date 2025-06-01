"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useRouter } from "next/navigation";

// Define the type for a single tab configuration
interface TabConfig {
  title: string;
  value: string;
}

interface DynamicTabsProps {
  tabsConfig: TabConfig[];
  content: React.ReactNode;
}

const DynamicTabs: React.FC<DynamicTabsProps> = ({ tabsConfig, content }) => {
  const router = useRouter();
  const pathname = usePathname();
  // Determine the current tab based on the URL path
  // Extract the last part of the URL segment to determine the current tab

  const currentTab =
    tabsConfig.find((tab) => tab.value === pathname.split("/").slice(-1)[0])
      ?.value || tabsConfig[0]?.value;
  // Handle tab change
  const handleTabChange = (tab: string) => {
    const selectedTab = tabsConfig.find((t) => t.value === tab);

    if (selectedTab) {
      // If the current tab value exists in the pathname, update only the tab value
      pathname.endsWith(currentTab)
        ? router.push(pathname.slice(0, -currentTab.length) + tab)
        : router.push(`${pathname}/${tab}`);
    }
  };

  return (
    <Tabs
      defaultValue={tabsConfig[0]?.value}
      value={currentTab}
      onValueChange={handleTabChange}
      className="bg-primary/5  h-full "
    >
      <TabsList className="min-w-sm mx-auto sm:mx-0  ">
        {tabsConfig.map(({ title, value }) => (
          <TabsTrigger
            key={value}
            value={value}
            id={`tab-${value}`}
            className="max-w-sm relative z-10"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsConfig.map(({ value }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DynamicTabs;
