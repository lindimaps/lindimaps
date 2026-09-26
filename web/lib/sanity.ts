import { cache } from "react";

export type Language = "sq" | "en";
type Localized = Partial<
  Record<
    `${"title" | "description" | "summary" | "heroTitle" | "heroText" | "primaryCta" | "secondaryCta" | "introTitle" | "intro" | "location" | "seoDescription"}${"Sq" | "En"}`,
    string
  >
>;
export type ContentItem = Localized & {
  _id: string;
  category?: string;
  year?: number;
  image?: string;
  liveUrl?: string;
  technologies?: string[];
};
export type SiteContent = {
  home: (Localized & { image?: string }) | null;
  settings:
    | (Localized & {
        siteName?: string;
        email?: string;
        logo?: string;
        seoTitle?: string;
        linkedin?: string;
        github?: string;
        researchGate?: string;
      })
    | null;
  projects: ContentItem[];
  services: ContentItem[];
};

export function localized(
  value: Localized | null | undefined,
  field: string,
  lang: Language,
  fallback = "",
): string {
  const key = `${field}${lang === "sq" ? "Sq" : "En"}` as keyof Localized;
  return value?.[key]?.trim() || fallback;
}

export function safeUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
}

// These identifiers are public. Never put a Sanity write token in browser code.
const projectId = process.env.SANITY_PROJECT_ID || "oyagunrg";
const dataset = process.env.SANITY_DATASET || "production";
const query = `{
  "home": *[_type == "homePage"] | order(_updatedAt desc)[0]{..., "image": heroImage.asset->url},
  "settings": *[_type == "siteSettings"] | order(_updatedAt desc)[0]{..., "logo": logo.asset->url},
  "projects": *[_type == "project"] | order(order asc, year desc, _createdAt desc){_id,titleSq,titleEn,summarySq,summaryEn,category,year,liveUrl,technologies,"image":coverImage.asset->url},
  "services": *[_type == "service"] | order(order asc, _createdAt asc){_id,titleSq,titleEn,descriptionSq,descriptionEn,"image":icon.asset->url}
}`;

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  const empty: SiteContent = {
    home: null,
    settings: null,
    projects: [],
    services: [],
  };
  try {
    if (!/^[a-z0-9]+$/.test(projectId) || !/^[a-z0-9_-]+$/.test(dataset))
      throw new Error("Invalid Sanity configuration");
    const url = new URL(
      `https://${projectId}.api.sanity.io/v2025-02-19/data/query/${dataset}`,
    );
    url.searchParams.set("query", query);
    url.searchParams.set("perspective", "published");
    const response = await fetch(url, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Sanity HTTP ${response.status}`);
    const payload = (await response.json()) as { result?: SiteContent };
    if (!payload.result) throw new Error("Missing Sanity result");
    return { ...empty, ...payload.result };
  } catch (error) {
    console.error(
      "Unable to load published Sanity content:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return empty;
  }
});
