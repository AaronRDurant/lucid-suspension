// sitemap for Lucid Suspension — add routes as pages go live
import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", // home (overview)
    // "/services",         // uncomment when live
    // "/lucid-experience", // uncomment when live
    // "/dream-journal",    // uncomment when live
    // "/about",            // uncomment when live
    // "/contact",          // uncomment when live
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteConfig.baseUrl}${path}`,
    lastModified,
  }));
}
