import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import MediaImage from "../components/MediaImage.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { IMAGES, TEAM_IMAGES } from "../i18n/translations.js";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />

      <section className="page-section">
        <div className="container about-page-intro">
          <div className="about-page-copy">
            <h2>{a.whoTitle}</h2>
            <p>{a.whoP1}</p>
            <p>{a.whoP2}</p>
            <Link to="/contact" className="btn btn-primary">
              {t.common.requestQuote}
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
          <MediaImage
            className="about-page-media"
            src={IMAGES.aboutStory}
            alt="Puhas Tuus"
          />
        </div>
      </section>

      <section className="page-section page-section--soft">
        <div className="container">
          <h2 className="section-title">{a.valuesTitle}</h2>
          <div className="values-grid">
            {a.values.map((item) => (
              <article className="value-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="section-title">{a.teamTitle}</h2>
          <div className="team-grid">
            {a.team.map((member, index) => (
              <article className="team-card" key={member.name}>
                <MediaImage className="team-media" src={TEAM_IMAGES[index]} alt={member.name} />
                <div className="team-body">
                  <p className="team-role">{member.role}</p>
                  <h3>{member.name}</h3>
                  <p>{member.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
