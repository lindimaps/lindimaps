import ContentPage,{contentMetadata} from "@/components/content-page";
export const revalidate=60;
export async function generateMetadata(){return contentMetadata("en","about");}
export default function Page(){return <ContentPage lang="en" page="about"/>}
