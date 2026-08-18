import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';

const DIRECTORS = [
  { name: 'Shri. Dhanasekaran Mahalingam - Chairman', image: '/images/board/chairman-1.png' },
  { name: 'Shri. Rajarajan Dhanasekaran - Treasurer', image: '/images/board/treasurer-1.png' },
  { name: 'Dr. V.S.K. Venkatachalapathy - Director', image: '/images/board/director-1.png' },
];

export default function Board() {
  return (
    <>
      <Seo
        title="Board of Directors"
        description="The SMV VisionX Foundation board brings together elite academicians, visionary administrators and corporate strategists to guide the foundation's strategy and partnerships."
      />

      <PageHero
        eyebrow="Governance"
        title="Board of Directors"
        description="Backed by elite academicians, visionary administrators and corporate strategists who guide the foundation's strategy and partnerships."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Leadership" title="Meet the board" />
          <div className="grid-3 grid-3--loose">
            {DIRECTORS.map((d) => (
              <img key={d.name} src={d.image} alt={d.name} loading="lazy" className="board-card-img" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
