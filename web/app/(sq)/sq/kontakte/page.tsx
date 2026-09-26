import ContentPage, { contentMetadata } from "@/components/content-page";
export const revalidate = 60;
export const metadata = contentMetadata("sq", "contact");
export default function Page() {
  return <ContentPage lang="sq" page="contact" />;
}
