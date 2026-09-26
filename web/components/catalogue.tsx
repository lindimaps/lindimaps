/* eslint-disable @next/next/no-img-element */
import {
  localized,
  safeUrl,
  type ContentItem,
  type Language,
} from "@/lib/sanity";
export function Catalogue({
  items,
  lang,
  kind,
}: {
  items: ContentItem[];
  lang: Language;
  kind: "services" | "projects";
}) {
  return (
    <div className="grid">
      {items.map((item) => (
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
            {kind === "projects" && (
              <p className="eyebrow">
                {[item.category, item.year].filter(Boolean).join(" / ")}
              </p>
            )}
            <h3>{localized(item, "title", lang)}</h3>
            <p>
              {localized(
                item,
                kind === "services" ? "description" : "summary",
                lang,
              )}
            </p>
            {safeUrl(item.liveUrl) && (
              <a
                className="text-link"
                href={safeUrl(item.liveUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "sq" ? "Hap projektin" : "Open project"}
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
            )}
          </div>
        </article>
      ))}
      {!items.length && (
        <p className="empty">
          {lang === "sq"
            ? "Përmbajtja do të shfaqet sapo të publikohet."
            : "Content will appear once published."}
        </p>
      )}
    </div>
  );
}
