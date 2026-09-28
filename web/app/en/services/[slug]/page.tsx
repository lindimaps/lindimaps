import type {Metadata} from "next";
import ServiceDetailPage from "@/components/service-detail-page";
import {getServiceDetail} from "@/data/service-details";

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const d=getServiceDetail(slug);
 if(!d)return {title:"Service",robots:{index:false,follow:false}};
 const sq=`/sq/sherbime/${slug}/`,en=`/en/services/${slug}/`;
 return {title:d.titleEn,description:d.leadEn,alternates:{canonical:en,languages:{"sq-AL":sq,en,"x-default":sq}},openGraph:{title:`${d.titleEn} | LindiMaps`,description:d.leadEn,url:en,locale:"en_US",type:"website"},twitter:{card:"summary_large_image",title:`${d.titleEn} | LindiMaps`,description:d.leadEn},robots:{index:true,follow:true}};
}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ServiceDetailPage lang="en" slug={slug}/>}
