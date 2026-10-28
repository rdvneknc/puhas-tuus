import { useLanguage } from "../i18n/LanguageContext.jsx";

const ICONS = [
  <svg key="doc" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path
      d="M8 4h8a2 2 0 012 2v14l-3-2-3 2-3-2-3 2V6a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M9 9h6M9 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="chat" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 8h10a2 2 0 012 2v5a2 2 0 01-2 2H9l-4 3v-3H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M11 5h6a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key="check" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 12.5l2.5 2.5L16 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

function Arrow() {
  return (
    <li className="process-arrow" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </li>
  );
}

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title section-title--center">{t.process.title}</h2>

        <ol className="process-steps">
          {t.process.steps.flatMap((step, i) => {
            const items = [];
            if (i > 0) items.push(<Arrow key={`arrow-${i}`} />);
            items.push(
              <li className="process-step" key={step.title}>
                <div className="process-icon" aria-hidden="true">
                  {ICONS[i]}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            );
            return items;
          })}
        </ol>
      </div>
    </section>
  );
}
