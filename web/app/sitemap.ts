import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

const base = "https://www.lindimaps.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const publicPages = Object.values(routes).flatMap((route) =>
    [route.sq, route.en].map((path) => ({
      url: base + path,
      lastModified: now,
      changeFrequency: (path === "/" || path === "/en" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "/" || path === "/en" ? 1 : 0.8,
    }))
  );
  const legal = ["/sq/privacy","/en/privacy","/sq/termsofuse","/en/termsofuse","/sq/cookies","/en/cookies"].map((path) => ({
    url: base + path,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));
  return [...publicPages, ...legal];
}