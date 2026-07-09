import { Link } from 'react-router-dom';
import './Logo.scss';

// Both variants are rendered; the visible one is chosen by CSS depending on
// context (transparent navbar shows the light logo, solid surfaces the dark).
export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src="/images/logo/light_logo.png" alt="SMV VisionX Foundation" className="logo__img logo__img--on-light" />
      <img src="/images/logo/dark_logo.png" alt="" aria-hidden="true" className="logo__img logo__img--on-dark" />
    </Link>
  );
}
