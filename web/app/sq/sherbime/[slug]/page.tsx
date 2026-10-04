import type {Metadata} from "next";
import ServiceDetailPage from "@/components/service-detail-page";
import {getServiceDetail} from "@/data/service-details";
const seoTitles:Record<string,string>={
 "sistemet-gis":"Sisteme & Shërbime GIS | LindiMaps",
 "fotogrametri":"Fotogrametri & Hartografim me Dron | LindiMaps",
 "analize-territori":"Analizë Territori & Analizë Hapësinore | LindiMaps",
 "konsulence-teknike":"Konsulencë GIS & Gjeohapësinore | LindiMaps",
 "web-gis-developer":"WebGIS Development & Harta Interaktive | LindiMaps",
 "zhvillim-web-platforma-digjitale":"Zhvillim Web & Platforma Digjitale | LindiMaps"
};

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const d=getServiceDetail(slug);
 if(!d)return {title:"Shërbim",robots:{index:false,follow:false}};
 const sq=`/sq/sherbime/${slug}/`,en=`/en/services/${slug}/`;
 const title=seoTitles[slug]||`${d.titleSq} | LindiMaps`;return {title,description:d.leadSq,alternates:{canonical:sq,languages:{"sq-AL":sq,en,"x-default":sq}},openGraph:{title,description:d.leadSq,url:sq,locale:"sq_AL",type:"website"},twitter:{card:"summary_large_image",title,description:d.leadSq},robots:{index:true,follow:true}};
}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ServiceDetailPage lang="sq" slug={slug}/>}
