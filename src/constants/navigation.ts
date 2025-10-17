import { Home, Settings } from "lucide-react";

export interface NavigationItem {
  title: string;
  url: string;
  icon: typeof Home | typeof Settings;
}

export const MAIN_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
] as const;
