import Link from "next/link";

import { HealthCheck } from "@/components/client/health-check";
import { PageHeader, HeaderNavigation } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { UI_CONSTANTS } from "@/constants/ui";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <PageHeader>
        <h1 className="text-2xl font-bold tracking-tight">{siteConfig.name}</h1>

        <HeaderNavigation>
          <Button variant="outline" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </HeaderNavigation>
      </PageHeader>

      <main className={UI_CONSTANTS.SPACING.CONTAINER}>
        {/* Main content will be added here */}
      </main>

      <footer className="border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">API Status:</span>
              <HealthCheck />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" disabled>
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button variant="outline" disabled>
              <Link href="/terms">Terms of Service</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
