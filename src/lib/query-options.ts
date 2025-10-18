import type { DefaultError } from "@tanstack/react-query";

// Shared defaults for read queries to keep UI predictable
export const defaultQueryOptions = {
  staleTime: 60_000, // 1 minute
  refetchOnMount: false, // never refetch automatically on mount
  refetchOnWindowFocus: false, // never refetch automatically on window focus
  refetchOnReconnect: false, // never refetch automatically on reconnect
  retry: false, // disable automatic retries
} as const satisfies Partial<{
  staleTime: number;
  refetchOnMount: boolean | "always";
  refetchOnWindowFocus: boolean;
  refetchOnReconnect: boolean;
  retry:
    | boolean
    | number
    | ((failureCount: number, error: DefaultError) => boolean);
}>;
