export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact">
      <div className="container">
        <div className="foot-grid">
          <div>
            <a href="#top" className="brand"><span className="brand-mark" aria-hidden="true">A</span>NEXAAI</a>
            <p>Learn how to use AI in real life. Explore practical programs, build useful projects, and turn ideas into action.</p>
            <div className="socials">
              <a href="https://www.aaghaz.ai/" aria-label="Aaghaz official website" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 9h-3a15.6 15.6 0 00-1.2-5 8.1 8.1 0 014.2 5zM12 4c.9 1.2 1.7 3.7 1.9 7h-3.8c.2-3.3 1-5.8 1.9-7zM9.3 6a15.6 15.6 0 00-1.2 5h-3a8.1 8.1 0 014.2-5zM5.1 13h3a15.6 15.6 0 001.2 5 8.1 8.1 0 01-4.2-5zm6.9 7c-.9-1.2-1.7-3.7-1.9-7h3.8c-.2 3.3-1 5.8-1.9 7zm2.7-2a15.6 15.6 0 001.2-5h3a8.1 8.1 0 01-4.2 5z" /></svg>
              </a>
              <a href="mailto:badar@aaghaz.ai" aria-label="Email Aaghaz"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm9 7L3 6.5V7l9 6 9-6v-.5z" /></svg></a>
            </div>
          </div>
          <div>
            <h4>Programs</h4>
            <ul>
              <li><a href="#programs">Founder Track</a></li>
              <li><a href="#programs">Web Dev Fast Track</a></li>
              <li><a href="#programs">AI Launchpad</a></li>
              <li><a href="#programs">High-Ticket Sales</a></li>
            </ul>
          </div>
          <div>
            <h4>Free resources</h4>
            <ul>
              <li><a href="#resources">Startup Playbook</a></li>
              <li><a href="#resources">AI Basics Course</a></li>
              <li><a href="#resources">Prompt Vault</a></li>
              <li><a href="#resources">AI Tools Map</a></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:badar@aaghaz.ai">badar@aaghaz.ai</a></li>
              <li><a href="https://www.aaghaz.ai/" target="_blank" rel="noreferrer">Official website ↗</a></li>
              <li><a href="#apply">Ask about a program</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {year} NexaAI. All rights reserved.</span>
          <span>Practical AI learning for real-world work.</span>
        </div>
      </div>
    </footer>
  );
}
