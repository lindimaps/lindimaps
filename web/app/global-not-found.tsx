import Link from "next/link";
import "./globals.css";

function LindiMapsLogo(){
 return <div className="nf-logo" aria-label="LindiMaps">
  <span className="nf-logo-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="38" height="38" fill="none"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="white" fillOpacity=".2" stroke="white" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="11" r="2.5" fill="#3b82f6" stroke="white" strokeWidth="1.2"/></svg></span>
  <span className="nf-logo-word"><strong>LINDI<span>MAPS</span></strong><small>Spatial Intelligence</small></span>
 </div>
}

export function NotFoundContent(){
 return <main className="not-found-page">
  <div className="not-found-content">
   <LindiMapsLogo/>
   <p className="not-found-tagline">BEYOND MAPS. SPATIAL INTELLIGENCE.</p>
   <strong className="not-found-number">404</strong>
   <h1>Faqja nuk u gjet.</h1>
   <p className="not-found-copy">Adresa që kërkoni nuk ekziston ose është zhvendosur.<br/><span>The page you are looking for could not be found.</span></p>
   <Link className="not-found-home" href="/">Kthehu në Home <span aria-hidden="true">→</span></Link>
  </div>
 </main>
}

export default function GlobalNotFound(){return <html lang="sq"><body><NotFoundContent/></body></html>}
