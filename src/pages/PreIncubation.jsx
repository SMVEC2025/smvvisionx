import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faFileLines, faScrewdriverWrench, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';
import Seo from '../components/Seo';

const OFFERINGS = [
  { icon: <FontAwesomeIcon icon={faLightbulb} />, title: 'Ideation Bootcamps', description: 'Structured workshops to sharpen your concept and validate problem-market fit.' },
  { icon: <FontAwesomeIcon icon={faFileLines} />, title: 'IP Assessment', description: 'Early evaluation of your intellectual property and patentability.' },
  { icon: <FontAwesomeIcon icon={faScrewdriverWrench} />, title: 'MVP Architecture Support', description: 'Technical guidance to design and build your first working prototype.' },
  { icon: <FontAwesomeIcon icon={faGraduationCap} />, title: 'Academic Mentor Mapping', description: 'Pairing with faculty and domain mentors aligned to your idea.' },
];

export default function PreIncubation() {
  return (
    <>
      <Seo
        title="Pre-Incubation Program"
        description="A 12-month pre-incubation track for founders at the ideation and proof-of-concept stage, covering ideation bootcamps, IP assessment, MVP architecture support and academic mentor mapping."
      />

      <PageHero
        eyebrow="Programs / Pre-Incubation"
        title="Pre-Incubation"
        description="For founders at the ideation and proof-of-concept stage. Ideal duration: 12 months."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Core Offerings & Support" title="From idea to validated PoC" />
          <div className="grid-2">
            {OFFERINGS.map((o) => (
              <InfoCard key={o.title} {...o} />
            ))}
          </div>
          <div className="section__cta">
            <Button to="/join-us/incubatee" variant="primary">Apply for Pre-Incubation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
