import Link from "next/link";
import {getSiteContent,localized,type Language} from "@/lib/sanity";
import {SiteHeader,SiteFooter} from "@/components/site-shell";
import {serviceSlugFromTitle} from "@/data/service-details";
import "./test-services.css";

export default async function TestServices(){
 const lang:Language="sq"; const data=await getSiteContent();
 const services=data.services;
 return <><SiteHeader lang={lang} page="services" settings={data.settings}/><main className="test-services">
  <section className="ts-hero"><div className="ts-hero-shade"/><div className="container ts-hero-inner"><div><p className="ts-crumb">Kryefaqe <span>›</span> Shërbime</p><i/><h1>Shërbime</h1><p>Zgjidhje gjeohapësinore dhe digjitale<br/>për një territor më të mirë.</p></div><div className="ts-points"><p><b>◎</b><span><strong>Teknologji të avancuara</strong><small>GIS, RS, Drone, AI</small></span></p><p><b>♧</b><span><strong>Eksperiencë profesionale</strong><small>Projekte kombëtare dhe ndërkombëtare</small></span></p><p><b>⌁</b><span><strong>Zgjidhje të personalizuara</strong><small>Sipas nevojave të klientit</small></span></p></div></div></section>
  <section className="container ts-content"><div className="ts-intro"><div><p className="eyebrow">ÇFARË OFROJMË</p><h2>Shërbimet <em>tona</em></h2><p>Nga hartografimi dhe analiza territoriale te zhvillimi i platformave digjitale, ofrojmë zgjidhje të integruara gjeohapësinore për sektorin publik dhe privat.</p></div><div className="ts-tools"><div className="ts-search">⌕ <span>Kërko shërbimin...</span></div><div className="ts-chips"><b>Të gjitha</b><span>GIS</span><span>Fotogrametri</span><span>Analizë Territori</span><span>Kadastra</span><span>Konsulencë</span><span>Web GIS</span><span>Zhvillim Web</span></div></div></div>
  <div className="ts-grid">{services.map((s,i)=>{const title=localized(s,"title","sq");const slug=s.slug||serviceSlugFromTitle(title);return <Link href={slug?`/sq/sherbime/${slug}/`:"/sq/sherbime/"} className={i===6?"ts-card ts-wide":"ts-card"} key={s._id}><div className="ts-img" style={{backgroundImage:`url("${s.image||""}")`}}/><div className="ts-card-body"><span className="ts-icon">{["◇","⌘","▥","▱","♧","◎","▣"][i%7]}</span><div><h3>{title}</h3><p>{localized(s,"description","sq")}</p></div><b className="ts-arrow">→</b></div></Link>})}</div>
  </section></main><SiteFooter lang={lang} settings={data.settings}/></>
}