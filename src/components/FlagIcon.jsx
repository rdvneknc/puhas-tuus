export default function FlagIcon({ code, className = "" }) {
  if (code === "et") {
    return (
      <svg
        className={`flag-icon ${className}`.trim()}
        viewBox="0 0 21 15"
        width="20"
        height="14"
        aria-hidden="true"
      >
        <rect width="21" height="5" y="0" fill="#0072CE" />
        <rect width="21" height="5" y="5" fill="#000000" />
        <rect width="21" height="5" y="10" fill="#FFFFFF" />
      </svg>
    );
  }

  if (code === "en") {
    return (
      <svg
        className={`flag-icon ${className}`.trim()}
        viewBox="0 0 60 30"
        width="20"
        height="14"
        aria-hidden="true"
      >
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0L60 30M60 0L0 30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="2" />
        <path d="M30 0V30M0 15H60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    );
  }

  return null;
}
