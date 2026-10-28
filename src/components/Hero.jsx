import { useEffect, useId, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

function ServiceDropdown({ value, onChange, hasError = false, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();
  const selected = options.find((s) => s.value === value);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      className={`service-dropdown${open ? " is-open" : ""}${hasError ? " has-error" : ""}`}
      ref={rootRef}
    >
      <button
        type="button"
        className="service-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={hasError}
        onClick={() => setOpen((v) => !v)}
      >
        <svg className="field-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className={selected ? "is-selected" : "is-placeholder"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg className="service-dropdown-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <ul className="service-dropdown-menu" id={listId} role="listbox" aria-label={placeholder}>
          {options.map((option) => (
            <li key={option.value} role="option" aria-selected={value === option.value}>
              <button
                type="button"
                className={`service-dropdown-option${value === option.value ? " is-active" : ""}`}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                <span>{option.label}</span>
                {value === option.value ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [serviceError, setServiceError] = useState(false);

  const serviceOptions = [
    { value: "stairwell", label: t.hero.services.stairwell },
    { value: "common", label: t.hero.services.common },
    { value: "windows", label: t.hero.services.windows },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service) {
      setServiceError(true);
      return;
    }
    const params = new URLSearchParams();
    params.set("service", service);
    if (location) params.set("location", location);
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/puhas-tuus-banner-mobile-768x1024.webp"
          />
          <img
            className="hero-image"
            src="/images/puhas-tuus-banner-1920x800.webp"
            alt=""
            width="1920"
            height="800"
          />
        </picture>
      </div>
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-copy">
          <h1 className="hero-title">
            {t.hero.titleLine1}
            <span className="hero-title-break">{t.hero.titleLine2}</span>
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
        </div>

        <form className="quote-bar" onSubmit={handleSubmit}>
          <ServiceDropdown
            value={service}
            onChange={(next) => {
              setService(next);
              setServiceError(false);
            }}
            hasError={serviceError}
            options={serviceOptions}
            placeholder={t.hero.selectService}
          />

          <div className="quote-divider" aria-hidden="true" />

          <div className="quote-field">
            <svg className="field-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <label className="sr-only" htmlFor="location">
              {t.hero.location}
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder={t.hero.location}
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary quote-submit">
            {t.hero.cta}
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
        </form>

        <Link to="/contact" className="btn btn-primary quote-cta-mobile">
          {t.hero.cta}
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
    </section>
  );
}
