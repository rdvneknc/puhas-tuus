import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LOCALES } from "../i18n/translations.js";
import FlagIcon from "./FlagIcon.jsx";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();
  const current = LOCALES.find((locale) => locale.code === lang) || LOCALES[0];

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
    <div className={`lang-dropdown${open ? " is-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className="lang-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <FlagIcon code={current.code} />
        <span className="lang-code">{current.short}</span>
        <svg className="lang-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <ul className="lang-dropdown-menu" id={listId} role="listbox" aria-label="Language">
          {LOCALES.map((locale) => (
            <li key={locale.code} role="option" aria-selected={lang === locale.code}>
              <button
                type="button"
                className={`lang-dropdown-option${lang === locale.code ? " is-active" : ""}`}
                onClick={() => {
                  setLang(locale.code);
                  setOpen(false);
                }}
              >
                <FlagIcon code={locale.code} />
                <span>{locale.label}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
