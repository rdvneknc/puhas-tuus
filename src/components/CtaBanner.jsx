import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <h2>We’ll find the right solution for your building.</h2>
        <Link to="/contact" className="btn btn-white">
          Request a quote
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
