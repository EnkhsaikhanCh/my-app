import Link from "next/link";

import { PageHeader, HeaderNavigation } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { UI_CONSTANTS } from "@/constants/ui";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
