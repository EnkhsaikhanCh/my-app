import Link from "next/link";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { HealthCheck } from "@/components/client/health-check";
import { Metrics } from "@/components/metrics";
import { PageHeader, HeaderNavigation } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <div className="container mx-auto overflow-hidden px-4 md:overflow-visible">
      <div className="flex h-screen flex-col justify-between px-4">
        <PageHeader>
          <h1 className="text-2xl font-bold tracking-tight">
            {siteConfig.name}
          </h1>

          <HeaderNavigation>
            <Button variant="outline" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </HeaderNavigation>
        </PageHeader>

        <section className="relative mt-[60px] min-h-[530px] lg:mt-[180px] lg:h-[calc(100vh-300px)]">
          <div className="flex flex-col">
            <h2 className="mt-6 max-w-[580px] text-[24px] leading-tight font-medium text-[#878787] md:mt-10 md:text-[36px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum
              assumenda aliquid fugiat nemo blanditiis?
            </h2>

            <div className="mt-8 md:mt-10">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="h-11 border-transparent bg-[#F2F1EF] px-6 dark:bg-[#1D1D1D]"
                  disabled
                >
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    Contact Us
                  </Link>
                </Button>
                <Button className="h-11 px-5" disabled>
                  Start free trial
                </Button>
              </div>
            </div>

            <p className="mt-4 font-mono text-xs text-[#707070]">
              Start free trial, no credit card required.
            </p>
          </div>
          <Metrics />
        </section>

        <footer className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">
                  API Status:
                </span>
                <HealthCheck />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" disabled>
                  <Link href="/privacy">Privacy Policy</Link>
                </Button>
                <Button variant="ghost" disabled>
                  <Link href="/terms">Terms of Service</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <FaFacebook />
              </Button>
              <Button variant="outline" size="icon" disabled>
                <FaInstagram />
              </Button>
              <Button variant="outline" size="icon" disabled>
                <FaLinkedin />
              </Button>
              <Button variant="outline" size="icon" disabled>
                <FaXTwitter />
              </Button>
              <Button variant="outline" size="icon" disabled>
                <FaGithub />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
