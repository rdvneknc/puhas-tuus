import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">Puhas Tuus OÜ</p>
          <p>{t.footer.tagline}</p>
        </div>

        <a href="mailto:info@puhastus.ee" className="footer-email">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path
              d="M3 7l9 7 9-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          info@puhastus.ee
        </a>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Puhas Tuus OÜ</p>
      </div>
    </footer>
  );
}
