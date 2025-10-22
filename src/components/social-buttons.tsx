import Link from "next/link";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const SOCIAL_ICONS = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  github: FaGithub,
} as const;

export function SocialButtons() {
  return (
    <div className="flex items-center gap-4 md:gap-3">
      {Object.entries(siteConfig.socials).map(([key, href]) => {
        if (!href) return null; // skip missing links
        const Icon = SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS];
        return (
          <Button key={key} variant="outline" size="icon-sm" disabled>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Icon />
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
