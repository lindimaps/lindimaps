import type { Language } from "./sanity";
export const routes = {
  home: { sq: "/", en: "/en" },
  services: { sq: "/sq/sherbime", en: "/en/services" },
  projects: { sq: "/sq/projekte", en: "/en/projects" },
  about: { sq: "/sq/rreth_nesh", en: "/en/about" },
  contact: { sq: "/sq/kontakte", en: "/en/contact" },
};
export type PageKey = keyof typeof routes;
export const labels: Record<Language, Record<PageKey, string>> = {
  sq: {
    home: "Kreu",
    services: "Shërbime",
    projects: "Projekte",
    about: "Rreth nesh",
    contact: "Kontakt",
  },
  en: {
    home: "Home",
    services: "Services",
    projects: "Projects",
    about: "About us",
    contact: "Contact",
  },
};
