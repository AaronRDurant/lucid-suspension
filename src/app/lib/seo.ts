import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export function createMetadata({
  title,
  description,
  canonical,
}: {
  title: string;
  description?: string;
  canonical: string;
}): Metadata {
  const fullTitle = title;
  const desc = description ?? siteConfig.description;
  const url = siteConfig.baseUrl + canonical;

  return {
    title: fullTitle,
    description: desc,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [siteConfig.ogImage],
    },
  };
}
