import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { UI_CONSTANTS } from "@/constants/ui";

interface DashboardHeaderNavigationProps {
  side?: "left" | "right";
  children?: React.ReactNode;
}

function DashboardHeaderNavigation({
  children,
  side = "left",
}: DashboardHeaderNavigationProps) {
  return (
    <nav className="flex items-center gap-2" role="navigation">
      {side === "left" && children}
      {side === "right" && <ModeToggle />}
    </nav>
  );
}

export function DashboardHeader() {
  return (
    <header
      className={`flex ${UI_CONSTANTS.HEADER_HEIGHT} shrink-0 items-center justify-between border-b px-4`}
    >
      <DashboardHeaderNavigation side="left">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
      </DashboardHeaderNavigation>
      <DashboardHeaderNavigation side="right" />
    </header>
  );
}
