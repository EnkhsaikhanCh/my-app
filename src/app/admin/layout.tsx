import type { ReactNode } from "react";

import { AdminSidebar } from "@/components/admin-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UI_CONSTANTS } from "@/constants/ui";
import { getSidebarDefaultState } from "@/lib/sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const defaultOpen = await getSidebarDefaultState();

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AdminSidebar />
      <SidebarInset>
        <DashboardHeader />
        <main className={UI_CONSTANTS.SPACING.CONTAINER}>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
