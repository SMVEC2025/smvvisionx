import './PersonCard.scss';

export default function PersonCard({ name, role, initials, image }) {
  return (
    <div className="person-card">
      {image ? (
        <img className="person-card__photo" src={image} alt={name} loading="lazy" />
      ) : (
        <div className="person-card__avatar">{initials}</div>
      )}
      <h3 className="person-card__name">{name}</h3>
      <p className="person-card__role">{role}</p>
    </div>
  );
}
