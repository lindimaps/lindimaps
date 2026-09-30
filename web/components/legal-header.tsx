import Link from "next/link";
import type {Language,SiteContent} from "@/lib/sanity";
import {routes,labels,type PageKey} from "@/lib/routes";
import {Logo} from "./site-shell";
import {ScrollToTop} from "./scroll-to-top";
import {ThemeToggle} from "./theme-toggle";

const legalRoutes={privacy:{sq:"/sq/privacy",en:"/en/privacy"},terms:{sq:"/sq/termsofuse",en:"/en/termsofuse"},cookies:{sq:"/sq/cookies",en:"/en/cookies"}} as const;
export function LegalHeader({lang,type,settings}:{lang:Language;type:keyof typeof legalRoutes;settings:SiteContent["settings"]}){const sq=lang==="sq";return <><ScrollToTop/><a className="skip" href="#main">{sq?"Kalo te përmbajtja":"Skip to content"}</a><header className="site-header"><div className="container nav-row"><Link className="brand" href={routes.home[lang]} aria-label={settings?.siteName||"LindiMaps"}><Logo src={settings?.logo} darkSrc={settings?.logoDark}/></Link><nav className="desktop-nav" aria-label={sq?"Navigimi kryesor":"Main navigation"}>{(Object.keys(routes) as PageKey[]).map(key=><Link key={key} href={routes[key][lang]}>{labels[lang][key]}</Link>)}</nav><ThemeToggle lang={lang}/><div className="languages" aria-label={sq?"Zgjidh gjuhën":"Choose language"}><span aria-hidden="true">◎</span>{(["sq","en"] as const).map(locale=><Link key={locale} href={legalRoutes[type][locale]} hrefLang={locale} aria-current={locale===lang?"page":undefined}>{locale.toUpperCase()}</Link>)}</div><details className="mobile-menu"><summary aria-label={sq?"Hap menunë":"Open menu"}><span></span><span></span><span></span></summary><div className="mobile-menu-panel">{(Object.keys(routes) as PageKey[]).map(key=><Link key={key} href={routes[key][lang]}>{labels[lang][key]}</Link>)}</div></details></div></header></>}
