import ContentPage,{contentMetadata} from "@/components/content-page";
export const revalidate=60;
export async function generateMetadata(){return contentMetadata("en","gallery");}
export default function Page(){return <ContentPage lang="en" page="gallery"/>}
