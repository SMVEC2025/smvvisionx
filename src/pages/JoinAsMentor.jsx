import { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { CONTACT, SITE } from '../data/site';
import './JoinUs.scss';

const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT.email}`;

export default function JoinAsMentor() {
  const [submitted, setSubmitted] = useState(false);
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
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Become a Mentor"
        description="Share your industry or academic expertise with SMV VisionX student and startup founders. Apply to join our mentor network."
      />

      <PageHero
        eyebrow="Join Us / Mentor"
        title="Become a mentor"
        description="Share your industry or academic expertise with our founders."
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Application" title="Mentor application form" />

          {submitted ? (
            <div className="form-success">
              <h3>Application received</h3>
              <p>Thank you for offering to mentor. Our team will reach out within 5 business days.</p>
            </div>
          ) : (
            <form className="apply-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Mentor Application — SMV VisionX" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${SITE.url}/join-us/mentor`} />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="apply-form__row">
                <label>
                  Full Name
                  <input type="text" name="Name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input type="email" name="Email" required placeholder="you@example.com" />
                </label>
              </div>
              <div className="apply-form__row">
                <label>
                  Phone
                  <input type="tel" name="Phone" required placeholder="+91" />
                </label>
                <label>
                  Area of Expertise
                  <select name="Expertise" defaultValue="Product Strategy">
                    <option value="Product Strategy">Product Strategy</option>
                    <option value="Fundraising & Finance">Fundraising &amp; Finance</option>
                    <option value="Technology & AI">Technology &amp; AI</option>
                    <option value="Marketing & Growth">Marketing &amp; Growth</option>
                    <option value="Legal & Compliance">Legal &amp; Compliance</option>
                    <option value="Design & UX">Design &amp; UX</option>
                  </select>
                </label>
              </div>
              <label>
                Why do you want to mentor with us?
                <textarea name="Message" rows={5} required placeholder="Tell us about your background and how you'd like to help" />
              </label>

              {error && (
                <p className="form-error" role="alert">
                  Something went wrong. Please email us directly at{' '}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                </p>
              )}

              <Button type="submit" variant="primary" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit Application'}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
