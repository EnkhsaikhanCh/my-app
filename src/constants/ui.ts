export const UI_CONSTANTS = {
  HEADER_HEIGHT: "h-12",
  ICON_SIZE: {
    SMALL: "size-4",
    MEDIUM: "size-8",
  },
  SPACING: {
    CONTAINER: "container mx-auto p-4",
    GAP_SMALL: "gap-2",
  },
  TOASTER: {
    POSITION: "bottom-right" as const,
  },
} as const;

export const SIDEBAR_CONSTANTS = {
  COOKIE_NAME: "sidebar_state",
  COOKIE_VALUE_OPEN: "true",
} as const;
