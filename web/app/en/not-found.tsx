import Link from "next/link";
import {getSiteContent} from "@/lib/sanity";

export default async function NotFound(){
 const {settings}=await getSiteContent();
 const logo=settings?.logo;
 return <main className="not-found-page"><div className="not-found-shell">
  <header className="nf-brand">{logo?<img className="nf-cms-logo" src={logo} alt="LindiMaps"/>:<span className="nf-wordmark"><strong>LINDI<span>MAPS</span></strong><small>GEOSPATIAL SOLUTIONS</small></span>}</header>
  <section className="nf-stage"><div className="nf-code" aria-label="Error 404"><span>4</span><i aria-hidden="true"></i><span>4</span></div>
   <div className="nf-message"><p className="nf-kicker">BEYOND THE MAPS</p><h1>Page not found.</h1><p>These coordinates are outside the map. The page you are looking for does not exist or has been moved.</p><Link className="not-found-home" href="/en/">Back to home</Link></div>
  </section>
  <footer className="nf-meta"><span>GEOSPATIAL SOLUTIONS</span><span>404 / NOT FOUND</span></footer>
 </div></main>
}