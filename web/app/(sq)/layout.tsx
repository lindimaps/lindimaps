import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://lindimaps.com"),
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
