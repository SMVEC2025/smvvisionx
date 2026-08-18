import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Seo from '../components/Seo';

export default function PreIncubationStartups() {
  return (
    <>
      <Seo
        title="Pre-Incubation Startups"
        description="Early-stage teams validating their ideas through the SMV VisionX pre-incubation program. Our current cohort will be featured here soon."
      />

      <PageHero
        eyebrow="Startups / Pre-Incubation"
        title="Pre-Incubation Startups"
        description="Early-stage teams currently validating their ideas through our pre-incubation program."
      />

      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="empty-state__icon" aria-hidden="true"><FontAwesomeIcon icon={faSeedling} /></span>
            <SectionHeading
              eyebrow="Cohort"
              title="Our founders will be featured here soon"
              description="We are onboarding our current pre-incubation cohort. Have an idea at the proof-of-concept stage? Apply and you could be featured here."
              align="center"
            />
            <Button to="/join-us/incubatee" variant="primary">Apply for Pre-Incubation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
