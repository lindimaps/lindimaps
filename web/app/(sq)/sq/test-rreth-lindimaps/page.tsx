/* eslint-disable @next/next/no-img-element */
import type {Metadata} from "next";
import {getSiteContent,localized,safeUrl} from "@/lib/sanity";
import {SiteHeader,SiteFooter} from "@/components/site-shell";

export const revalidate=60;
export const metadata:Metadata={title:"Test · Rreth LindiMaps",robots:{index:false,follow:false}};

export default async function Page(){
 const data=await getSiteContent(); const {profile,settings}=data;
 return <><SiteHeader lang="sq" page="about" settings={settings}/><main id="main" tabIndex={-1}>
  <section className="page-heading container"><p className="eyebrow">LindiMaps / Rreth</p><h1>Rreth LindiMaps</h1></section>
  <section className="container content-section about-brand-test">
   <div className="section-signature"><span>06</span><i></i><small>ABOUT LINDIMAPS</small></div>
   <div className="about-brand-hero">
    <div><p className="eyebrow">GEOSPATIAL SOLUTIONS · DIGITAL PLATFORMS</p><h2>Territori, të dhënat dhe teknologjia në një ekosistem të vetëm.</h2></div>
    <p>LindiMaps është një platformë profesionale e fokusuar në GIS, Remote Sensing, WebGIS, fotogrametri dhe zhvillimin e zgjidhjeve digjitale. Qasja kombinon analizën gjeohapësinore me teknologjinë web për ta kthyer informacionin territorial në produkte të përdorshme, të qarta dhe moderne.</p>
   </div>
   <div className="about-brand-pillars">
    <article><small>01</small><h3>Geospatial</h3><p>Analizë GIS, të dhëna hapësinore, Remote Sensing dhe dokumentim i territorit.</p></article>
    <article><small>02</small><h3>Digital</h3><p>WebGIS, platforma interaktive dhe produkte web të ndërtuara rreth të dhënave.</p></article>
    <article><small>03</small><h3>Applied</h3><p>Zgjidhje që lidhin kërkimin, analizën dhe nevojat reale të projekteve.</p></article>
   </div>
  </section>
  <section className="about-founder-test"><div className="container">
   <div className="founder-test-heading"><p className="eyebrow">FOUNDER</p><h2>Njeriu pas LindiMaps.</h2></div>
   <div className="founder-test-card">
    {safeUrl(profile?.image)?<img src={safeUrl(profile?.image)} alt={profile?.name||"Erland Alla"} width="560" height="680"/>:<div className="profile-monogram">EA</div>}
    <div className="founder-test-copy"><small>FOUNDER · LINDIMAPS</small><h3>{profile?.name||"Erland Alla"}</h3><p className="founder-role">{localized(profile,"headline","sq")||"Geological Engineer · Geoinformatics · GIS · Remote Sensing · WebGIS"}</p><p>LindiMaps mbështetet në eksperiencën profesionale dhe kërkimore të founder-it në teknologjitë gjeohapësinore. Profili personal, kërkimi shkencor, publikimet dhe projektet akademike paraqiten veçmas nga portofoli i brandit.</p><a className="founder-profile-link" href="#" aria-disabled="true">Profili profesional <span>↗</span></a></div>
   </div>
  </div></section>
  <section className="container content-section about-brand-closing"><p className="eyebrow">LINDIMAPS / APPROACH</p><h2>Nga të dhënat te vendimmarrja. Nga harta te platforma.</h2><p>Një identitet i ndërtuar rreth gjeoinformacionit, zhvillimit digjital dhe zgjidhjeve që e bëjnë territorin më të kuptueshëm.</p></section>
 </main><SiteFooter lang="sq" settings={settings}/></>
}