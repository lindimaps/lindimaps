import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "../globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-main",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://lindimaps.com")};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.variable}>{children}</body></html>}