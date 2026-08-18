import { Link } from 'react-router-dom';
import Logo from './Logo';
import { CONTACT } from '../data/site';
import './Footer.scss';

const EXPLORE_LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/vision', label: 'Vision & Mission' },
  { to: '/board', label: 'Board of Directors' },
  { to: '/team', label: 'Team' },
  { to: '/facilities', label: 'Infrastructure' },
];

const COMMUNITY_LINKS = [
  { to: '/programs', label: 'Programs' },
  { to: '/sectors', label: 'Focus Areas' },
  { to: '/mentors', label: 'Mentors' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/join-us', label: 'Join Us' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">
            A premier technology and business incubation ecosystem at Sri Manakula
            Vinayagar Engineering College, empowering regional pioneers to solve
            global challenges.
          </p>
          <a
            className="footer__social"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SMV VisionX Foundation on LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            {EXPLORE_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Ecosystem</h4>
          <ul>
            {COMMUNITY_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            </li>
            <li>
              {CONTACT.address.line1},<br />
              {CONTACT.address.line2} - {CONTACT.address.postalCode}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {year} SMV VisionX Foundation. A Section 8 Not-for-Profit entity.</p>
        <p>Incubation Centre &middot; Sri Manakula Vinayagar Engineering College</p>
      </div>
    </footer>
  );
}
