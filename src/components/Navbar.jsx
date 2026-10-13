import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={scrolled ? 'scrolled' : ''} aria-label="Main navigation">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="NexaAI home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>NEXA<span aria-hidden="true">AI</span></span>
        </a>
        <div className={`nav-links ${open ? 'open' : ''}`} id="primary-navigation">
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#resources" onClick={closeMenu}>Free Resources</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#programs" className="btn" onClick={closeMenu}>Explore Programs <span aria-hidden="true">↗</span></a>
        </div>
        <button
          type="button"
          className="hamburger"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
