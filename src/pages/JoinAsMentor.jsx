import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Seo from '../components/Seo';

const MENTOR_FORM_URL = 'https://forms.gle/pKFEswi41ZSZ8bfZ9';

export default function JoinAsMentor() {
  return (
    <>
      <Seo
        title="Become a Mentor"
        description="Apply to join the SMV VisionX mentor network through the official mentor application form."
      />

      <PageHero
        eyebrow="Join Us / Mentor"
        title="Become a mentor"
        description="Share your domain expertise with early-stage founders, student innovators and startup teams in the VisionX ecosystem."
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            eyebrow="Application"
            title="Mentor Google Form"
            description="Use this form to tell us about your expertise, mentoring interests and availability for founder sessions."
          />
          <div className="section__cta section__cta--left">
            <Button href={MENTOR_FORM_URL} target="_blank" rel="noopener noreferrer" variant="primary">
              Open Mentor Form
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
