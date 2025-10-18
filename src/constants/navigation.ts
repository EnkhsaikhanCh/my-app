import {
  BarChart3Icon,
  HomeIcon,
  LayoutDashboardIcon,
  LayoutListIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  url: string;
  icon:
    | typeof HomeIcon
    | typeof SettingsIcon
    | typeof LayoutDashboardIcon
    | typeof UsersIcon
    | typeof BarChart3Icon;
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

export const ADMIN_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Overview",
    url: "/admin",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: UsersIcon,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3Icon,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: SettingsIcon,
  },
] as const;
