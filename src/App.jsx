import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Programs from './components/Programs.jsx';
import Resources from './components/Resources.jsx';
import Testimonials from './components/Testimonials.jsx';
import ApplyForm from './components/ApplyForm.jsx';
import Footer from './components/Footer.jsx';

// Static website content: no backend or database is required.
const programs = [
  {
    title: 'Founder Track: Zero to Launch',
    description: 'Validate an idea, build an AI-powered MVP, acquire your first paying users and prepare to pitch — with practical guidance along the way.',
    image: '/assets/program-founder.webp',
    badge: 'upcoming',
    meta: 'Intermediate · 12 weeks',
    featured: true,
    instructorName: 'Danish Raza',
    instructorRole: 'Founder & Lead Mentor',
  },
  {
    title: 'Web Dev Fast Track',
    description: 'Build full-stack websites with modern tools and AI-assisted coding workflows.',
    image: '/assets/program-webdev.webp',
    badge: 'live',
    meta: 'Beginner · 8 weeks',
  },
  {
    title: 'AI Launchpad',
    description: 'Explore prompting, AI automation and no-code AI products with practical beginner-friendly projects.',
    icon: 'code',
    badge: 'live',
    meta: 'Beginner · 6 weeks',
  },
  {
    title: 'High-Ticket Sales',
    description: 'Learn outreach, discovery calls and sales frameworks for remote teams.',
    image: '/assets/program-sales.webp',
    badge: 'upcoming',
    meta: 'Intermediate · 8 weeks',
  },
  {
    title: 'Copy to Cash',
    description: 'Practice writing landing pages, ads and email sequences with AI as a drafting partner.',
    icon: 'pen',
    badge: 'live',
    meta: 'Beginner · 4 weeks',
  },
  {
    title: 'Ecom Winners',
    description: 'Learn the fundamentals of product research, online advertising and store operations.',
    icon: 'cart',
    badge: 'upcoming',
    meta: 'Intermediate · 10 weeks',
  },
  {
    title: 'Deal Closer',
    description: 'Develop negotiation, proposal and partnership skills for freelancers and agency owners.',
    icon: 'target',
    badge: 'upcoming',
    meta: 'Advanced · 6 weeks',
  },
];

const testimonials = [
  { name: 'Ahmed Raza', role: 'Creative Director', initials: 'AR', quote: 'I went from watching AI videos to shipping my first AI product. Practical mentorship helped me turn ideas into something real.' },
  { name: 'Sana Khalid', role: 'Entrepreneur', initials: 'SK', quote: 'Practical and focused, with a clear path from idea to launch.' },
  { name: 'Fahad Naveed', role: 'Freelancer', initials: 'FN', quote: 'The program broke AI into manageable weekly projects and helped me build a portfolio.' },
  { name: 'Maria Imran', role: 'Business Developer', initials: 'MI', quote: 'The practical workflows gave me new ideas for improving client outreach.' },
  { name: 'Hamza Butt', role: 'Content Creator', initials: 'HB', quote: 'The focus on building and applying skills made the learning feel relevant.' },
  { name: 'Kiran Malik', role: 'Startup Founder', initials: 'KM', quote: 'Being around founders, builders and mentors made the experience encouraging.' },
];

const resources = [
  { tag: 'Ebook', title: 'The Startup Playbook', icon: 'book', description: 'A practical guide to idea validation, MVP planning and finding early users.', linkText: 'Ask for access →' },
  { tag: 'Video course', title: 'AI Basics Crash Course', icon: 'video', description: 'An accessible introduction to practical AI fundamentals.', linkText: 'Explore resources →' },
  { tag: 'Templates', title: 'The Prompt Vault', icon: 'grid', description: 'Prompt ideas for coding, marketing, sales and content workflows.', linkText: 'Explore resources →' },
  { tag: 'Directory', title: 'Free AI Tools Map', icon: 'star', description: 'A curated starting point for exploring useful AI tools.', linkText: 'Explore resources →' },
];

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Programs programs={programs} />
      <Resources resources={resources} />
      <Testimonials testimonials={testimonials} />
      <ApplyForm programs={programs} />
      <Footer />
    </>
  );
}
