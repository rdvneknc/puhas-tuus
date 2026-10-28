import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contactPage;
  const [params] = useSearchParams();

  const initial = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      service: params.get("service") || "",
      location: params.get("location") || "",
      message: "",
    }),
    [params]
  );

  const [form, setForm] = useState(initial);
  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const contactItems = [
    {
      label: c.email,
      value: "info@puhastus.ee",
      href: "mailto:info@puhastus.ee",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: c.phone,
      value: "+372 5000 0000",
      href: "tel:+3725000000",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.5 4h3l1.5 4-2 1.5a12 12 0 005.5 5.5L16 13.5l4 1.5v3a2 2 0 01-2.2 2A16 16 0 014.5 6.2 2 2 0 016.5 4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: c.area,
      value: c.areaValue,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: c.hours,
      value: c.hoursValue,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request — ${form.service || "cleaning"}`);
    const body = encodeURIComponent(
      `Hello Puhas Tuus,\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service || "—"}\nLocation: ${form.location || "—"}\n\nMessage:\n${form.message || "—"}\n\nThank you.`
    );
    window.location.href = `mailto:info@puhastus.ee?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <section className="contact-section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">{c.asideEyebrow}</p>
            <h2>{c.asideTitle}</h2>
            <p>{c.asideText}</p>

            <ul className="contact-meta">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <span className="contact-meta-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <span className="contact-meta-label">{item.label}</span>
                    {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-head">
              <h3>{c.formTitle}</h3>
              <p>{c.formHint}</p>
            </div>

            <div className="form-row">
              <label className="field">
                <span>{c.name}</span>
                <input
                  type="text"
                  required
                  placeholder={c.namePh}
                  value={form.name}
                  onChange={update("name")}
                />
              </label>
              <label className="field">
                <span>{c.emailLabel}</span>
                <input
                  type="email"
                  required
                  placeholder={c.emailPh}
                  value={form.email}
                  onChange={update("email")}
                />
              </label>
            </div>

            <div className="form-row">
              <label className="field">
                <span>{c.phoneLabel}</span>
                <input
                  type="tel"
                  placeholder={c.phonePh}
                  value={form.phone}
                  onChange={update("phone")}
                />
              </label>
              <label className="field">
                <span>{c.service}</span>
                <div className="select-wrap">
                  <select value={form.service} onChange={update("service")} required>
                    <option value="" disabled>
                      {c.selectService}
                    </option>
                    <option value="stairwell">{t.hero.services.stairwell}</option>
                    <option value="common">{t.hero.services.common}</option>
                    <option value="windows">{t.hero.services.windows}</option>
                    <option value="other">{c.other}</option>
                  </select>
                </div>
              </label>
            </div>

            <label className="field">
              <span>{c.location}</span>
              <input
                type="text"
                required
                placeholder={c.locationPh}
                value={form.location}
                onChange={update("location")}
              />
            </label>

            <label className="field">
              <span>{c.message}</span>
              <textarea
                rows={5}
                placeholder={c.messagePh}
                value={form.message}
                onChange={update("message")}
              />
            </label>

            <div className="contact-form-actions">
              <button type="submit" className="btn btn-primary">
                {c.send}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p>{c.replyNote}</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
