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
