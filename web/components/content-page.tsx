/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import {getSiteContent,localized,safeUrl,type Language,type TextBlock} from "@/lib/sanity";
import {routes,labels,type PageKey} from "@/lib/routes";
import {SiteHeader,SiteFooter} from "./site-shell";
import {Catalogue} from "./catalogue";
export function contentMetadata(lang:Language,page:PageKey):Metadata{return {title:`${labels[lang][page]} | LindiMaps`,alternates:{canonical:routes[page][lang],languages:{sq:routes[page].sq,en:routes[page].en}}}}
function Biography({blocks}:{blocks?:TextBlock[]}){return <div className="prose">{blocks?.filter(b=>b._type==="block").map(b=><p key={b._key}>{b.children?.map(s=>s.text).join("")}</p>)}</div>}
export default async function ContentPage({lang,page}:{lang:Language;page:Exclude<PageKey,"home">}){
 const data=await getSiteContent();const {profile,settings,about}=data;const sq=lang==="sq";
 return <><SiteHeader lang={lang} page={page} settings={settings}/><main id="main">
  <section className="page-heading container"><p className="eyebrow">LindiMaps / {labels[lang][page]}</p><h1>{labels[lang][page]}</h1></section>
  {page==="services"&&<section className="container content-section"><Catalogue items={data.services} lang={lang} kind="services"/></section>}
  {page==="projects"&&<section className="container content-section"><Catalogue items={data.projects} lang={lang} kind="projects"/></section>}
  {page==="publications"&&<section className="container content-section publication-list">{data.publications.map(pub=><article className="publication-card" key={pub._id}>
    {safeUrl(pub.image)&&<img src={safeUrl(pub.image)} alt="" width="220" height="280" loading="lazy"/>}
    <div><p className="eyebrow">{[pub.publicationType,pub.year].filter(Boolean).join(" / ")}</p><h2>{lang==="en"&&pub.titleEn?pub.titleEn:pub.title}</h2>
    {pub.authors?.length?<p className="pub-authors">{pub.authors.join(", ")}</p>:null}
    {pub.publisher?<p className="pub-publisher">{pub.publisher}</p>:null}
    {(sq?pub.abstractSq:pub.abstractEn)&&<p className="pub-abstract">{sq?pub.abstractSq:pub.abstractEn}</p>}
    <div className="pub-actions">{safeUrl(pub.url)&&<a className="button" href={safeUrl(pub.url)} target="_blank" rel="noopener noreferrer">{pub.doi?"DOI / Online":"Online"} →</a>}{safeUrl(pub.pdfUrl)&&<a className="button secondary-light" href={safeUrl(pub.pdfUrl)} target="_blank" rel="noopener noreferrer">PDF →</a>}</div></div>
  </article>)}{!data.publications.length&&<p className="empty">{sq?"Publikimet do të shfaqen këtu sapo të publikohen në CMS.":"Publications will appear here once published in the CMS."}</p>}</section>}
  {page==="about"&&<><section className="container content-section profile-grid">{safeUrl(profile?.image)?<img className="profile-photo" src={safeUrl(profile?.image)} alt={profile?.name||""} width="600" height="700"/>:<div className="profile-monogram" aria-hidden="true">{(profile?.name||"LindiMaps").split(" ").map(n=>n[0]).join("")}</div>}<div><p className="eyebrow">{profile?.name}</p><h2>{localized(profile,"headline",lang)}</h2><Biography blocks={sq?profile?.bioSq:profile?.bioEn}/><div className="socials profile-socials">{([["LinkedIn",profile?.linkedin],["ResearchGate",profile?.researchGate],["Google Scholar",profile?.scholar],["ORCID",profile?.orcid],["CV",profile?.cvUrl]] as const).map(([label,url])=>safeUrl(url)?<a key={label} href={safeUrl(url)} target="_blank" rel="noopener noreferrer">{label}</a>:null)}</div></div></section>
  {(["history","values"] as const).map(section=>about?.[section]?.length?<section className={`section ${section==="values"?"soft":""}`} key={section}><div className="container"><h2>{section==="history"?(sq?"Historia jonë":"Our history"):(sq?"Vlerat tona":"Our values")}</h2><div className="grid">{about[section].map(item=><article className="card" key={item._key}><h3>{localized(item,"title",lang)}</h3><p>{localized(item,"description",lang)}</p></article>)}</div></div></section>:null)}</>}
  {page==="contact"&&<section className="container content-section"><div className="contact-panel"><div><p className="eyebrow">{sq?"Bisedojmë për projektin tënd":"Let’s discuss your project"}</p><h2>{sq?"Le ta kthejmë idenë tënde në hartë.":"Let’s put your idea on the map."}</h2><p className="prose">{localized(settings,"location",lang)}</p></div><div className="card"><h3>Email</h3><a className="contact-email" href={`mailto:${settings?.email||"contact.lindimaps@gmail.com"}`}>{settings?.email||"contact.lindimaps@gmail.com"}</a><p>{sq?"Na shkruaj për konsulencë, bashkëpunime ose zgjidhje GIS.":"Get in touch for consulting, collaborations or GIS solutions."}</p></div></div></section>}
 </main><SiteFooter lang={lang} settings={settings}/></>
}
