import type {MetadataRoute} from "next";import {routes} from "@/lib/routes";import {serviceDetails} from "@/data/service-details";
const base="https://www.lindimaps.com";
export default function sitemap():MetadataRoute.Sitemap{
 const publicPages:MetadataRoute.Sitemap=Object.values(routes).flatMap(route=>[
  {url:base+route.sq,changeFrequency:route.sq==="/"?"weekly":"monthly",priority:route.sq==="/"?1:.8,alternates:{languages:{"sq-AL":base+route.sq,en:base+route.en,"x-default":base+route.sq}}},
  {url:base+route.en,changeFrequency:route.en==="/en"?"weekly":"monthly",priority:route.en==="/en"?1:.8,alternates:{languages:{"sq-AL":base+route.sq,en:base+route.en,"x-default":base+route.sq}}}
 ]);
 const services:MetadataRoute.Sitemap=serviceDetails.flatMap(({slug})=>{
  const sq=`/sq/sherbime/${slug}/`,en=`/en/services/${slug}/`;
  const languages={"sq-AL":base+sq,en:base+en,"x-default":base+sq};
  return [
   {url:base+sq,changeFrequency:"monthly" as const,priority:.8,alternates:{languages}},
   {url:base+en,changeFrequency:"monthly" as const,priority:.8,alternates:{languages}}
  ];
 });
 const pairs=[["/sq/privacy","/en/privacy"],["/sq/termsofuse","/en/termsofuse"],["/sq/cookies","/en/cookies"]] as const;
 const legal:MetadataRoute.Sitemap=pairs.flatMap(([sq,en])=>[sq,en].map(path=>({url:base+path,changeFrequency:"yearly" as const,priority:.3,alternates:{languages:{"sq-AL":base+sq,en:base+en,"x-default":base+sq}}})));
 return [...publicPages,...services,...legal];
}
