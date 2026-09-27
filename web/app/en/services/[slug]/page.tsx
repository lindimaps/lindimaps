import ServiceDetailPage from "@/components/service-detail-page";
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ServiceDetailPage lang="en" slug={slug}/>}
