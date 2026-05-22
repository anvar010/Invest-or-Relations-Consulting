/**
 * Centralised SEO metadata.
 *
 * Edit the title / description for each page here.
 * Each page imports from this file:
 *
 *   import { seo } from "@/config/seo";
 *   export const metadata = seo.about;
 */

import type { Metadata } from "next";

type PageSEO = {
  title: string;
  description: string;
};

const SITE_NAME = "Investor Relations Consulting";

const pages = {
  home: {
    title:
      "Investor Relations Consulting & Strategic Partnerships | GCC & International Markets",
    description:
      "Relationship-led investor relations consulting, strategic partnerships, executive search, and investor-facing introductions across Dubai, Saudi Arabia, the GCC, London, and international financial markets.",
  },

  about: {
    title:
      "About Nicola Beer | Investor Relations Consulting & Strategic Partnerships",
    description:
      "Nicola Beer provides relationship-led investor relations consulting, strategic partnerships, executive search, and investor-facing relationship development across GCC and international financial markets.",
  },

  investorRelations: {
    title:
      "Investor Relations Consulting Dubai | GCC Strategic Partnerships & Fundraising Relationships",
    description:
      "Investor relations consulting, strategic partnerships, fundraising relationships, investor introductions, and relationship-led advisory support across Dubai, Saudi Arabia, the GCC, London, and international investment markets.",
  },

  talentAdvisory: {
    title:
      "Talent Advisory Dubai | Executive Search, Investor Relations & Institutional Sales Recruitment",
    description:
      "Discreet executive search and talent advisory across investor relations, institutional sales, fundraising, private banking, placement, and investor-facing commercial functions across GCC and international markets.",
  },

  contact: {
    title: "Contact Investor Relations Consulting | Dubai & GCC",
    description:
      "Arrange a confidential introduction call to discuss strategic partnerships, investor relations consulting, executive search, fundraising relationships, and investor-facing opportunities across GCC and international markets.",
  },
} as const satisfies Record<string, PageSEO>;

export type PageKey = keyof typeof pages;

function toMetadata({ title, description }: PageSEO): Metadata {
  return {
    title,
    description,
    icons: {
      icon: "/IRC-Logo.svg",
      shortcut: "/logo2.png",
      apple: "/logo2.png",
    },
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      type: "website",
      images: ["/logo2.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo2.png"],
    },
  };
}

export const seo: Record<PageKey, Metadata> = Object.fromEntries(
  Object.entries(pages).map(([key, value]) => [key, toMetadata(value)])
) as Record<PageKey, Metadata>;

export const seoRaw = pages;
