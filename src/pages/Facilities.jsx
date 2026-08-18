import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMicroscope, faHandshake, faCoins } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import InfoCard from '../components/InfoCard';
import Seo from '../components/Seo';
import './Facilities.scss';

const PERKS = [
  {
    icon: <FontAwesomeIcon icon={faBuilding} />,
    title: 'State-of-the-Art Workspace',
    description:
      'Fully air-conditioned co-working zones, dedicated startup cabins and high-velocity internet.',
  },
  {
    icon: <FontAwesomeIcon icon={faMicroscope} />,
    title: 'Advanced Prototyping Labs',
    description:
      "Direct operational access to SMVEC's Centers of Excellence (CoE) and fabrication labs, including the AICTE Idea Lab and Ethnotech CoE.",
  },
  {
    icon: <FontAwesomeIcon icon={faHandshake} />,
    title: 'Mentorship Network',
    description:
      '1-on-1 strategic check-ins with seasoned domain experts, technical architects and legal consultancies.',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Seed Funding Pipeline',
    description:
      'Access to institutional seed grants, internal investor demo days and venture capital networks.',
  },
];

const BOARD_ROOM_IMAGES = [1, 2].map((index) => ({
  src: `/images/infrastructure/board-room-${index}.webp`,
  alt: `VisionX board room infrastructure ${index}`,
  category: 'Board Rooms',
}));

const LAB_IMAGES = Array.from({ length: 20 }, (_, index) => ({
  src: `/images/infrastructure/lab-equipment-${index + 1}.webp`,
  alt: `VisionX lab equipment and prototyping infrastructure ${index + 1}`,
  category: 'Labs and Equipment',
}));

const INFRASTRUCTURE_IMAGES = [...BOARD_ROOM_IMAGES, ...LAB_IMAGES];

export default function Facilities() {
  return (
    <>
      <Seo
        title="Infrastructure & Ecosystem Perks"
        description="Air-conditioned co-working zones, advanced prototyping labs with CoE access, a mentorship network and a seed funding pipeline - everything a founder needs, on campus."
      />

      <PageHero
        eyebrow="Infrastructure"
        title="Ecosystem perks built for builders"
        description="Everything an early-stage team needs on campus - workspace, world-class labs, mentorship and funding pathways."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="On Campus" title="What's available to incubatees" />
          <div className="grid-2">
            {PERKS.map((p) => (
              <InfoCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Infrastructure Gallery"
            title="Board rooms, labs and equipment"
            description="A closer look at the spaces and technical facilities available through the VisionX ecosystem."
          />
          <div className="infrastructure-gallery">
            {INFRASTRUCTURE_IMAGES.map((image) => (
              <figure className="infrastructure-gallery__item" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.category}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
