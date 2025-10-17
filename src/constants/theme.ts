import { MonitorCog, Moon, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeOption {
  label: string;
  value: ThemeMode;
  icon: LucideIcon;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    label: "Light",
    value: "light",
    icon: Sun,
  },
  {
    label: "Dark",
    value: "dark",
    icon: Moon,
  },
  {
    label: "System",
    value: "system",
    icon: MonitorCog,
  },
] as const;

export const THEME_ICON_SIZE = "1.2rem";
