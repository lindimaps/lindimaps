import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/studio/",
        "/sisteme/",
        "/en/systems/",
        "/sq/akademia/",
        "/en/academy/",
        "/pushimet/",
        "/pagesat/",
        "/aktivitete-system.html",
        "/pushimet-legacy.html",
        "/pagesat-legacy.html"
      ],
    }],
    sitemap: "https://www.lindimaps.com/sitemap.xml",
    host: "https://www.lindimaps.com",
  };
}