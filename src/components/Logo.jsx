import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`logo ${className}`.trim()} aria-label="Puhas Tuus home" title="Puhas Tuus">
      <img
        className="logo-img"
        src="/images/puhas-tuus-logo.webp"
        alt="Puhas Tuus OÜ"
        width="200"
        height="48"
        draggable="false"
      />
    </Link>
  );
}
