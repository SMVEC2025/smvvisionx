import { Link } from 'react-router-dom';
import './CtaButton.scss';

/**
 * Pill button with a circular arrow badge. On hover the whole button
 * inverts its colours (no lift / shadow).
 */
export default function CtaButton({ to, href, variant = 'primary', children, ...rest }) {
  const className = `cta-btn cta-btn--${variant}`;
  const content = (
    <>
      <span className="cta-btn__badge" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={className} {...rest}>
      {content}
    </Link>
  );
}
