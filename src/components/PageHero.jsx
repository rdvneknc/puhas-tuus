export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="container page-hero-content">
        {eyebrow ? <p className="eyebrow eyebrow--light">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="page-hero-subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}
