import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { inter } from "./fonts";
import { Footer } from "./components/Footer";
import { siteConfig } from "./lib/site-config";

type RootLayoutProps = {
  children: ReactNode;
};

// placeholder for future global providers (auth, theme, analytics, etc.)
function Providers({ children }: { children: ReactNode }) {
  return children;
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: siteConfig.name,
  description: siteConfig.description,

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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

export default function RootLayout({ children }: RootLayoutProps) {
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
