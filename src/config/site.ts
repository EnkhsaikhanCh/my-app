interface SiteConfig {
  name: string;
  title: string;
  description: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "ACME",
  title: "My Next.js App",
  description: "A simple Next.js application.",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
} as const;
