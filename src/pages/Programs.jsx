import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import './Programs.scss';

const MATRIX = [
  {
    tier: 'Pre-Incubation',
    stage: 'Ideation & Proof of Concept (PoC)',
    duration: '12 Months',
    offerings: 'Ideation bootcamps, IP assessment, MVP architecture support and academic mentor mapping.',
  },
  {
    tier: 'Physical Incubation',
    stage: 'MVP Ready & Early Traction',
    duration: '15-24 Months',
    offerings: 'Dedicated plug-and-play workspace, high-speed internet, core lab access, legal compliance support and seed grant eligibility.',
  },
  {
    tier: 'Acceleration Program',
    stage: 'Growth & Go-To-Market (GTM)',
    duration: '4 Weeks',
    offerings: 'Intensive fundraising prep, enterprise market access, corporate partner pilots and scaling compliance advisory.',
  },
];

export default function Programs() {
  return (
    <>
      <Seo
        title="The Incubation Matrix"
        description="A structured tier framework covering Pre-Incubation, Physical Incubation and Acceleration, taking founders from proof of concept to go-to-market."
      />

      <PageHero
        eyebrow="Programs"
        title="The Incubation Matrix"
        description="This structured tier framework outlines our primary offerings, meeting founders at every stage from proof of concept to go-to-market acceleration."
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Offerings" title="Choose your stage" />

          <div className="matrix-table-wrap">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Program Tier</th>
                  <th>Target Stage</th>
                  <th>Ideal Duration</th>
                  <th>Core Offerings &amp; Support</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((row) => (
                  <tr key={row.tier}>
                    <td data-label="Program Tier"><strong>{row.tier}</strong></td>
                    <td data-label="Target Stage">{row.stage}</td>
                    <td data-label="Ideal Duration">{row.duration}</td>
                    <td data-label="Core Offerings & Support">{row.offerings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section__cta">
            <Link to="/programs/pre-incubation" className="link-arrow">Start with Pre-Incubation -&gt;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
