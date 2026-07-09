import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';

const MISSION_POINTS = [
  'To provide institutional support, world-class lab access and seed funding pathways to high-potential founders.',
  'To de-risk early-stage commercialization by aligning academia, corporate mentorship and venture capital.',
];

export default function Vision() {
  return (
    <>
      <Seo
        title="Vision & Mission"
        description="Our vision: to build a globally competitive startup ecosystem in Puducherry that nurtures cross-disciplinary innovation, technology transfer and sustainable socio-economic growth."
      />

      <PageHero
        eyebrow="Vision & Mission"
        title="Building a globally competitive startup ecosystem"
      />

      <section className="section">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="Vision"
              title="Innovation, technology transfer and sustainable growth"
              description="To build a globally competitive startup ecosystem in Puducherry that nurtures cross-disciplinary innovation, technology transfer and sustainable socio-economic growth."
            />
          </div>
          <div>
            <SectionHeading eyebrow="Mission" title="How we get there" />
            <ul className="checklist">
              {MISSION_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
