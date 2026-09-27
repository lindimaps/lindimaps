import ContentPage,{contentMetadata} from "@/components/content-page";
export const revalidate=60;
export async function generateMetadata(){return contentMetadata("sq","activities");}
export default function Page(){return <ContentPage lang="sq" page="activities"/>}
