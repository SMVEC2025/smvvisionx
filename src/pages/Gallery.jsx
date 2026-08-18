import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import './Gallery.scss';

const GALLERY_BASE = '/images/gallery';

const GALLERY_IMAGES = [
  'dsc00735.webp',
  'dsc00736.webp',
  'dsc00738.webp',
  'dsc00739.webp',
  'dsc00742.webp',
  'dsc00743.webp',
  'dsc00749.webp',
  'dsc00750.webp',
  'dsc00751.webp',
  'dsc00752.webp',
  'dsc00753.webp',
  'dsc00754.webp',
  'dsc00756.webp',
  'dsc00758.webp',
  'dsc00762.webp',
  'dsc00764.webp',
  'dsc00765.webp',
  'dsc00767.webp',
  'dsc00768.webp',
  'dsc00770.webp',
  'dsc00771.webp',
  'dsc00772.webp',
  'dsc00773.webp',
  'dsc00774.webp',
  'dsc00776.webp',
  'dsc00777.webp',
  'dsc00778.webp',
  'dsc00779.webp',
  'dsc00781.webp',
  'dsc00784.webp',
  'dsc00785.webp',
  'dsc00786.webp',
  'dsc00787.webp',
  'dsc00788.webp',
  'dsc00791.webp',
  'dsc00792.webp',
  'dsc00793.webp',
  'dsc00794.webp',
  'dsc00796.webp',
  'dsc00797.webp',
  'dsc00799.webp',
  'dsc00800.webp',
  'dsc00801.webp',
  'dsc00802.webp',
  'dsc00803.webp',
  'dsc00804.webp',
  'dsc00805.webp',
  'dsc00806.webp',
  'dsc00807.webp',
  'dsc00809.webp',
  'dsc00810.webp',
  'dsc00811.webp',
  'dsc00812.webp',
  'dsc00813.webp',
  'dsc00814.webp',
  'dsc00815.webp',
  'dsc00816.webp',
  'dsc00817.webp',
  'dsc00820.webp',
  'dsc00821.webp',
  'dsc00823.webp',
  'dsc00824.webp',
  'dsc00825.webp',
  'dsc00827.webp',
  'dsc00828.webp',
  'dsc00831.webp',
  'dsc00832.webp',
  'dsc00834.webp',
  'dsc00835.webp',
];

const FEATURED_IMAGES = GALLERY_IMAGES.slice(0, 12);
const ARCHIVE_IMAGES = GALLERY_IMAGES.slice(12);

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery"
        description="A look at demo days, workshops, mentoring sessions and campus events at SMV VisionX Foundation."
      />

      <PageHero
        eyebrow="Moments"
        title="Gallery"
        description="A look at our demo days, workshops, mentoring sessions and campus events."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Highlights"
            title="Be a Listener to Your Instinct"
            description="A curated set of moments from the VisionX event gallery."
          />
          <div className="gallery-grid">
            {FEATURED_IMAGES.map((image, index) => (
              <a
                className="gallery-grid__tile"
                href={`${GALLERY_BASE}/${image}`}
                target="_blank"
                rel="noopener noreferrer"
                key={image}
              >
                <img
                  src={`${GALLERY_BASE}/${image}`}
                  alt={`VisionX event highlight ${index + 1}`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Event Archive"
            title="More moments from the program"
            description="Additional photos from the same event, kept available for visitors who want the complete visual record."
          />
          <div className="gallery-grid gallery-grid--compact">
            {ARCHIVE_IMAGES.map((image, index) => (
              <a
                className="gallery-grid__tile"
                href={`${GALLERY_BASE}/${image}`}
                target="_blank"
                rel="noopener noreferrer"
                key={image}
              >
                <img
                  src={`${GALLERY_BASE}/${image}`}
                  alt={`VisionX event archive ${index + 1}`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
