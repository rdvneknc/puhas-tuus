import { Link } from "react-router-dom";
import MediaImage from "./MediaImage.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { IMAGES } from "../i18n/translations.js";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about">
          <MediaImage
            className="about-media"
            src={IMAGES.aboutTeam}
            alt="Puhas Tuus"
          />
          <div className="about-content">
            <p className="eyebrow">{t.homeAbout.eyebrow}</p>
            <h2>{t.homeAbout.title}</h2>
            <p>{t.homeAbout.text}</p>
            <Link to="/about" className="btn btn-outline">
              {t.homeAbout.cta}
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
        </div>
      </div>
    </section>
  );
}
