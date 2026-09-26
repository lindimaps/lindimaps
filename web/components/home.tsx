/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Metadata } from "next";
import {
  getSiteContent,
  localized,
  safeUrl,
  type Language,
} from "@/lib/sanity";

const copy = {
  sq: {
    title: "E ardhmja përmes GIS",
    text: "Konsulencë dhe zgjidhje profesionale për hartat dhe analizat tuaja hapësinore.",
    services: "Shërbime",
    projects: "Projekte",
    contact: "Kontakt",
    explore: "Eksploro shërbimet",
    contactCta: "Na kontaktoni",
    intro: "Analizë dhe vizualizim i avancuar i territorit",
    introText:
      "Përdorim teknologjinë më të fundit për të vizualizuar dhe analizuar çdo pikë të territorit.",
    open: "Hap projektin",
    emptyProjects: "Projektet do të shfaqen këtu sapo të publikohen.",
    emptyServices: "Shërbimet do të shfaqen këtu sapo të publikohen.",
    contactTitle: "Le ta kthejmë idenë tënde në hartë.",
    skip: "Kalo te përmbajtja",
    rights: "Të gjitha të drejtat e rezervuara.",
    back: "Kthehu lart",
  },
  en: {
    title: "The future through GIS",
    text: "Professional consulting and solutions for your maps and spatial analysis.",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    explore: "Explore services",
    contactCta: "Contact us",
    intro: "Advanced territorial analysis and visualization",
    introText:
      "We use the latest technology to visualize and analyze every point of the territory.",
    open: "Open project",
    emptyProjects: "Projects will appear here once published.",
    emptyServices: "Services will appear here once published.",
    contactTitle: "Let’s put your idea on the map.",
    skip: "Skip to content",
    rights: "All rights reserved.",
    back: "Back to top",
  },
};

export async function homeMetadata(lang: Language): Promise<Metadata> {
  const { settings } = await getSiteContent();
  return {
    title:
      settings?.seoTitle ||
      `LindiMaps | ${lang === "sq" ? "Inteligjenca Hapësinore" : "Spatial Intelligence"}`,
    description: localized(settings, "seoDescription", lang, copy[lang].text),
    alternates: {
      canonical: lang === "sq" ? "/" : "/en",
      languages: { sq: "/", en: "/en", "x-default": "/" },
    },
  };
}

export default async function Home({ lang }: { lang: Language }) {
  const { home, settings, projects, services } = await getSiteContent();
  const t = copy[lang];
  const email = settings?.email?.trim() || "contact.lindimaps@gmail.com";
  const name = settings?.siteName || "LindiMaps";
  const heroImage =
    safeUrl(home?.image) ||
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80";
  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <header className="site-header" id="top">
        <div className="container nav-row">
          <Link className="brand" href={lang === "sq" ? "/" : "/en"}>
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
            <a href="#services">{t.services}</a>
            <a href="#projects">{t.projects}</a>
            <a href="#contact">{t.contact}</a>
          </nav>
          <div
            className="languages"
            aria-label={lang === "sq" ? "Gjuha" : "Language"}
          >
            <Link
              href="/"
              hrefLang="sq"
              aria-current={lang === "sq" ? "page" : undefined}
            >
              SQ
            </Link>
            <Link
              href="/en"
              hrefLang="en"
              aria-current={lang === "en" ? "page" : undefined}
            >
              EN
            </Link>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero">
          <img
            className="hero-image"
            src={heroImage}
            alt=""
            fetchPriority="high"
          />
          <div className="container hero-content">
            <p className="eyebrow">GIS · WebGIS · Remote Sensing</p>
            <h1>{localized(home, "heroTitle", lang, t.title)}</h1>
            <p className="hero-description">
              {localized(home, "heroText", lang, t.text)}
            </p>
            <div className="actions">
              <a className="button" href="#services">
                {localized(home, "primaryCta", lang, t.explore)}
                <Arrow />
              </a>
              <a className="button secondary" href="#contact">
                {localized(home, "secondaryCta", lang, t.contactCta)}
                <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section className="container intro">
          <p className="eyebrow">LindiMaps</p>
          <h2>{localized(home, "introTitle", lang, t.intro)}</h2>
          <p>{localized(home, "intro", lang, t.introText)}</p>
        </section>
        <section className="section soft" id="services">
          <div className="container">
            <p className="eyebrow">01 / {t.services}</p>
            <h2>{t.services}</h2>
            <div className="grid">
              {services.length ? (
                services.map((item) => (
                  <article className="card" key={item._id}>
                    {safeUrl(item.image) && (
                      <img
                        className="service-icon"
                        src={safeUrl(item.image)}
                        alt=""
                        width="56"
                        height="56"
                        loading="lazy"
                      />
                    )}
                    <h3>
                      {localized(
                        item,
                        "title",
                        lang,
                        lang === "en" ? "Service" : "Shërbim",
                      )}
                    </h3>
                    <p>{localized(item, "description", lang)}</p>
                  </article>
                ))
              ) : (
                <p className="empty">{t.emptyServices}</p>
              )}
            </div>
          </div>
        </section>
        <section className="section container" id="projects">
          <p className="eyebrow">02 / {t.projects}</p>
          <h2>{t.projects}</h2>
          <div className="grid">
            {projects.length ? (
              projects.map((item) => (
                <article className="card project" key={item._id}>
                  {safeUrl(item.image) && (
                    <img
                      className="project-image"
                      src={safeUrl(item.image)}
                      alt={localized(item, "title", lang)}
                      width="640"
                      height="400"
                      loading="lazy"
                    />
                  )}
                  <div className="project-body">
                    <p className="eyebrow">
                      {[item.category, item.year].filter(Boolean).join(" / ")}
                    </p>
                    <h3>
                      {localized(
                        item,
                        "title",
                        lang,
                        lang === "en" ? "Project" : "Projekt",
                      )}
                    </h3>
                    <p>{localized(item, "summary", lang)}</p>
                    {item.technologies?.length ? (
                      <ul className="tags">
                        {item.technologies.map((technology, index) => (
                          <li key={`${technology}-${index}`}>{technology}</li>
                        ))}
                      </ul>
                    ) : null}
                    {safeUrl(item.liveUrl) && (
                      <a
                        className="text-link"
                        href={safeUrl(item.liveUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.open}
                        <Arrow />
                      </a>
                    )}
                  </div>
                </article>
              ))
            ) : (
              <p className="empty">{t.emptyProjects}</p>
            )}
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="container">
            <p className="eyebrow">03 / {t.contact}</p>
            <h2>{t.contactTitle}</h2>
            <a className="contact-email" href={`mailto:${email}`}>
              {email}
              <Arrow />
            </a>
            {localized(settings, "location", lang) && (
              <p>{localized(settings, "location", lang)}</p>
            )}
            <div className="socials">
              {(
                [
                  ["LinkedIn", settings?.linkedin],
                  ["GitHub", settings?.github],
                  ["ResearchGate", settings?.researchGate],
                ] as const
              ).map(([label, url]) =>
                safeUrl(url) ? (
                  <a
                    key={label}
                    href={safeUrl(url)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                    <Arrow />
                  </a>
                ) : null,
              )}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-row">
          <p>
            © {new Date().getFullYear()} {name}. {t.rights}
          </p>
          <a href="#top">{t.back} ↑</a>
        </div>
      </footer>
    </>
  );
}
function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      width="20"
      height="20"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
