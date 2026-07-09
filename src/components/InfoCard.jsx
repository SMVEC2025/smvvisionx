import './InfoCard.scss';

export default function InfoCard({ icon, title, description }) {
  return (
    <div className="info-card">
      {icon && <div className="info-card__icon">{icon}</div>}
      <h3 className="info-card__title">{title}</h3>
      {description && <p className="info-card__desc">{description}</p>}
    </div>
  );
}
