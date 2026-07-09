import PageHero from '../components/PageHero';
import PersonCard from '../components/PersonCard';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';

const TEAM = [
  { name: 'Dr. Elam Cheren S', role: 'Incubation Manager / Operations Lead', initials: 'EC' },
  { name: 'Mr. Kumaran S', role: 'Incubation Assistant Manager', initials: 'KS' },
];

export default function Team() {
  return (
    <>
      <Seo
        title="Team"
        description="The executive team running programs, operations and mentoring at SMV VisionX Foundation — led by Incubation Manager Dr. Elam Cheren S."
      />

      <PageHero
        eyebrow="Our People"
        title="The team behind the ecosystem"
        description="The executive team running programs, operations and day-to-day mentoring at the foundation."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Operations" title="Who you’ll work with" />
          <div className="grid-3">
            {TEAM.map((t) => (
              <PersonCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
