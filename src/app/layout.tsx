import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { inter } from "./fonts";

import { Footer } from "./components/Footer";

function Providers({ children }: { children: ReactNode }) {
  // placeholder for future global providers (auth, theme, analytics, etc.)
  return children;
}

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

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
