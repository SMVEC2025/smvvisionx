import './StartupGrid.scss';

export default function StartupGrid({ startups }) {
  return (
    <div className="startup-grid">
      {startups.map((s) => (
        <div className="startup-card" key={s.name}>
          <span className="startup-card__sector">{s.sector}</span>
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
