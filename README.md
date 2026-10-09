# Md. Abu Sufian | Developer Portfolio

Personal portfolio of **Md. Abu Sufian**, a Software Engineering student at Daffodil International University focused on full-stack JavaScript and backend development. Built to showcase my projects and learning journey for internship and junior developer applications.

**Live site:** _https://portfolio-abusufian.vercel.app/_

## About the Portfolio

A dark, minimal, responsive single-page site that puts projects first. It covers my tech stack, a "Growing Beyond CRUD" backend learning roadmap, an "Exploring AI" section (future learning only), education, and a contact form.

## Featured Projects

- **Ticketo**: event and ticket management platform with attendee and organizer roles (Next.js, Express.js, MongoDB, Better Auth)
- **HireLoop**: job recruitment platform with Job Seeker, Recruiter and Admin dashboards (Next.js, Express.js, MongoDB, Better Auth)

Also included: GitHub Issue Tracker (React), Student Result Management System (Laravel, MySQL) and Hospital Management System (Java, OOP, SQL).

## Features

- Project cards with screenshots, tech stack, features, and GitHub / live demo links
- Project filters: All, Full Stack, Frontend, Backend, Academic
- Sticky navbar with mobile menu that becomes more opaque on scroll
- Backend learning roadmap section
- Contact form (front-end only, ready to connect to an email service)
- Subtle scroll-reveal animations, with reduced-motion support
- Semantic HTML, keyboard-friendly, SEO and Open Graph metadata

## Tech Stack

Next.js (App Router), React, JavaScript, Tailwind CSS v4, Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build: `npm run build && npm start`.

## Project Structure

```
src/
  app/          layout.jsx, page.jsx, globals.css
  components/   Navbar, Hero, About, Skills, Projects, ProjectCard,
                BackendFocus, AISection, Education, Contact, Footer
  data/         site.js, projects.js, skills.js
public/
  projects/     project screenshots
```



## Deployment

Deployed on [Vercel](https://vercel.com).

## Contact

- GitHub: https://github.com/sufianseayam
- LinkedIn: https://www.linkedin.com/in/md-abu-sufian-45a25a390/