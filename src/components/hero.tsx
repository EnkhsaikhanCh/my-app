import Link from "next/link";

import { HeaderNavigation } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { SocialButtons } from "./social-buttons";

export function Hero() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-border border-b px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">
            {siteConfig.name}
          </h1>
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

      {/* Main Section */}
      <main className="flex flex-1 items-center px-6 py-20">
        <div className="container mx-auto flex flex-1 flex-col justify-center gap-10 md:flex-row md:items-center">
          {/* Left: Headline + CTA */}
          <div className="flex-1">
            <h2 className="mt-5 max-w-[580px] text-[24px] leading-tight font-medium text-balance md:text-[36px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum
              assumenda aliquid fugiat nemo blanditiis?
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="outline" className="h-11 px-6" disabled>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </Link>
              </Button>
              <Button className="h-11 px-6" disabled>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Start free trial
                </Link>
              </Button>
            </div>

            <p className="mt-4 font-mono text-xs text-[#707070]">
              Start free trial, no credit card required.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
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
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </div>
          <SocialButtons />
        </div>
      </footer>
    </div>
  );
}
