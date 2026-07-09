import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import PillarGrid from '../components/PillarGrid';
import Button from '../components/Button';
import Seo from '../components/Seo';

const PILLARS = [
  {
    title: 'Our Vision',
    description:
      'To build a globally competitive startup ecosystem in Puducherry that nurtures cross-disciplinary innovation, technology transfer and sustainable socio-economic growth.',
  },
  {
    title: 'Our Mission',
    description:
      'To provide institutional support, world-class lab access and seed funding pathways to high-potential founders — de-risking early-stage commercialization by aligning academia, corporate mentorship and venture capital.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About the Foundation"
        description="Incorporated as a dedicated Section 8 Not-for-Profit entity, SMV VisionX Foundation is a vital node in India's startup infrastructure, offering corporate networks, infrastructure and technical expertise to early-stage startups."
      />

      <PageHero
        eyebrow="About Us"
        title="A vital node in India’s startup infrastructure"
        description="Incorporated as a dedicated Section 8 Not-for-Profit entity, SMV VisionX Foundation offers early-stage startups a comprehensive toolkit consisting of robust corporate networks, infrastructure and technical expertise."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Core Pillars" title="What we stand for" />
          <PillarGrid items={PILLARS} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="Leadership"
              title="Backed by academicians, administrators and strategists"
              description="Our board and executive team bring together academic leadership, visionary administration and corporate strategy to guide the foundation."
            />
            <Button to="/board" variant="secondary">Meet the Board</Button>
          </div>
          <div>
            <SectionHeading
              eyebrow="Ecosystem"
              title="Infrastructure, mentorship and funding under one roof"
              description="From state-of-the-art workspaces and advanced prototyping labs to a curated mentorship network and a seed funding pipeline — every resource a founder needs, on campus."
            />
            <Button to="/facilities" variant="secondary">Explore Infrastructure</Button>
          </div>
        </div>
      </section>
    </>
  );
}
