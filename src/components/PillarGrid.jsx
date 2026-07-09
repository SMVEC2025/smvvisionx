import './PillarGrid.scss';

/**
 * Editorial numbered columns: each item shows a top rule, a large index
 * (01. 02. 03.), a bold brand-coloured subtitle and body copy.
 */
export default function PillarGrid({ items }) {
  return (
    <div className="pillar-grid">
      {items.map((item, i) => (
        <div className="pillar" key={item.title}>
          <span className="pillar__num">{String(i + 1).padStart(2, '0')}.</span>
          <h3 className="pillar__title">{item.title}</h3>
          <p className="pillar__desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
