import { HomeIcon, LayoutListIcon, SettingsIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  url: string;
  icon: typeof HomeIcon | typeof SettingsIcon;
}

export const MAIN_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Todo",
    url: "/dashboard/todo",
    icon: LayoutListIcon,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: SettingsIcon,
  },
] as const;
