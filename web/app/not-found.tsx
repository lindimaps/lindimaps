import Link from "next/link";
import {getSiteContent} from "@/lib/sanity";
import {Logo} from "@/components/site-shell";

export default async function NotFound(){
 const {settings}=await getSiteContent();
 return <main className="not-found-page"><div className="not-found-shell">
  <header className="nf-brand"><Link href="/" aria-label={settings?.siteName||"LindiMaps"}><Logo src={settings?.logo} darkSrc={settings?.logoDark}/></Link></header>
  <section className="nf-stage"><div className="nf-code" aria-label="Error 404"><span>4</span><i aria-hidden="true"></i><span>4</span></div>
   <div className="nf-message"><p className="nf-kicker">BEYOND MAPS.</p><h1>Faqja nuk u gjet.</h1><p>Koordinata është jashtë hartës. Adresa që kërkoni nuk ekziston ose është zhvendosur.</p><Link className="not-found-home" href="/">Kthehu në faqen kryesore</Link></div>
  </section>
  <footer className="nf-meta"><span>GEOSPATIAL SOLUTIONS.</span><span>LINDIMAPS / 404</span></footer>
 </div></main>
}