import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGlobe } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';
import Seo from '../components/Seo';

const MENTOR_TYPES = [
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    title: 'Internal Mentors',
    description:
      'Faculty, researchers and domain experts from Sri Manakula Vinayagar Engineering College who guide founders on technology, product and research commercialization.',
  },
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: 'External Mentors',
    description:
      'Startup ecosystem experts, founders, investors and operators offering strategic guidance on fundraising, go-to-market and scaling.',
  },
];

export default function Mentors() {
  return (
    <>
      <Seo
        title="Mentors"
        description="SMV VisionX pairs founders with internal mentors from SMVEC and external startup ecosystem experts for 1-on-1 strategic guidance."
      />

      <PageHero
        eyebrow="Our Network"
        title="Mentorship that meets you where you are"
        description="1-on-1 strategic check-ins with seasoned domain experts, technical architects and legal consultancies drawn from academia and the wider startup ecosystem."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Mentors"
            title="Two networks, one mission"
            description="The public mentor roster is being finalized. In the meantime, founders can understand how the network is structured and experts can apply to join it."
          />
          <div className="grid-2">
            {MENTOR_TYPES.map((m) => (
              <InfoCard key={m.title} {...m} />
            ))}
          </div>
          <div className="section__cta">
            <Button to="/join-us/mentor" variant="primary">Apply as Mentor</Button>
          </div>
        </div>
      </section>
    </>
  );
}
