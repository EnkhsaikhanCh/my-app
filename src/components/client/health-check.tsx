"use client";

import { useQuery } from "@tanstack/react-query";
import { CircleCheckIcon, TriangleAlertIcon } from "lucide-react";

import { Spinner } from "@/components/ui/spinner";
import { trpc } from "@/lib/trpc";

export function HealthCheck() {
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());

  let status: "loading" | "success" | "error";
  if (healthCheck.isLoading) {
    status = "loading";
  } else if (healthCheck.data) {
    status = "success";
  } else {
    status = "error";
  }

  const statusConfig = {
    loading: {
      icon: <Spinner className="h-4 w-4 animate-spin text-yellow-500" />,
      text: "Checking...",
    },
    success: {
      icon: <CircleCheckIcon className="h-4 w-4 text-green-500" />,
      text: "Connected",
    },
    error: {
      icon: <TriangleAlertIcon className="h-4 w-4 text-red-500" />,
      text: "Disconnected",
    },
  }[status];

  return (
    <div className="flex items-center gap-2">
      {statusConfig.icon}
      <span className="text-muted-foreground text-sm">{statusConfig.text}</span>
    </div>
  );
}
