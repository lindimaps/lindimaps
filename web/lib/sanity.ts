import { cache } from "react";
import starterData from "@/data/starter.json";
export type Language = "sq" | "en";
type Localized = Partial<Record<`${"title"|"description"|"summary"|"heroTitle"|"heroText"|"primaryCta"|"secondaryCta"|"introTitle"|"intro"|"location"|"seoDescription"|"headline"}${"Sq"|"En"}`,string>>;
export type ContentItem = Localized & {_id:string;category?:string;year?:number;image?:string;liveUrl?:string;technologies?:string[]};
export type Publication = {_id:string;title:string;titleEn?:string;publicationType?:string;authors?:string[];year?:number;publisher?:string;doi?:string;url?:string;pdfUrl?:string;citation?:string;keywords?:string[];abstractSq?:string;abstractEn?:string;image?:string;featured?:boolean};
export type TextBlock={_key:string;_type:string;children?:{_key:string;text:string}[]};
export type SiteContent={
 home:(Localized&{image?:string})|null;
 settings:(Localized&{useStarterContent?:boolean;siteName?:string;email?:string;logo?:string;seoTitle?:string;linkedin?:string;github?:string;researchGate?:string})|null;
 profile:(Localized&{name:string;image?:string;bioSq?:TextBlock[];bioEn?:TextBlock[];cvUrl?:string;linkedin?:string;researchGate?:string;scholar?:string;orcid?:string})|null;
 about:{history:(Localized&{_key:string})[];values:(Localized&{_key:string})[]}|null;
 projects:ContentItem[];services:ContentItem[];publications:Publication[];
};
export function localized(value:Localized|null|undefined,field:string,lang:Language,fallback=""){const key=`${field}${lang==="sq"?"Sq":"En"}` as keyof Localized;return value?.[key]?.trim()||fallback}
export function safeUrl(value?:string){if(!value)return undefined;try{const url=new URL(value);return ["https:","http:"].includes(url.protocol)?url.href:undefined}catch{return undefined}}
const projectId=process.env.SANITY_PROJECT_ID||"oyagunrg";
const dataset=process.env.SANITY_DATASET||"production";
const query=`{
 "home": *[_type=="homePage"]|order(_updatedAt desc)[0]{...,"image":heroImage.asset->url},
 "settings": *[_type=="siteSettings"]|order(_updatedAt desc)[0]{...,"logo":logo.asset->url},
 "projects": *[_type=="project"]|order(order asc,year desc,_createdAt desc){_id,titleSq,titleEn,summarySq,summaryEn,category,year,liveUrl,technologies,"image":coalesce(coverImage.asset->url,imageUrl)},
 "profile": *[_type=="profile"]|order(_updatedAt desc)[0]{...,"image":photo.asset->url},
 "about": *[_type=="aboutPage"]|order(_updatedAt desc)[0]{history,values},
 "services": *[_type=="service"]|order(order asc,_createdAt asc){_id,titleSq,titleEn,descriptionSq,descriptionEn,"image":coalesce(icon.asset->url,imageUrl)},
 "publications": *[_type=="publication"]|order(featured desc,year desc,_createdAt desc){_id,title,titleEn,publicationType,authors,year,publisher,doi,url,citation,keywords,abstractSq,abstractEn,featured,"image":coverImage.asset->url,"pdfUrl":pdf.asset->url}
}`;
export const getSiteContent=cache(async():Promise<SiteContent>=>{
 const empty:SiteContent={profile:null,about:null,home:null,settings:null,projects:[],services:[],publications:[]};
 try{
  if(!/^[a-z0-9]+$/.test(projectId)||!/^[a-z0-9_-]+$/.test(dataset))throw new Error("Invalid Sanity configuration");
  const url=new URL(`https://${projectId}.api.sanity.io/v2025-02-19/data/query/${dataset}`);url.searchParams.set("query",query);url.searchParams.set("perspective","published");
  const response=await fetch(url,{next:{revalidate:60},signal:AbortSignal.timeout(8000)});if(!response.ok)throw new Error(`Sanity HTTP ${response.status}`);
  const payload=await response.json() as {result?:SiteContent};if(!payload.result)throw new Error("Missing Sanity result");
  const result={...empty,...payload.result};return result.settings?.useStarterContent===true||!result.settings?withStarter(result):result;
 }catch(error){console.error("Unable to load published Sanity content:",error instanceof Error?error.message:"Unknown error");return withStarter(empty)}
});
function withStarter(content:SiteContent):SiteContent{return {...content,home:content.home||starterData.home,settings:content.settings||starterData.settings,profile:content.profile||starterData.profile,about:content.about||starterData.about,services:content.services.length?content.services:starterData.services.map(item=>({...item,image:item.imageUrl})),projects:content.projects.length?content.projects:starterData.projects.map(item=>({...item,image:item.imageUrl}))}}
