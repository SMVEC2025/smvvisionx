import { useState } from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Seo from '../components/Seo';
import { CONTACT, SITE } from '../data/site';
import './JoinUs.scss';

// Submissions are emailed to the VisionX inbox via FormSubmit (no backend required).
// First submission triggers a one-time email-confirmation from FormSubmit.
const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT.email}`;

export default function JoinAsIncubatee() {
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
        title="Apply for Incubation"
        description="Apply to join the SMV VisionX incubation ecosystem. Tell us about your idea and team — our panel reviews applications on a rolling basis."
      />

      <PageHero
        eyebrow="Join Us / Incubatee"
        title="Apply for incubation"
        description="Tell us about your idea and team. Our panel reviews applications on a rolling basis."
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Application" title="Startup application form" />

          {submitted ? (
            <div className="form-success">
              <h3>Application received</h3>
              <p>Thank you for applying. Our team will reach out within 5 business days.</p>
            </div>
          ) : (
            <form className="apply-form" onSubmit={handleSubmit}>
              {/* FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Incubatee Application — SMV VisionX" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${SITE.url}/join-us/incubatee`} />
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
                  Program of Interest
                  <select name="Program" defaultValue="Pre-Incubation">
                    <option value="Pre-Incubation">Pre-Incubation</option>
                    <option value="Physical Incubation">Physical Incubation</option>
                    <option value="Virtual Incubation">Virtual Incubation</option>
                    <option value="Acceleration Program">Acceleration Program</option>
                  </select>
                </label>
              </div>
              <label>
                Idea / Startup Summary
                <textarea name="Summary" rows={5} required placeholder="Describe your idea, problem and target users" />
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
