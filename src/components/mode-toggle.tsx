"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THEME_OPTIONS, THEME_ICON_SIZE } from "@/constants/theme";

const LIGHT_ICON_CLASSES =
  "scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90";
const DARK_ICON_CLASSES =
  "absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: string) => () => {
    setTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <Sun
            className={LIGHT_ICON_CLASSES}
            style={{ height: THEME_ICON_SIZE, width: THEME_ICON_SIZE }}
          />
          <Moon
            className={DARK_ICON_CLASSES}
            style={{ height: THEME_ICON_SIZE, width: THEME_ICON_SIZE }}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEME_OPTIONS.map(({ label, value, icon: Icon }) => (
          <DropdownMenuItem key={value} onClick={handleThemeChange(value)}>
            <Icon />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
