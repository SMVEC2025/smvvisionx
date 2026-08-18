import { useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { CONTACT } from '../data/site';
import './JoinUs.scss';
import './Contact.scss';

const GOOGLE_FORM_ENDPOINT =
  'https://docs.google.com/forms/d/e/1FAIpQLSfArZYORQQrEATndoPWu4DDAV69oatW6sMBynY-v61XpoShvQ/formResponse';

const GOOGLE_FORM_FIELDS = {
  name: 'entry.1016943331',
  email: 'entry.607863602',
  message: 'entry.1175064105',
};

const GOOGLE_FORM_FRAME = 'contact-google-form-submit';
const GOOGLE_FORM_FBZ = '-6266156251992963385';

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [submittedToGoogle, setSubmittedToGoogle] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setError(false);
    setSubmittedToGoogle(true);
  };

  const handleGoogleFrameLoad = () => {
    if (!submittedToGoogle) return;
    formRef.current?.reset();
    setSent(true);
    setSubmitting(false);
  };

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with SMV VisionX Foundation about incubation, mentorship or partnerships. Located at Sri Manakula Vinayagar Engineering College, Puducherry."
      />

      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Questions about incubation, mentorship, partnerships or the ecosystem brochure? We'd love to hear from you."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="contact-info__item">
              <span className="contact-info__label">Email</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">Phone</span>
              <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">Registered Office</span>
              <p>
                {CONTACT.address.line1},<br />
                {CONTACT.address.line2} - {CONTACT.address.postalCode}
              </p>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__label">LinkedIn</span>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                SMV VisionX Foundation
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            <iframe
              title="Contact form submission"
              name={GOOGLE_FORM_FRAME}
              onLoad={handleGoogleFrameLoad}
              style={{ display: 'none' }}
            />
            {sent ? (
              <div className="form-success">
                <h3>Message sent</h3>
                <p>Thanks for reaching out - we'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                ref={formRef}
                className="apply-form"
                action={GOOGLE_FORM_ENDPOINT}
                method="POST"
                target={GOOGLE_FORM_FRAME}
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="fvv" value="1" />
                <input type="hidden" name="partialResponse" value={`[null,null,"${GOOGLE_FORM_FBZ}"]`} />
                <input type="hidden" name="pageHistory" value="0" />
                <input type="hidden" name="fbzx" value={GOOGLE_FORM_FBZ} />
                <div className="apply-form__row">
                  <label>
                    Name
                    <input type="text" name={GOOGLE_FORM_FIELDS.name} required placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" name={GOOGLE_FORM_FIELDS.email} required placeholder="you@example.com" />
                  </label>
                </div>
                <label>
                  Message
                  <textarea name={GOOGLE_FORM_FIELDS.message} rows={5} required placeholder="How can we help?" />
                </label>

                {error && (
                  <p className="form-error" role="alert">
                    Something went wrong. Please email us directly at{' '}
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                  </p>
                )}

                <Button type="submit" variant="primary" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
