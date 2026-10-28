import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/prices", label: t.nav.prices },
    { to: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav className={`nav${menuOpen ? " is-open" : ""}`} aria-label="Main">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="nav-lang-mobile">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="header-actions">
          <div className="header-lang-desktop">
            <LanguageSwitcher />
          </div>
          <Link to="/contact" className="btn btn-primary header-cta">
            {t.nav.cta}
          </Link>
        </div>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
