// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", // home – overview / marketing page
    // "/services",        // uncomment when live
    // "/lucid-experience",// uncomment when live
    // "/about",           // uncomment when live
    // "/contact",         // uncomment when live
    // "/process",         // add when live
    // "/results",         // add when live
    // "/journal",         // add when live
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteConfig.baseUrl}${path}`,
    lastModified,
  }));
}
