import { Link } from 'react-router-dom';
import './CtaButton.scss';

/**
 * Pill button with a circular arrow badge. On hover the whole button
 * inverts its colours (no lift / shadow).
 */
export default function CtaButton({ to, variant = 'primary', children }) {
  return (
    <Link to={to} className={`cta-btn cta-btn--${variant}`}>
      <span className="cta-btn__badge" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </Link>
  );
}
