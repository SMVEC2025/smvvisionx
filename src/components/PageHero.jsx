import './PageHero.scss';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </section>
  );
}
