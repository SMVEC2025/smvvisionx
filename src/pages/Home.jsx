import { Link } from 'react-router-dom';
import CtaButton from '../components/CtaButton';
import SectionHeading from '../components/SectionHeading';
import PillarGrid from '../components/PillarGrid';
import CtaBand from '../components/CtaBand';
import Seo from '../components/Seo';
import './Home.scss';

const PILLARS = [
  {
    title: 'Our Vision',
    description:
      'To build a globally competitive startup ecosystem in Puducherry that nurtures cross-disciplinary innovation, technology transfer and sustainable socio-economic growth.',
  },
  {
    title: 'Our Mission',
    description:
      'To provide institutional support, world-class lab access and seed funding pathways to high-potential founders - de-risking early-stage commercialization by aligning academia, corporate mentorship and venture capital.',
  },
  {
    title: 'Section 8 Not-for-Profit',
    description:
      "Incorporated as a dedicated Section 8 entity, SMV VisionX serves as a vital node in India's startup infrastructure - offering corporate networks, infrastructure and technical expertise.",
  },
];

const MATRIX = [
  { tier: 'Pre-Incubation', stage: 'Ideation & Proof of Concept', duration: '12 Months' },
  { tier: 'Physical Incubation', stage: 'MVP Ready & Early Traction', duration: '15-24 Months' },
  { tier: 'Acceleration Program', stage: 'Growth & Go-To-Market', duration: '4 Weeks' },
];

const SECTORS = ['Healthcare', 'Agribusiness & Agri-Tech', 'Edu-Tech', 'Emerging Technologies'];

const HERO_IMAGE = '/images/hero-main.webp';
const INCUBATEE_FORM_URL = 'https://forms.gle/nMpE2AQLw4CP2NBUA';

export default function Home() {
  return (
    <>
      <Seo
        title="Technology & Business Incubation Ecosystem"
        description="SMV VisionX Foundation is a premier technology and business incubation ecosystem at Sri Manakula Vinayagar Engineering College, Puducherry. Join our cohort for funding, mentorship and infrastructure."
      />

      <section className="hero">
        <div className="hero__slides" aria-hidden="true">
          <div className="hero__slide hero__slide--active" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        </div>
        <div className="hero__inner">
          <div className="hero__meta">
            <span className="hero__badge">Cohort Open</span>
            <span className="hero__meta-text">SMVEC Campus &middot; Puducherry</span>
          </div>

          <h1 className="hero__title">
            Fueling Innovation.
            Scaling Ventures.<br />
            <span className="hero__highlight">Transforming Horizons.</span>
          </h1>

          <p className="hero__desc">
            A premier technology and business incubation ecosystem operating out of Sri
            Manakula Vinayagar Engineering College campus - bridging disruptive academic
            research and commercial market success.
          </p>
          <p className="hero__lead">Empowering Regional Pioneers to Solve Global Challenges.</p>

          <div className="hero__actions">
            <CtaButton href={INCUBATEE_FORM_URL} target="_blank" rel="noopener noreferrer" variant="primary">
              Join Our Upcoming Cohort
            </CtaButton>
            <Link to="/contact" className="hero__link">
              <span aria-hidden="true">+</span> Request Ecosystem Brochure
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="About the Foundation"
            title="Our core pillars"
            description="Incorporated as a dedicated Section 8 Not-for-Profit entity, SMV VisionX Foundation serves as a vital node in India's startup infrastructure. We offer early-stage startups a comprehensive toolkit consisting of robust corporate networks, infrastructure, and technical expertise."
          />
          <PillarGrid items={PILLARS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The Incubation Matrix"
            title="A structured path from idea to scale"
            description="Our tiered framework meets founders at every stage - from proof of concept to go-to-market acceleration."
          />
          <div className="matrix-teaser">
            {MATRIX.map((m) => (
              <div className="matrix-teaser__row" key={m.tier}>
                <span className="matrix-teaser__tier">{m.tier}</span>
                <span className="matrix-teaser__stage">{m.stage}</span>
                <span className="matrix-teaser__duration">{m.duration}</span>
              </div>
            ))}
          </div>
          <div className="section__cta">
            <CtaButton to="/programs" variant="primary">View the full incubation matrix</CtaButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Strategic Focus Areas"
            title="Sectors we back"
            description="We welcome innovators across all domains, with specialized infrastructure tailored for deep-tech sectors."
          />
          <div className="sector-tags">
            {SECTORS.map((s) => (
              <span className="sector-tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Take the next step"
        description="Access institutional seed grants, world-class labs and a network of mentors and investors. Choose the path that fits your venture."
        primary={{ label: 'Apply for Incubation', href: INCUBATEE_FORM_URL }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  );
}
