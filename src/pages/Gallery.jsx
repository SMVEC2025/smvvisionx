import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import './Gallery.scss';

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery"
        description="A look at demo days, workshops, mentoring sessions and campus events at SMV VisionX Foundation."
      />

      <PageHero
        eyebrow="Moments"
        title="Gallery"
        description="A look at our demo days, workshops, mentoring sessions and campus events."
      />

      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="empty-state__icon" aria-hidden="true"><FontAwesomeIcon icon={faCamera} /></span>
            <SectionHeading
              eyebrow="Highlights"
              title="Photos coming soon"
              description="We’re curating pictures from events conducted by VisionX. Follow us on LinkedIn for the latest highlights."
              align="center"
            />
          </div>
        </div>
      </section>
    </>
  );
}
