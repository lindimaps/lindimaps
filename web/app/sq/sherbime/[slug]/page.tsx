import type {Metadata} from "next";
import ServiceDetailPage from "@/components/service-detail-page";
import {getServiceDetail} from "@/data/service-details";

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;const d=getServiceDetail(slug);
 if(!d)return {title:"Shërbim",robots:{index:false,follow:false}};
 const sq=`/sq/sherbime/${slug}/`,en=`/en/services/${slug}/`;
 return {title:d.titleSq,description:d.leadSq,alternates:{canonical:sq,languages:{"sq-AL":sq,en,"x-default":sq}},openGraph:{title:`${d.titleSq} | LindiMaps`,description:d.leadSq,url:sq,locale:"sq_AL",type:"website"},twitter:{card:"summary_large_image",title:`${d.titleSq} | LindiMaps`,description:d.leadSq},robots:{index:true,follow:true}};
}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ServiceDetailPage lang="sq" slug={slug}/>}
