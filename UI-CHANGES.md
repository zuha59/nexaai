# NexaAI UI and frontend-only update

This version keeps the dark violet/cyan theme and removes the backend/database architecture.

## Changes

- Removed the `server/` folder, Express API, Mongoose models, MongoDB seed script, and environment example.
- Removed the frontend API helper and Vite API proxy.
- Moved programs, resources, and testimonial display data into `client/src/App.jsx`.
- Updated the application form to prepare an email enquiry instead of posting to an API or claiming that data was stored.
- Updated the README for frontend-only development and deployment.

## Run

```bash
cd client
npm install
npm run dev
```

The application form relies on the visitor having an email application configured. Form submissions are not saved by this static site.
