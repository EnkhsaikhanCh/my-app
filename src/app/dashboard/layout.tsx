import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { getSidebarDefaultState } from "@/lib/sidebar";
import { UI_CONSTANTS } from "@/constants/ui";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const defaultOpen = await getSidebarDefaultState();

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <main className={UI_CONSTANTS.SPACING.CONTAINER}>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
