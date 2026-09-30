import type { Metadata } from "next";
import {Inter} from "next/font/google";
import {getSiteContent} from "@/lib/sanity";
import "../globals.css";
const inter=Inter({subsets:["latin"],variable:"--font-main",display:"swap"});
const baseMetadata:Metadata={metadataBase:new URL("https://www.lindimaps.com"),title:{default:"LindiMaps | Spatial Intelligence",template:"%s | LindiMaps"},description:"LindiMaps — Spatial Intelligence, GIS, Remote Sensing, WebGIS dhe zgjidhje gjeohapësinore.",applicationName:"LindiMaps",openGraph:{type:"website",siteName:"LindiMaps",locale:"sq_AL",title:"LindiMaps | Spatial Intelligence",description:"Beyond Maps. Spatial Intelligence.",url:"https://www.lindimaps.com/"},twitter:{card:"summary_large_image",title:"LindiMaps | Spatial Intelligence",description:"Beyond Maps. Spatial Intelligence."},robots:{index:true,follow:true}};
export async function generateMetadata():Promise<Metadata>{const {settings}=await getSiteContent();return {...baseMetadata,icons:settings?.favicon?{icon:"/favicon.ico",shortcut:"/favicon.ico",apple:"/favicon.ico"}:baseMetadata.icons}}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="sq"><body className={inter.variable}>{children}</body></html>}