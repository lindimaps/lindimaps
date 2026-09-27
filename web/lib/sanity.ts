import { cache } from "react";
import starterData from "@/data/starter.json";
export type Language = "sq" | "en";
type Localized = Partial<Record<`${"title"|"description"|"summary"|"heroTitle"|"heroText"|"primaryCta"|"secondaryCta"|"introTitle"|"intro"|"location"|"seoDescription"|"headline"}${"Sq"|"En"}`,string>>;
export type ProjectCategory={_id:string;titleSq?:string;titleEn?:string;slug:string;order?:number};
export type ContentItem = Localized & {_id:string;category?:string;categories?:ProjectCategory[];year?:number;image?:string;imageAltSq?:string;imageAltEn?:string;liveUrl?:string;githubUrl?:string;roleSq?:string;roleEn?:string;client?:string;clientEn?:string;technologies?:string[]};
export type Activity={_id:string;titleSq?:string;titleEn?:string;kind?:string;date?:string;location?:string;locationEn?:string;descriptionSq?:string;descriptionEn?:string;image?:string;url?:string};
export type GalleryItem={_id:string;titleSq?:string;titleEn?:string;captionSq?:string;captionEn?:string;image?:string;tags?:string[]};
export type TeamMember={_id:string;name:string;roleSq?:string;roleEn?:string;bioSq?:string;bioEn?:string;image?:string;email?:string;linkedin?:string;order?:number;featured?:boolean};
export type Partner={_id:string;name:string;roleSq?:string;roleEn?:string;logo?:string;url?:string};
export type Publication = {_id:string;title:string;titleEn?:string;publicationType?:string;authors?:string[];year?:number;publisher?:string;doi?:string;url?:string;pdfUrl?:string;citation?:string;citationEn?:string;keywords?:string[];abstractSq?:string;abstractEn?:string;image?:string;featured?:boolean};
export type TextBlock={_key:string;_type:string;children?:{_key:string;text:string}[]};
export type SiteContent={
 home:(Localized&{image?:string})|null;
 settings:(Localized&{useStarterContent?:boolean;siteName?:string;email?:string;logo?:string;ogImage?:string;seoTitle?:string;linkedin?:string;instagram?:string;github?:string;researchGate?:string})|null;
 profile:(Localized&{name:string;image?:string;bioSq?:TextBlock[];bioEn?:TextBlock[];cvUrl?:string;email?:string;linkedin?:string;researchGate?:string;github?:string;scholar?:string;orcid?:string;skills?:string[]})|null;
 about:{history:(Localized&{_key:string})[];values:(Localized&{_key:string})[]}|null;
 projects:ContentItem[];projectCategories:ProjectCategory[];services:ContentItem[];publications:Publication[];activities:Activity[];gallery:GalleryItem[];partners:Partner[];team:TeamMember[];
};
export function localized(value:Localized|null|undefined,field:string,lang:Language,fallback=""){const key=`${field}${lang==="sq"?"Sq":"En"}` as keyof Localized;return value?.[key]?.trim()||fallback}
export function safeUrl(value?:string){if(!value)return undefined;try{const url=new URL(value);return ["https:","http:"].includes(url.protocol)?url.href:undefined}catch{return undefined}}
const projectId=process.env.SANITY_PROJECT_ID||"oyagunrg";
const dataset=process.env.SANITY_DATASET||"production";
const query=`{
 "home": *[_type=="homePage"]|order(_updatedAt desc)[0]{...,"image":heroImage.asset->url},
 "settings": *[_type=="siteSettings"]|order(_updatedAt desc)[0]{...,"logo":logo.asset->url,"ogImage":ogImage.asset->url},
 "projectCategories": *[_type=="projectCategory"]|order(order asc,titleSq asc){_id,titleSq,titleEn,"slug":slug.current,order},
 "projects": *[_type=="project"]|order(order asc,year desc,_createdAt desc){_id,titleSq,titleEn,summarySq,summaryEn,category,"categories":categories[]->{_id,titleSq,titleEn,"slug":slug.current,order},year,liveUrl,githubUrl,roleSq,roleEn,client,clientEn,technologies,"image":coalesce(coverImage.asset->url,imageUrl),"imageAltSq":coverImage.altSq,"imageAltEn":coverImage.altEn},
 "profile": *[_type=="profile"]|order(_updatedAt desc)[0]{...,"image":photo.asset->url},
 "about": *[_type=="aboutPage"]|order(_updatedAt desc)[0]{history,values},
 "services": *[_type=="service"]|order(order asc,_createdAt asc){_id,titleSq,titleEn,descriptionSq,descriptionEn,"image":coalesce(icon.asset->url,imageUrl)},
 "publications": *[_type=="publication"]|order(featured desc,year desc,_createdAt desc){_id,title,titleEn,publicationType,authors,year,publisher,doi,url,citation,citationEn,keywords,abstractSq,abstractEn,featured,"image":coverImage.asset->url,"pdfUrl":pdf.asset->url},
 "activities": *[_type=="activity"]|order(date desc,_createdAt desc){_id,titleSq,titleEn,kind,date,location,locationEn,descriptionSq,descriptionEn,url,"image":image.asset->url},
 "gallery": *[_type=="galleryItem"]|order(_createdAt desc){_id,titleSq,titleEn,captionSq,captionEn,tags,"image":image.asset->url},
 "partners": *[_type=="partner"]|order(order asc,name asc){_id,name,roleSq,roleEn,url,"logo":coalesce(logo.asset->url,logoUrl)},
 "team": *[_type=="teamMember"]|order(featured desc,order asc,name asc){_id,name,roleSq,roleEn,bioSq,bioEn,email,linkedin,order,featured,"image":photo.asset->url}
}`;
export const getSiteContent=cache(async():Promise<SiteContent>=>{
 const empty:SiteContent={profile:null,about:null,home:null,settings:null,projects:[],projectCategories:[],services:[],publications:[],activities:[],gallery:[],partners:[],team:[]};
 try{
  if(!/^[a-z0-9]+$/.test(projectId)||!/^[a-z0-9_-]+$/.test(dataset))throw new Error("Invalid Sanity configuration");
  const url=new URL(`https://${projectId}.api.sanity.io/v2025-02-19/data/query/${dataset}`);url.searchParams.set("query",query);url.searchParams.set("perspective","published");
  const response=await fetch(url,{next:{revalidate:60},signal:AbortSignal.timeout(8000)});if(!response.ok)throw new Error(`Sanity HTTP ${response.status}`);
  const payload=await response.json() as {result?:SiteContent};if(!payload.result)throw new Error("Missing Sanity result");
  const result={...empty,...payload.result};const hydrated={...result,publications:result.publications.length?result.publications:starterData.publications};return hydrated.settings?.useStarterContent===true||!hydrated.settings?withStarter(hydrated):hydrated;
 }catch(error){console.error("Unable to load published Sanity content:",error instanceof Error?error.message:"Unknown error");return withStarter(empty)}
});
function withStarter(content:SiteContent):SiteContent{return {...content,home:content.home||starterData.home,settings:content.settings||starterData.settings,profile:content.profile||starterData.profile,about:content.about||starterData.about,services:content.services.length?content.services:starterData.services.map(item=>({...item,image:item.imageUrl})),projects:content.projects.length?content.projects:starterData.projects.map(item=>{const {descriptionSq: _sq,descriptionEn: _en,...project}=item;void _sq;void _en;return {...project,image:item.imageUrl}}),publications:content.publications.length?content.publications:starterData.publications}}
