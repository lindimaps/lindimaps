import ContentPage,{contentMetadata} from "@/components/content-page";
export const revalidate=60;
export async function generateMetadata(){return contentMetadata("sq","projects");}
export default async function Page({searchParams}:{searchParams:Promise<{category?:string}>}){const {category}=await searchParams;return <ContentPage lang="sq" page="projects" projectCategory={category}/>}
