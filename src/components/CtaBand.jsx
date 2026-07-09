import CtaButton from './CtaButton';
import './CtaBand.scss';

/**
 * Centered call-to-action band with a serif headline, a decorative accent
 * and two pill buttons carrying circular arrow badges. Brand colours.
 */
export default function CtaBand({
  title = 'Take the next step',
  description = 'Start your journey with SMV VisionX. Choose the program that fits your goals.',
  primary = { label: 'Apply for Incubation', to: '/join-us/incubatee' },
  secondary = { label: 'Contact Us', to: '/contact' },
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <h2 className="cta-band__title">
          {title}
          <svg className="cta-band__flourish" viewBox="0 0 90 46" fill="none" aria-hidden="true">
            <path d="M4 40C18 30 30 20 34 6M34 6c-1 8-2 16 2 24M34 6c6 6 14 9 22 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M60 4c4 5 9 8 15 8M66 22c5-2 10-3 16-2" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </h2>
        <p className="cta-band__desc">{description}</p>
        <div className="cta-band__actions">
          <CtaButton to={primary.to} variant="primary">{primary.label}</CtaButton>
          <CtaButton to={secondary.to} variant="secondary">{secondary.label}</CtaButton>
        </div>
      </div>
    </section>
  );
}
