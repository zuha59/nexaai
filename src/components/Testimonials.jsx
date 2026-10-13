import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';

export default function Testimonials({ testimonials }) {
  const [idx, setIdx] = useState(0);
  const n = testimonials.length;

  useEffect(() => {
    if (n < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n, idx]);

  if (!n) return null;
  const go = (i) => setIdx(((i % n) + n) % n);

  return (
    <section id="reviews">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <div className="kicker">Wall of love</div>
            <h2>What Our Members Say</h2>
            <p>Hear from members about how hands-on AI training changed their careers and businesses.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="slider">
            <div className="slides">
              <div className="slide-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {testimonials.map((t) => (
                  <div className="t-card" key={t._id || t.name}>
                    <div className="stars">★★★★★</div>
                    <p className="quote">"{t.quote}"</p>
                    <div className="t-person">
                      <div className="avatar">{t.initials}</div>
                      <div><b>{t.name}</b><small>{t.role}</small></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slider-nav">
              <button className="s-arrow" aria-label="Previous" onClick={() => go(idx - 1)}>‹</button>
              <div className="dots">
                {testimonials.map((t, i) => (
                  <button
                    key={t._id || i}
                    className={`dot-nav ${i === idx ? 'active' : ''}`}
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => go(i)}
                  />
                ))}
              </div>
              <button className="s-arrow" aria-label="Next" onClick={() => go(idx + 1)}>›</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
