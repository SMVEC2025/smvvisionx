import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Seo from '../components/Seo';

export default function Events() {
  return (
    <>
      <Seo
        title="Events"
        description="Upcoming bootcamps, demo days and pitch events hosted by SMV VisionX Foundation. Check back soon for the latest schedule."
      />

      <PageHero
        eyebrow="Programs / Events"
        title="Events"
        description="Bootcamps, demo days and pitch events that keep our founder community learning and connected."
      />

      <section className="section">
        <div className="container">
          <div className="empty-state">
            <span className="empty-state__icon" aria-hidden="true"><FontAwesomeIcon icon={faCalendarDays} /></span>
            <SectionHeading
              eyebrow="What’s On"
              title="Upcoming events, announced soon"
              description="Our next cohort bootcamps, demo days and pitch events will be listed here. Follow us on LinkedIn to be the first to know."
              align="center"
            />
            <Button to="/contact" variant="secondary">Get event updates</Button>
          </div>
        </div>
      </section>
    </>
  );
}
