import type {Metadata} from "next";
import {SiteHeader,SiteFooter} from "@/components/site-shell";
import {getSiteContent,safeUrl} from "@/lib/sanity";

export const revalidate=60;
export const metadata:Metadata={title:"Test Rreth nesh | LindiMaps",robots:{index:false,follow:false}};

const pillars=[
 ["01","Spatial Intelligence","Nga të dhënat te informacioni hapësinor i përdorshëm për analizë dhe vendimmarrje."],
 ["02","Digital Experiences","WebGIS, harta interaktive dhe platforma digjitale të ndërtuara rreth përdoruesit."],
 ["03","Research & Innovation","GIS, Remote Sensing dhe teknologji të avancuara të aplikuara në kërkim dhe projekte reale."]
];
const capabilities=["GIS & analiza hapësinore","Remote Sensing","Fotogrametri","WebGIS","Dokumentim 3D","Kadastra digjitale","Zhvillim web","Konsulencë teknike"];
const tech=["ArcGIS Pro","ArcGIS Online","ArcGIS Enterprise","QGIS","PostGIS","Python","GeoPackage"];

export default async function TestAbout(){
 const {settings,profile,partners}=await getSiteContent();
 return <><SiteHeader lang="sq" page="about" settings={settings}/><main className="about-test">
  <section className="container about-test-hero">
   <p className="eyebrow">LINDIMAPS / RRETH NESH</p>
   <div className="about-test-hero-grid"><div><h1>Ne nuk bëjmë vetëm harta.<br/><span>Ndërtojmë inteligjencë hapësinore.</span></h1></div><div><p>LindiMaps është një studio dhe platformë profesionale e fokusuar në GIS, WebGIS, Remote Sensing dhe zhvillimin e zgjidhjeve digjitale gjeohapësinore.</p><p>Kombinojmë hartografinë, analizën hapësinore, teknologjitë web dhe programimin për t’i kthyer të dhënat gjeografike në produkte digjitale të qarta, funksionale dhe të përdorshme.</p></div></div>
  </section>
  <section className="container about-test-pillars">{pillars.map(([n,t,d])=><article key={n}><span>{n}</span><h2>{t}</h2><p>{d}</p></article>)}</section>
  <section className="about-test-dark"><div className="container about-test-cap-grid"><div><p className="eyebrow">ÇFARË BËJMË</p><h2>Territor, të dhëna dhe teknologji — në një sistem të vetëm.</h2><p>Nga përpunimi dhe analiza e të dhënave deri te publikimi i tyre në web, LindiMaps mbulon të gjithë ciklin e një produkti gjeohapësinor.</p></div><div className="about-test-cap-list">{capabilities.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></div></section>
  <section className="container about-test-tech"><p className="eyebrow">TECH STACK</p><div>{tech.map(x=><span key={x}>{x}</span>)}</div></section>
  <section className="container about-test-person"><div>{safeUrl(profile?.image)?<img src={safeUrl(profile?.image)} alt={profile?.name||"LindiMaps"} />:<div className="about-test-person-placeholder">LM</div>}</div><div className="about-test-person-copy"><p className="eyebrow">PAS LINDIMAPS</p><h2>{profile?.name||"LindiMaps"}</h2><h3>{profile?.headlineSq||"GIS · WebGIS · Geospatial Solutions"}</h3><p>LindiMaps ndërtohet mbi eksperiencë praktike në GIS, përpunim të imazheve satelitore, WebGIS, kërkim shkencor dhe zhvillim të platformave digjitale me fokus gjeohapësinor.</p><div className="about-test-links">{[["LinkedIn",profile?.linkedin],["ResearchGate",profile?.researchGate],["Google Scholar",profile?.scholar],["ORCID",profile?.orcid],["GitHub",profile?.github]].map(([l,u])=>safeUrl(u)?<a key={l} href={safeUrl(u)} target="_blank" rel="noopener noreferrer">{l} ↗</a>:null)}</div></div></section>
  {partners.length>0&&<section className="about-test-partners"><div className="container"><p className="eyebrow">BASHKËPUNIME</p><h2>Institucione & partnerë</h2><div className="about-test-partner-grid">{partners.slice(0,8).map(p=><div key={p._id}>{safeUrl(p.logo)?<img src={safeUrl(p.logo)} alt={p.name}/>:null}<span>{p.name}</span></div>)}</div></div></section>}
  <section className="container about-test-cta"><p className="eyebrow">START A PROJECT</p><h2>Nga ideja te harta.<br/>Nga të dhënat te platforma.</h2><div><a href="/sq/projekte/">Shiko projektet</a><a href="/sq/kontakt/">Na kontakto →</a></div></section>
 </main><SiteFooter lang="sq" settings={settings}/></>
}