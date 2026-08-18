import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Seo from '../components/Seo';

const INCUBATEE_FORM_URL = 'https://forms.gle/nMpE2AQLw4CP2NBUA';

export default function JoinAsIncubatee() {
  return (
    <>
      <Seo
        title="Apply for Incubation"
        description="Apply to join the SMV VisionX incubation ecosystem through the official incubatee application form."
      />

      <PageHero
        eyebrow="Join Us / Incubatee"
        title="Apply for incubation"
        description="Submit your startup or idea through the official incubatee application form. Our team reviews applications on a rolling basis."
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Application"
            title="Incubatee Google Form"
            description="Use this form to share your team details, venture stage, problem statement and the kind of support you are seeking from VisionX."
          />
          <div className="section__cta section__cta--left">
            <Button href={INCUBATEE_FORM_URL} target="_blank" rel="noopener noreferrer" variant="primary">
              Open Incubatee Form
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
