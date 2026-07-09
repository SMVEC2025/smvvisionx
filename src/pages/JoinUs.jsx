import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faHandshake } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import InfoCard from '../components/InfoCard';
import Seo from '../components/Seo';
import './JoinUs.scss';

const OPTIONS = [
  { icon: <FontAwesomeIcon icon={faRocket} />, title: 'Apply as Incubatee', description: 'Bring your idea or startup and apply for pre-incubation, incubation or acceleration support.', to: '/join-us/incubatee' },
  { icon: <FontAwesomeIcon icon={faHandshake} />, title: 'Apply as Mentor', description: 'Share your industry or academic expertise with our founders as a mentor.', to: '/join-us/mentor' },
];

export default function JoinUs() {
  return (
    <>
      <Seo
        title="Join Us"
        description="Join the SMV VisionX ecosystem — apply as an incubatee to build your startup, or as a mentor to guide the next generation of founders."
      />
      <PageHero
        eyebrow="Join Us"
        title="Join the SMV VisionX community"
        description="Whether you're building a startup or want to mentor one, there's a place for you here."
      />

      <section className="section">
        <div className="container grid-2">
          {OPTIONS.map((o) => (
            <Link key={o.to} to={o.to} style={{ display: 'block' }}>
              <InfoCard icon={o.icon} title={o.title} description={o.description} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
