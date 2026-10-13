import Reveal from './Reveal.jsx';

const highlights = [
  { value: 'Learn by doing', label: 'Practical AI skills' },
  { value: 'Build real', label: 'Projects, not just notes' },
  { value: 'Get guidance', label: 'Mentor-led learning' },
  { value: 'Think bigger', label: 'Ideas into action' },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <Reveal>
          <span className="badge"><span className="dot"></span> Practical AI · Real-world skills</span>
        </Reveal>
        <Reveal delay={70}>
          <h1>Learn AI for real life.<br /><span className="hl">Build what comes next.</span></h1>
        </Reveal>
        <Reveal delay={130}>
          <p className="sub">
            Turn curiosity into capability with practical AI learning, hands-on projects, and a clear path from your first idea to something useful in the real world.
          </p>
        </Reveal>
        <Reveal delay={190}>
          <div className="hero-cta">
            <a href="#programs" className="btn">Explore Programs <span aria-hidden="true">→</span></a>
            <a href="#resources" className="btn ghost">Start with Free Resources</a>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="hero-stats" aria-label="How NexaAI helps learners">
            {highlights.map((item) => (
              <div className="stat" key={item.value}>
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}
