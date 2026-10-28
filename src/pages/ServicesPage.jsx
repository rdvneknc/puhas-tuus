import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import MediaImage from "../components/MediaImage.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { SERVICE_IDS, SERVICE_IMAGES } from "../i18n/translations.js";

export default function ServicesPage() {
  const { t } = useLanguage();
  const p = t.servicesPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <section className="page-section">
        <div className="container services-page-list">
          {SERVICE_IDS.map((id, index) => {
            const service = t.services[id];
            return (
              <article
                className={`service-detail${index % 2 === 1 ? " service-detail--reverse" : ""}`}
                key={id}
                id={id}
              >
                <MediaImage
                  className="service-detail-media"
                  src={SERVICE_IMAGES[id]}
                  alt={service.title}
                />
                <div className="service-detail-copy">
                  <h2>{service.title}</h2>
                  <p>{service.long}</p>
                  <ul className="check-list">
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-outline">
                    {p.ask}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
