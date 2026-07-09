import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faSatelliteDish, faSeedling, faGears } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import InfoCard from '../components/InfoCard';
import Seo from '../components/Seo';

const FOCUS_AREAS = [
  {
    icon: <FontAwesomeIcon icon={faRobot} />,
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Nurturing next-gen automated intelligence, natural language processors and computer vision systems.',
  },
  {
    icon: <FontAwesomeIcon icon={faSatelliteDish} />,
    title: 'IoT & Smart Systems',
    description:
      'Leveraging advanced sensors, connected infrastructure and embedded system design.',
  },
  {
    icon: <FontAwesomeIcon icon={faSeedling} />,
    title: 'AgriTech Solutions',
    description:
      'Deploying technology to modernize crop management, drone analytics and supply-chain logistics.',
  },
  {
    icon: <FontAwesomeIcon icon={faGears} />,
    title: 'Deep Tech & Core Engineering',
    description:
      'Advancing mechanical, electronic and material science solutions out of our specialized institutional labs.',
  },
];

const SECTORS = ['Healthcare', 'Agribusiness & Agri-Tech', 'Edu-Tech', 'Emerging Technologies'];

export default function Sectors() {
  return (
    <>
      <Seo
        title="Strategic Focus Areas"
        description="SMV VisionX backs innovators in AI/ML, IoT & Smart Systems, AgriTech and Deep Tech — with focus sectors across Healthcare, Agribusiness, Edu-Tech and Emerging Technologies."
      />

      <PageHero
        eyebrow="Focus Areas"
        title="Strategic focus areas"
        description="We welcome innovators across all domains, with specialized infrastructure tailored for deep-tech sectors."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Where We Go Deep" title="Specialized domains" />
          <div className="grid-2">
            {FOCUS_AREAS.map((f) => (
              <InfoCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Focus Sectors" title="Priority impact sectors" align="center" />
          <div className="sector-tags sector-tags--center">
            {SECTORS.map((s) => (
              <span className="sector-tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
