import './StatGrid.scss';

export default function StatGrid({ stats }) {
  return (
    <div className="stat-grid">
      {stats.map((s) => (
        <div className="stat-grid__item" key={s.label}>
          <span className="stat-grid__value">{s.value}</span>
          <span className="stat-grid__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
