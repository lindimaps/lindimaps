import type {Metadata} from "next";
import ServiceDetailPage from "@/components/service-detail-page";
import {getServiceDetail} from "@/data/service-details";
const seoTitles:Record<string,string>={
 "sistemet-gis":"GIS Services & Systems | LindiMaps",
 "fotogrametri":"Photogrammetry & Drone Mapping | LindiMaps",
 "analize-territori":"Spatial & Territorial Analysis | LindiMaps",
 "kadastra-dixhitale":"Digital Cadastre & Cadastral GIS | LindiMaps",
 "konsulence-teknike":"GIS & Geospatial Consulting | LindiMaps",
 "web-gis-developer":"WebGIS Development & Interactive Maps | LindiMaps",
 "zhvillim-web-platforma-digjitale":"Web & Digital Platform Development | LindiMaps"
};

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const d=getServiceDetail(slug);
 if(!d)return {title:"Service",robots:{index:false,follow:false}};
 const sq=`/sq/sherbime/${slug}/`,en=`/en/services/${slug}/`;
 const title=seoTitles[slug]||`${d.titleEn} | LindiMaps`;return {title,description:d.leadEn,alternates:{canonical:en,languages:{"sq-AL":sq,en,"x-default":sq}},openGraph:{title,description:d.leadEn,url:en,locale:"en_US",type:"website"},twitter:{card:"summary_large_image",title,description:d.leadEn},robots:{index:true,follow:true}};
}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ServiceDetailPage lang="en" slug={slug}/>}
