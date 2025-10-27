import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
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
  );
}
