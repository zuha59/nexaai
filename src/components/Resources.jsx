import Reveal from './Reveal.jsx';

const icons = {
  book: <path d="M4 19.5A2.5 2.5 0 016.5 17H20V4H6.5A2.5 2.5 0 004 6.5v13zM4 19.5A2.5 2.5 0 006.5 22H20v-5" />,
  video: <><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M10 9.5l5 2.5-5 2.5z" /></>,
  grid: <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />,
  star: <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.4-6.3-4.6-6.3 4.6L8 13.6 2 9.2h7.6z" />,
};

export default function Resources({ resources }) {
  return (
    <section id="resources">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <div className="kicker">Start free</div>
            <h2>Free Resources</h2>
            <p>Videos, ebooks, guides, templates and tool directories — everything you need to start building today, free.</p>
          </div>
        </Reveal>
        <div className="res-grid">
          {resources.map((r, i) => (
            <Reveal key={r._id || r.title} delay={(i % 4) * 80}>
              <div className="res-card">
                <div className="res-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                    {icons[r.icon] || icons.book}
                  </svg>
                </div>
                <div className="res-tag">{r.tag}</div>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                <a className="link" href="#apply">{r.linkText}</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
