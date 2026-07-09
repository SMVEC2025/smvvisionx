import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Board from './pages/Board';
import Team from './pages/Team';
import Programs from './pages/Programs';
import PreIncubation from './pages/PreIncubation';
import Incubation from './pages/Incubation';
import Events from './pages/Events';
import Facilities from './pages/Facilities';
import Sectors from './pages/Sectors';
import Mentors from './pages/Mentors';
import Gallery from './pages/Gallery';
import PreIncubationStartups from './pages/PreIncubationStartups';
import IncubationStartups from './pages/IncubationStartups';
import JoinUs from './pages/JoinUs';
import JoinAsIncubatee from './pages/JoinAsIncubatee';
import JoinAsMentor from './pages/JoinAsMentor';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/board" element={<Board />} />
          <Route path="/team" element={<Team />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/pre-incubation" element={<PreIncubation />} />
          <Route path="/programs/incubation" element={<Incubation />} />
          <Route path="/programs/events" element={<Events />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/startups/pre-incubation" element={<PreIncubationStartups />} />
          <Route path="/startups/incubation" element={<IncubationStartups />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/join-us/incubatee" element={<JoinAsIncubatee />} />
          <Route path="/join-us/mentor" element={<JoinAsMentor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
