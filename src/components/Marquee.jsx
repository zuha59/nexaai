const items = [
  'Founder Track',
  'Web Dev Fast Track',
  'AI Launchpad',
  'High-Ticket Sales',
  'Copy to Cash',
  'Ecom Winners',
  'Deal Closer',
];

export default function Marquee() {
  const doubled = [...items, ...items]; // seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
