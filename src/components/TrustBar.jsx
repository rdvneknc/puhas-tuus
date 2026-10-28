import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="trust" aria-label="Why choose us">
      <div className="container trust-grid">
        <div className="trust-item">
          <div className="trust-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l1.2 6.3L19.5 12 13.2 14.7 12 21l-1.2-6.3L4.5 12l6.3-2.7L12 3z"
                fill="currentColor"
              />
              <path
                d="M19 4l.6 2.4L22 7l-2.4.6L19 10l-.6-2.4L16 7l2.4-.6L19 4z"
                fill="currentColor"
                opacity=".55"
              />
            </svg>
          </div>
          <p>{t.trust.clean}</p>
        </div>

        <div className="trust-item">
          <div className="trust-icon trust-icon--leaf" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 19c8-1 12-6 14-14-8 2-13 6-14 14z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M5 19c2-4 6-7 11-9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p>{t.trust.daily}</p>
        </div>

        <div className="trust-item">
          <div className="trust-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>{t.trust.reliable}</p>
        </div>
      </div>
    </section>
  );
}
