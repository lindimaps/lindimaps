import Link from "next/link";
import {getSiteContent} from "@/lib/sanity";

export default async function NotFound(){
 const {settings}=await getSiteContent();
 const logo=settings?.logo;
 return <main className="not-found-page"><div className="not-found-content">
  <div className="nf-logo" aria-label="LindiMaps">{logo?<img className="nf-cms-logo" src={logo} alt="LindiMaps"/>:<span className="nf-logo-word"><strong>LINDI<span>MAPS</span></strong><small>Spatial Intelligence</small></span>}</div>
  <p className="not-found-tagline">BEYOND MAPS. SPATIAL INTELLIGENCE.</p><strong className="not-found-number">404</strong><h1>Page not found.</h1><p className="not-found-copy">The page you are looking for does not exist or has been moved.</p><Link className="not-found-home" href="/en/">Back to Home <span aria-hidden="true">→</span></Link>
 </div></main>
}