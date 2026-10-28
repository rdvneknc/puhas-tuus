import { Link } from "react-router-dom";
import MediaImage from "./MediaImage.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { SERVICE_IDS, SERVICE_IMAGES } from "../i18n/translations.js";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">{t.homeServices.title}</h2>

        <div className="services-grid">
          {SERVICE_IDS.map((id) => {
            const service = t.services[id];
            return (
              <article className="service-card" key={id}>
                <MediaImage className="service-media" src={SERVICE_IMAGES[id]} alt={service.title} />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <Link
                    to={`/services#${id}`}
                    className="service-link"
                    aria-label={service.title}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      </div>
    </section>
  );
}
