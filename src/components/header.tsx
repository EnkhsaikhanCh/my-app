import Link from "next/link";

import { siteConfig } from "@/config/site";

import { HeaderNavigation } from "./page-header";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-border border-b px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{siteConfig.name}</h1>
        <HeaderNavigation>
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </HeaderNavigation>
      </div>
    </header>
  );
}
