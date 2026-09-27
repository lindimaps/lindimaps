import type { Metadata } from "next";
import {Manrope,Space_Grotesk} from "next/font/google";
import "../globals.css";
const manrope=Manrope({subsets:["latin"],variable:"--font-body",display:"swap"});
const spaceGrotesk=Space_Grotesk({subsets:["latin"],variable:"--font-display",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://lindimaps.com")};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body></html>}