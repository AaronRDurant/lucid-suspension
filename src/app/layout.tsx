import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Lucid Suspension",
  description:
    "Suspension, made clear. A transparent, rider-first approach to dirt bike fork and shock service — coming 2026.",

  openGraph: {
    title: "Lucid Suspension",
    description:
      "Suspension, made clear. A transparent, rider-first approach to dirt bike fork and shock service — coming 2026.",
    url: "https://lucidsuspension.com",
    siteName: "Lucid Suspension",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucid Suspension",
    description:
      "Suspension, made clear. A transparent, rider-first approach to dirt bike fork and shock service — coming 2026.",
    images: ["/meta.png"],
  },

  // favicons + manifest
  icons: {
    // main favicons
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // legacy
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    // browsers sometimes look at shortcut specifically
    shortcut: ["/favicon.ico"],
    // Apple “add to Home Screen”
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
