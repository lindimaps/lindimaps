import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/studio/",
        "/pushimet",
        "/pushimet/",
        "/pagesat",
        "/pagesat/",
        "/aktivitete-system.html",
        "/aktiviteteASIG",
        "/aktiviteteASIG/",
        "/raportASIG",
        "/raportASIG/",
        "/pyjetnezonatembrojtura",
        "/pyjetnezonatembrojtura/"
      ],
    }],
    sitemap: "https://www.lindimaps.com/sitemap.xml",
    host: "https://www.lindimaps.com",
  };
}