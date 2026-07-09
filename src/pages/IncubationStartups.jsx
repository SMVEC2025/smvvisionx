import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Seo from '../components/Seo';

export default function IncubationStartups() {
  return (
    <>
      <Seo
        title="Incubation Startups"
        description="Growth-stage ventures scaling with full incubation support, mentorship and funding pathways at SMV VisionX Foundation. Our portfolio will be featured here soon."
      />

      <PageHero
        eyebrow="Startups / Incubation"
        title="Incubation Startups"
        description="Growth-stage ventures scaling with full incubation support, mentorship and funding pathways."
      />

      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="empty-state__icon" aria-hidden="true"><FontAwesomeIcon icon={faRocket} /></span>
            <SectionHeading
              eyebrow="Portfolio"
              title="Our portfolio is taking shape"
              description="We’re building our incubation portfolio. MVP-ready ventures with early traction are invited to apply and join the cohort."
              align="center"
            />
            <Button to="/join-us/incubatee" variant="primary">Apply for Incubation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
