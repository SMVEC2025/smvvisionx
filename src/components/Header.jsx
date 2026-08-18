import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import Button from './Button';
import './Header.scss';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  {
    label: 'About Us',
    children: [
      { to: '/about', label: 'About the Foundation' },
      { to: '/board', label: 'Board of Directors' },
      { to: '/team', label: 'Team' },
      { to: '/facilities', label: 'Infrastructure' },
      { to: '/sectors', label: 'Focus Areas' },
      { to: '/mentors', label: 'Mentors' },
    ],
  },
  {
    label: 'Programs',
    children: [
      { to: '/programs', label: 'Overview' },
      { to: '/programs/pre-incubation', label: 'Pre-Incubation' },
      { to: '/programs/incubation', label: 'Incubation & Acceleration' },
      { to: '/programs/events', label: 'Events' },
    ],
  },
  {
    label: 'Startups',
    children: [
      { to: '/startups/pre-incubation', label: 'Pre-Incubation Startups' },
      { to: '/startups/incubation', label: 'Incubation Startups' },
    ],
  },
  { to: '/gallery', label: 'Gallery' },
];

const JOIN_US_LINKS = [
  { to: '/join-us/incubatee', label: 'Apply as Incubatee' },
  { to: '/join-us/mentor', label: 'Apply as Mentor' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  const toggleMenu = (label) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  // Version 1 (transparent, white text) overlays the home hero at the top;
  // version 2 (solid white, dark text) everywhere else, on scroll, or with
  // the mobile menu open - light page backgrounds need dark text.
  const transparent = location.pathname === '/' && !scrolled && !open;

  return (
    <header
      className={`header ${transparent ? 'header--transparent' : 'header--solid'} ${scrolled ? 'header--scrolled' : ''}`}
    >
      <div className="header__inner">
        <Logo />

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li
                  className={`nav__item nav__item--dropdown ${activeMenu === link.label ? 'nav__item--active' : ''}`}
                  key={link.label}
                  onMouseEnter={() => setActiveMenu(link.label)}
                  onMouseLeave={() => setActiveMenu((c) => (c === link.label ? null : c))}
                >
                  <button
                    type="button"
                    className="nav__link nav__link--trigger"
                    onClick={() => toggleMenu(link.label)}
                    aria-expanded={activeMenu === link.label}
                  >
                    {link.label}
                    <span className="nav__caret" aria-hidden="true"><FontAwesomeIcon icon={faChevronDown} /></span>
                  </button>
                  <ul className="nav__submenu">
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) => `nav__submenu-link ${isActive ? 'nav__submenu-link--active' : ''}`}
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
                    onClick={() => setOpen(false)}
                    end={link.to === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}

            <li
              className={`nav__item nav__item--dropdown ${activeMenu === 'Join Us' ? 'nav__item--active' : ''}`}
              onMouseEnter={() => setActiveMenu('Join Us')}
              onMouseLeave={() => setActiveMenu((c) => (c === 'Join Us' ? null : c))}
            >
              <button
                type="button"
                className="nav__link nav__link--trigger"
                onClick={() => toggleMenu('Join Us')}
                aria-expanded={activeMenu === 'Join Us'}
              >
                Join Us
                <span className="nav__caret" aria-hidden="true"><FontAwesomeIcon icon={faChevronDown} /></span>
              </button>
              <ul className="nav__submenu">
                {JOIN_US_LINKS.map((child) => (
                  <li key={child.to}>
                    <NavLink
                      to={child.to}
                      className={({ isActive }) => `nav__submenu-link ${isActive ? 'nav__submenu-link--active' : ''}`}
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="nav__cta">
            <Button to="/contact" variant="primary">Contact Us</Button>
          </div>
        </nav>

        <button
          className={`header__toggle ${open ? 'header__toggle--open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
