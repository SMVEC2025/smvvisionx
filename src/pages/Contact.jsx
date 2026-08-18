import { useState } from 'react';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { CONTACT, SITE } from '../data/site';
import './JoinUs.scss';
import './Contact.scss';

const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT.email}`;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (!res.ok) throw new Error('Request failed');
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
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
            {sent ? (
              <div className="form-success">
                <h3>Message sent</h3>
                <p>Thanks for reaching out - we'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="apply-form" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Contact Enquiry - SMV VisionX" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${SITE.url}/contact`} />
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className="apply-form__row">
                  <label>
                    Name
                    <input type="text" name="Name" required placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" name="Email" required placeholder="you@example.com" />
                  </label>
                </div>
                <label>
                  Message
                  <textarea name="Message" rows={5} required placeholder="How can we help?" />
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
