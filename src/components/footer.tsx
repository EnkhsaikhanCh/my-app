import Link from "next/link";

import { siteConfig } from "@/config/site";

import { SocialButtons } from "./social-buttons";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-border mt-auto border-t px-6 py-4">
      <div className="text-muted-foreground container mx-auto flex flex-col items-center justify-between text-sm md:flex-row">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            {[
              { title: "Privacy Policy", url: "/policy" },
              { title: "Terms of Service", url: "/terms" },
            ].map((item) => (
              <Button key={item.url} variant="outline" size="sm" disabled>
                <Link href={item.url}>{item.title}</Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground my-4 flex items-center font-mono text-sm md:my-0">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
        <SocialButtons />
      </div>
    </footer>
  );
}
