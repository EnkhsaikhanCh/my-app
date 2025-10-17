import { MonitorCogIcon, MoonIcon, SunIcon } from "lucide-react";

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeOption {
  label: string;
  value: ThemeMode;
  icon: typeof SunIcon | typeof MoonIcon | typeof MonitorCogIcon;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    label: "Light",
    value: "light",
    icon: SunIcon,
  },
  {
    label: "Dark",
    value: "dark",
    icon: MoonIcon,
  },
  {
    label: "System",
    value: "system",
    icon: MonitorCogIcon,
  },
] as const;

export const THEME_ICON_SIZE = "1.2rem";
