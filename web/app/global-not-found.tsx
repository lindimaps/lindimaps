import Link from "next/link";
import "./globals.css";

const logoUrl="https://cdn.sanity.io/images/oyagunrg/production/REPLACE_ME";

export function NotFoundContent(){
 return <main className="not-found-page">
  <style>{`
   html,body{margin:0;background:#031426}
   .not-found-page{box-sizing:border-box;min-height:100svh;background:#031426;color:#f4f8fc;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;display:flex;align-items:center;justify-content:center;padding:42px 22px;text-align:center}
   .not-found-page *{box-sizing:border-box}
   .not-found-content{width:min(540px,100%);margin:auto;display:flex;flex-direction:column;align-items:center}
   .nf-brand{margin:0 0 52px;font-size:1.3rem;font-weight:850;letter-spacing:.12em;color:#fff}.nf-brand span{color:#2d8cff}.nf-brand small{display:block;margin-top:7px;font-size:.58rem;font-weight:650;letter-spacing:.24em;color:#829ab1}
   .not-found-tagline{margin:0 0 18px;color:#72c7ff;font-size:.66rem;font-weight:800;letter-spacing:.22em}
   .not-found-number{margin:0;color:#f4f8fc;font-size:clamp(8rem,42vw,11rem);font-weight:850;line-height:.78;letter-spacing:-.08em}
   .not-found-page h1{margin:36px 0 0;color:#f4f8fc;font-size:clamp(2.15rem,9vw,3.2rem);font-weight:800;line-height:1;letter-spacing:-.05em}
   .not-found-copy{margin:20px auto 30px;max-width:450px;color:#a8bcd0;font-size:.98rem;line-height:1.65}
   .not-found-copy span{display:block;color:#7892aa}
   .not-found-home{display:inline-flex;align-items:center;gap:10px;padding:13px 18px;border:1px solid rgba(114,199,255,.3);border-radius:10px;background:rgba(8,124,240,.08);color:#f4f8fc;text-decoration:none;font-size:.9rem;font-weight:750}
   @media(min-width:700px){.not-found-page{padding:60px 30px}.nf-brand{margin-bottom:58px}.not-found-number{font-size:12rem}}
  `}</style>
  <div className="not-found-content">
   <div className="nf-brand" aria-label="LindiMaps">LINDI<span>MAPS</span><small>GEOSPATIAL SOLUTIONS</small></div>
   <p className="not-found-tagline">GEOSPATIAL SOLUTIONS</p>
   <strong className="not-found-number">404</strong>
   <h1>Faqja nuk u gjet.</h1>
   <p className="not-found-copy">Adresa që kërkoni nuk ekziston ose është zhvendosur.<span>The page you are looking for could not be found.</span></p>
   <Link className="not-found-home" href="/">Kthehu në Home <span aria-hidden="true">→</span></Link>
  </div>
 </main>
}
export default function GlobalNotFound(){return <html lang="sq"><body><NotFoundContent/></body></html>}