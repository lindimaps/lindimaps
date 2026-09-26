import Home, { homeMetadata } from "@/components/home";
export const revalidate = 60;
export const generateMetadata = () => homeMetadata("sq");
export default function Page() {
  return <Home lang="sq" />;
}
