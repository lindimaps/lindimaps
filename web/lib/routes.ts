import type { Language } from "./sanity";
export const routes = {
  home:{sq:"/",en:"/en"},services:{sq:"/sq/sherbime",en:"/en/services"},projects:{sq:"/sq/projekte",en:"/en/projects"},publications:{sq:"/sq/publikime",en:"/en/publications"},activities:{sq:"/sq/aktivitete",en:"/en/activities"},gallery:{sq:"/sq/galeri",en:"/en/gallery"},about:{sq:"/sq/rreth_nesh",en:"/en/about"},contact:{sq:"/sq/kontakte",en:"/en/contact"},
};
export type PageKey=keyof typeof routes;
export const labels:Record<Language,Record<PageKey,string>>={
 sq:{home:"Kreu",services:"Shërbime",projects:"Projekte",publications:"Publikime",activities:"Aktivitete",gallery:"Galeri",about:"Rreth nesh",contact:"Kontakt"},
 en:{home:"Home",services:"Services",projects:"Projects",publications:"Publications",activities:"Activities",gallery:"Gallery",about:"About us",contact:"Contact"},
};