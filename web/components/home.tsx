import { SiteHeader, SiteFooter } from "./site-shell";
import { Catalogue } from "./catalogue";
import { routes } from "@/lib/routes";
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
  const heroImage =
    safeUrl(home?.image) ||
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80";
  return (
    <>
      <SiteHeader lang={lang} page="home" settings={settings} />
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
              <Link className="button" href={routes.services[lang]}>
                {localized(home, "primaryCta", lang, t.explore)}
                <Arrow />
              </Link>
              <Link className="button secondary" href={routes.contact[lang]}>
                {localized(home, "secondaryCta", lang, t.contactCta)}
                <Arrow />
              </Link>
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
            <Catalogue items={services} lang={lang} kind="services" />
          </div>
        </section>
        <section className="section container" id="projects">
          <p className="eyebrow">02 / {t.projects}</p>
          <h2>{t.projects}</h2>
          <Catalogue items={projects} lang={lang} kind="projects" />
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
      <SiteFooter lang={lang} settings={settings} />
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
