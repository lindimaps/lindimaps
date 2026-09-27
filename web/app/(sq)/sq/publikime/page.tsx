import ContentPage,{contentMetadata} from "@/components/content-page";
export const revalidate=60;
export async function generateMetadata(){return contentMetadata("sq","publications");}
export default function Page(){return <ContentPage lang="sq" page="publications"/>}
