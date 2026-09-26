import ContentPage, { contentMetadata } from "@/components/content-page";
export const revalidate = 60;
export const metadata = contentMetadata("en", "projects");
export default function Page() {
  return <ContentPage lang="en" page="projects" />;
}
