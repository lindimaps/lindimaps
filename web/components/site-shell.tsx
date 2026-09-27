import Link from "next/link";
import type { Language, SiteContent } from "@/lib/sanity";
import { routes, labels, type PageKey } from "@/lib/routes";

function Logo({compact=false}:{compact?:boolean}) {
  return <span className={compact ? "lm-logo compact" : "lm-logo"}>
    <span className="lm-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="white" fillOpacity=".2" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <circle className="logo-dot" cx="12" cy="11" r="2.5" fill="#3b82f6" stroke="white" strokeWidth="1.2"/>
      </svg>
    </span>
    <span className="lm-word"><strong>LINDI<span>MAPS</span></strong>{!compact && <small>Spatial Intelligence</small>}</span>
  </span>
}
function ProductMark({label}:{label:string}) {
  return <span className="product-mark"><span className="product-icon" aria-hidden="true">⌁</span><span><strong>LINDI<span>MAPS</span></strong><small>{label}</small></span></span>
}
export function SiteHeader({lang,page,settings}:{lang:Language;page:PageKey;settings:SiteContent["settings"]}) {
  const sq=lang==="sq";
  return <>
    <a className="skip" href="#main">{sq?"Kalo te përmbajtja":"Skip to content"}</a>
    <header className="site-header" id="top">
      <div className="container nav-row">
        <Link className="brand" href={routes.home[lang]} aria-label={settings?.siteName || "LindiMaps"}><Logo/></Link>
        <nav className="desktop-nav" aria-label={sq?"Navigimi kryesor":"Main navigation"}>
          {(Object.keys(routes) as PageKey[]).map(key=><Link key={key} href={routes[key][lang]} aria-current={page===key?"page":undefined}>{labels[lang][key]}</Link>)}
          <a className="nav-product" href={sq?"/sisteme/":"/en/systems/"}><ProductMark label="Systems"/></a>
          <a className="nav-product" href={sq?"/sq/akademia/":"/en/academy/"}><ProductMark label="Academy"/></a>
        </nav>
        <div className="languages" aria-label={sq?"Gjuha":"Language"}>
          {(["sq","en"] as const).map(locale=><Link key={locale} href={routes[page][locale]} hrefLang={locale} aria-current={locale===lang?"page":undefined}>{locale.toUpperCase()}</Link>)}
        </div>
        <details className="mobile-menu">
          <summary aria-label={sq?"Hap menunë":"Open menu"}><span></span><span></span><span></span></summary>
          <div className="mobile-menu-panel">
            {(Object.keys(routes) as PageKey[]).map(key=><Link key={key} href={routes[key][lang]} aria-current={page===key?"page":undefined}>{labels[lang][key]}</Link>)}
            <a href={sq?"/sisteme/":"/en/systems/"}><ProductMark label="Systems"/></a>
            <a href={sq?"/sq/akademia/":"/en/academy/"}><ProductMark label="Academy"/></a>
          </div>
        </details>
      </div>
    </header>
  </>
}
export function SiteFooter({lang,settings}:{lang:Language;settings:SiteContent["settings"]}) {
  return <footer>
    <div className="container footer-main"><Link className="footer-brand" href={routes.home[lang]}><Logo/></Link><div className="footer-links">{(Object.keys(routes) as PageKey[]).map(key=><Link key={key} href={routes[key][lang]}>{labels[lang][key]}</Link>)}</div></div>
    <div className="container footer-row"><p>© {new Date().getFullYear()} {settings?.siteName || "LindiMaps"}. {lang==="sq"?"Të gjitha të drejtat e rezervuara.":"All rights reserved."}</p><a className="back-top-float" href="#top" aria-label={lang==="sq"?"Kthehu lart":"Back to top"} title={lang==="sq"?"Kthehu lart":"Back to top"}><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 19V5m-6 6 6-6 6 6"/></svg></a></div>
  </footer>
}
