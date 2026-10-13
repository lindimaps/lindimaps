import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/studio/"

      ],
    }],
    sitemap: "https://www.lindimaps.com/sitemap.xml",
    host: "https://www.lindimaps.com",
  };
}