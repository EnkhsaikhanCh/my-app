interface SiteConfig {
  name: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  name: "ACME",
  title: "My Next.js App",
  description: "A simple Next.js application.",
} as const;
