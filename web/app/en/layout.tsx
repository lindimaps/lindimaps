import type { Metadata } from "next";
import {Inter} from "next/font/google";
import {getSiteContent} from "@/lib/sanity";
import "../globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-main",display:"swap"});
const baseMetadata:Metadata={metadataBase:new URL("https://www.lindimaps.com"),title:{default:"LindiMaps | Spatial Intelligence",template:"%s | LindiMaps"},description:"LindiMaps — Spatial Intelligence, GIS, Remote Sensing, WebGIS and geospatial solutions.",applicationName:"LindiMaps",openGraph:{type:"website",siteName:"LindiMaps",locale:"en_US",title:"LindiMaps | Spatial Intelligence",description:"Beyond Maps. Spatial Intelligence.",url:"https://www.lindimaps.com/en"},twitter:{card:"summary_large_image",title:"LindiMaps | Spatial Intelligence",description:"Beyond Maps. Spatial Intelligence."},robots:{index:true,follow:true}};
export async function generateMetadata():Promise<Metadata>{const {settings}=await getSiteContent();return {...baseMetadata,icons:settings?.favicon?{icon:settings.favicon,shortcut:settings.favicon,apple:settings.favicon}:baseMetadata.icons}}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.variable}>{children}</body></html>}