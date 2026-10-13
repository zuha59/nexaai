# NexaAI — Frontend-only Website

A single-page website built with React and Vite. It keeps the dark violet/cyan theme and stores the programs, resources, and testimonial display content directly in the frontend source code.

## Requirements

- Node.js 18 or newer

## Run locally

Open a terminal in the `client/` folder and run:

```bash
npm install
npm run dev
```

Vite prints the local URL, usually `http://localhost:5173`.

## Build for deployment

```bash
cd client
npm install
npm run build
```

The production-ready site is generated in `client/dist/`. You can deploy that folder to a static hosting service such as Netlify, Vercel, or GitHub Pages.

## Branding and contact details

The visible website branding and project/package name are NexaAI. The enquiry form and footer still use the original Aaghaz contact email and website links; replace these in `client/src/components/ApplyForm.jsx` and `client/src/components/Footer.jsx` if NexaAI has its own contact details.

## How the site works without a backend

- Programs, resources, and testimonial cards are static arrays in `client/src/App.jsx`.
- Edit those arrays to update the content.
- The application form opens the visitor's default email app with a prepared message. It does **not** save form submissions to a database. If you later want submissions stored automatically, you will need a backend or a form service.
- No Express server, MongoDB connection, database models, seed scripts, or API routes are required.

## Main files

- `client/src/App.jsx` — page sections and static content
- `client/src/App.css` — visual theme and responsive styles
- `client/src/components/` — navbar, hero, programs, resources, testimonials, form and footer
- `client/public/assets/` — local website images
