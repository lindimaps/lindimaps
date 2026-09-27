import Link from "next/link";
import "./globals.css";

export default function GlobalNotFound(){
 return <html lang="sq"><body><main className="not-found-page">
  <div className="not-found-grid" aria-hidden="true"></div>
  <div className="not-found-contours" aria-hidden="true"></div>
  <span className="not-found-coordinate coordinate-a" aria-hidden="true">41.3275° N</span>
  <span className="not-found-coordinate coordinate-b" aria-hidden="true">19.8187° E</span>
  <div className="not-found-content">
   <div className="not-found-brand"><span className="not-found-mark" aria-hidden="true"><svg viewBox="0 0 44 44" fill="none"><path d="M22 4 8 38l14-6 14 6L22 4Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="22" cy="21" r="3.5" fill="#67dbe6"/></svg></span><strong>LINDI<span>MAPS</span></strong></div>
   <div className="not-found-code"><span>ERROR</span><strong>404</strong><i></i></div>
   <p className="eyebrow">BEYOND MAPS. SPATIAL INTELLIGENCE.</p>
   <h1>Lost beyond the map.</h1>
   <p className="not-found-copy">Faqja që kërkoni nuk u gjet.<br/><span>The page you are looking for could not be found.</span></p>
   <div className="not-found-actions"><Link href="/">Kthehu në Home <span aria-hidden="true">→</span></Link><Link href="/en">English <span aria-hidden="true">→</span></Link></div>
  </div>
 </main></body></html>
}