import { useState } from 'react';
import Reveal from './Reveal.jsx';

const CONTACT_EMAIL = 'badar@aaghaz.ai';

export default function ApplyForm({ programs }) {
  const [form, setForm] = useState({ name: '', email: '', program: '', message: '' });
  const [emailReady, setEmailReady] = useState(false);

  const set = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
    setEmailReady(false);
  };

  function submit(event) {
    event.preventDefault();
    const subject = `Program enquiry: ${form.program}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Program: ${form.program}`,
      '',
      'Goals / message:',
      form.message || '(Not provided)',
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailReady(true);
  }

  return (
    <section id="apply">
      <div className="container">
        <Reveal>
          <div className="cta-box">
            <h2>Ready to put AI into practice?</h2>
            <p>Tell us what you want to learn. Your email app will open with your enquiry ready to send.</p>

            {emailReady && (
              <div className="apply-success" role="status">
                <div className="check">✓</div>
                <h3>Your enquiry is ready</h3>
                <p>Send the prepared email from your email app to complete your enquiry. This website does not store submissions.</p>
              </div>
            )}

            <form className="apply-form" onSubmit={submit}>
              <div className="form-row">
                <input type="text" placeholder="Your name" aria-label="Your name" autoComplete="name" value={form.name} onChange={set('name')} required />
                <input type="email" placeholder="Email address" aria-label="Email address" autoComplete="email" value={form.email} onChange={set('email')} required />
              </div>
              <div className="form-row">
                <select value={form.program} onChange={set('program')} aria-label="Choose a program" required>
                  <option value="">Choose a program…</option>
                  {programs.map((program) => (
                    <option key={program.title} value={program.title}>{program.title}</option>
                  ))}
                </select>
              </div>
              <textarea placeholder="Tell us about your goal (optional)" aria-label="Tell us about your goal (optional)" rows="3" value={form.message} onChange={set('message')} />
              <button type="submit" className="btn">Prepare email enquiry →</button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
