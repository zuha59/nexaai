import Reveal from './Reveal.jsx';

const icons = {
  code: { stroke: '#8b5cf6', path: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3M7 9l2 2-2 2M12 13h5" /></> },
  pen: { stroke: '#22d3ee', path: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /> },
  cart: { stroke: '#8b5cf6', path: <path d="M6 7h15l-1.5 9h-12zM6 7l-2-4H1M9 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /> },
  target: { stroke: '#22d3ee', path: <path d="M8 12h8M12 8v8M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
};

function Thumb({ program }) {
  if (program.image) {
    return (
      <div className="thumb">
        <img src={program.image} alt={program.title} loading="lazy" />
      </div>
    );
  }
  const icon = icons[program.icon] || icons.code;
  return (
    <div className="thumb art">
      <svg viewBox="0 0 24 24" fill="none" stroke={icon.stroke} strokeWidth="1.6">
        {icon.path}
      </svg>
    </div>
  );
}

function Pills({ program }) {
  return (
    <div className="pill-row">
      <span className={`pill ${program.badge === 'live' ? 'live' : 'soon'}`}>
        {program.badge === 'live' ? 'Live' : 'Upcoming'}
      </span>
      <span className="pill meta">{program.meta}</span>
    </div>
  );
}

export default function Programs({ programs }) {
  const featured = programs.find((p) => p.featured);
  const rest = programs.filter((p) => !p.featured);

  return (
    <section id="programs">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <div className="kicker">Career tracks</div>
            <h2>Our Programs</h2>
            <p>Project-based programs designed with founders and hiring managers — every week ends with something shipped.</p>
          </div>
        </Reveal>

        {featured && (
          <Reveal>
            <div className="featured">
              {featured.image && <img src={featured.image} alt={featured.title} loading="lazy" />}
              <div className="featured-body">
                <Pills program={featured} />
                <h3>{featured.title}</h3>
                <p>{featured.description}</p>
                {featured.instructorName && (
                  <div className="instructor">
                    <div className="avatar">
                      {featured.instructorName.split(' ').map((w) => w[0]).join('')}
                    </div>
                    <div>
                      <b>{featured.instructorName}</b>
                      <small>{featured.instructorRole}</small>
                    </div>
                  </div>
                )}
                <a href="#apply" className="btn">Join the Waitlist →</a>
              </div>
            </div>
          </Reveal>
        )}

        <div className="prog-grid">
          {rest.map((p, i) => (
            <Reveal key={p._id || p.title} delay={(i % 3) * 90}>
              <div className="prog-card">
                <Thumb program={p} />
                <div className="body">
                  <Pills program={p} />
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="card-foot">
                    <span className="link">View syllabus →</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
