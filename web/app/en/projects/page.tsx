import ContentPage,{contentMetadata} from "@/components/content-page";
export const revalidate=60;
export async function generateMetadata(){return contentMetadata("en","projects");}
export default async function Page({searchParams}:{searchParams:Promise<{category?:string}>}){const {category}=await searchParams;return <ContentPage lang="en" page="projects" projectCategory={category}/>}
