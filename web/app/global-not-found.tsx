import Link from "next/link";
import "./globals.css";

export function NotFoundContent(){
 return <main className="not-found-page"><div className="not-found-shell">
  <header className="nf-brand"><span className="nf-wordmark"><strong>LINDI<span>MAPS</span></strong><small>GEOSPATIAL SOLUTIONS</small></span></header>
  <section className="nf-stage"><div className="nf-code" aria-label="Error 404"><span>4</span><i aria-hidden="true"></i><span>4</span></div>
   <div className="nf-message"><p className="nf-kicker">BEYOND THE MAPS</p><h1>Faqja nuk u gjet.</h1><p>Koordinata është jashtë hartës. Adresa që kërkoni nuk ekziston ose është zhvendosur.</p><Link className="not-found-home" href="/">Kthehu në faqen kryesore</Link></div>
  </section>
  <footer className="nf-meta"><span>GEOSPATIAL SOLUTIONS</span><span>404 / NOT FOUND</span></footer>
 </div></main>
}
export default function GlobalNotFound(){return <html lang="sq"><body><NotFoundContent/></body></html>}
