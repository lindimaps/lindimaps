/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Language, SiteContent } from "@/lib/sanity";
import { safeUrl } from "@/lib/sanity";
import { routes, labels, type PageKey } from "@/lib/routes";
export function SiteHeader({
  lang,
  page,
  settings,
}: {
  lang: Language;
  page: PageKey;
  settings: SiteContent["settings"];
}) {
  const name = settings?.siteName || "LindiMaps";
  return (
    <>
      <a className="skip" href="#main">
        {lang === "sq" ? "Kalo te përmbajtja" : "Skip to content"}
      </a>
      <header className="site-header" id="top">
        <div className="container nav-row">
          <Link className="brand" href={routes.home[lang]}>
            {safeUrl(settings?.logo) ? (
              <img
                src={safeUrl(settings?.logo)}
                alt={name}
                width="150"
                height="48"
              />
            ) : (
              <>
                <span className="brand-mark" aria-hidden="true">
                  L<span>·</span>
                </span>
                {name}
              </>
            )}
          </Link>
          <nav
            aria-label={lang === "sq" ? "Navigimi kryesor" : "Main navigation"}
          >
            {(Object.keys(routes) as PageKey[]).map((key) => (
              <Link
                key={key}
                href={routes[key][lang]}
                aria-current={page === key ? "page" : undefined}
              >
                {labels[lang][key]}
              </Link>
            ))}
          </nav>
          <div
            className="languages"
            aria-label={lang === "sq" ? "Gjuha" : "Language"}
          >
            {(["sq", "en"] as const).map((locale) => (
              <Link
                key={locale}
                href={routes[page][locale]}
                hrefLang={locale}
                aria-current={locale === lang ? "page" : undefined}
              >
                {locale.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
export function SiteFooter({
  lang,
  settings,
}: {
  lang: Language;
  settings: SiteContent["settings"];
}) {
  return (
    <footer>
      <div className="container footer-links">
        {(Object.keys(routes) as PageKey[]).map((key) => (
          <Link key={key} href={routes[key][lang]}>
            {labels[lang][key]}
          </Link>
        ))}
      </div>
      <div className="container footer-row">
        <p>
          © {new Date().getFullYear()} {settings?.siteName || "LindiMaps"}.{" "}
          {lang === "sq"
            ? "Të gjitha të drejtat e rezervuara."
            : "All rights reserved."}
        </p>
        <a className="text-link back-link" href="#top">
          {lang === "sq" ? "Kthehu lart" : "Back to top"}
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          >
            <path d="M12 19V5m-6 6 6-6 6 6" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
