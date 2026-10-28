import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function PricesPage() {
  const { t } = useLanguage();
  const p = t.pricesPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <section className="page-section">
        <div className="container">
          <div className="pricing-grid">
            {p.plans.map((plan) => (
              <article className="price-card" key={plan.id}>
                <h2>{plan.name}</h2>
                <p className="price-note">{plan.note}</p>
                <p className="price-amount">
                  <span>{plan.price}</span>
                  {plan.period ? <small>{plan.period}</small> : null}
                </p>
                <ul className="check-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline">
                  {t.common.requestQuote}
                </Link>
              </article>
            ))}
          </div>

          <div className="pricing-footnote">
            <p>{p.footnote}</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--soft">
        <div className="container faq-block">
          <h2 className="section-title">{p.faqTitle}</h2>
          <div className="faq-grid">
            {p.faqs.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
