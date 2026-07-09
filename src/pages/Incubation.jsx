import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCloud, faRocket } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';
import Seo from '../components/Seo';

const TRACKS = [
  {
    icon: <FontAwesomeIcon icon={faBuilding} />,
    title: 'Physical Incubation',
    description:
      'For MVP-ready ventures with early traction. Dedicated plug-and-play workspace, high-speed internet, core lab access, legal compliance support and seed grant eligibility. Ideal duration: 15–24 months.',
  },
  {
    icon: <FontAwesomeIcon icon={faCloud} />,
    title: 'Virtual Incubation',
    description:
      'For scalable and remote ventures. Cloud credits, remote strategic mentoring, investor matchmaking and bi-monthly milestone reviews. Continuous engagement.',
  },
  {
    icon: <FontAwesomeIcon icon={faRocket} />,
    title: 'Acceleration Program',
    description:
      'For growth and go-to-market. Intensive fundraising prep, enterprise market access, corporate partner pilots and scaling compliance advisory. Ideal duration: 4 weeks.',
  },
];

export default function Incubation() {
  return (
    <>
      <Seo
        title="Incubation & Acceleration"
        description="Physical, virtual and acceleration tracks for MVP-ready and growth-stage ventures — dedicated workspace, lab access, cloud credits, investor matchmaking and go-to-market support."
      />

      <PageHero
        eyebrow="Programs / Incubation"
        title="Incubation & Acceleration"
        description="Once your MVP is validated, choose the track that fits your venture’s stage and needs."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Tracks" title="Physical, virtual and acceleration" />
          <div className="grid-3">
            {TRACKS.map((t) => (
              <InfoCard key={t.title} {...t} />
            ))}
          </div>
          <div className="section__cta">
            <Button to="/join-us/incubatee" variant="primary">Apply for Incubation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
