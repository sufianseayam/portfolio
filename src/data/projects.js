// To add a screenshot: put the image in public/projects/ and set image: "/projects/ticketo.png".
// To add links: set github / live. Leave live as null to show "Live Demo — Coming Soon".
export const filters = ["All", "Full Stack", "Frontend", "Backend", "Academic"];

export const projects = [
  {
    name: "Ticketo",
    type: "Event & Ticket Management Platform",
    featured: true,
    categories: ["Full Stack", "Backend"],
    description: "A full-stack event management platform where users can discover events, while organizers can create and manage events and handle their event-related operations.",
    tech: ["Next.js", "JavaScript", "Express.js", "MongoDB", "Better Auth", "Tailwind CSS", "HeroUI", "ImgBB"],
    features: ["User authentication", "Attendee and organizer roles", "Role-based dashboards", "Event creation and management", "Event browsing and details", "Ticket purchasing workflow", "Image/banner upload", "REST API with MongoDB"],
    image: "/projects/ticketo.jpg",
    github: "https://github.com/sufianseayam/ticketo-client",
    live: "https://ticketo-client-azure.vercel.app",
  },
  {
    name: "HireLoop",
    type: "Job Recruitment Platform",
    featured: true,
    categories: ["Full Stack", "Backend"],
    description: "A full-stack recruitment platform connecting job seekers and recruiters with separate role-based dashboards and job management features.",
    tech: ["Next.js", "JavaScript", "Express.js", "MongoDB", "Better Auth", "Tailwind CSS", "HeroUI"],
    features: ["Job Seeker, Recruiter and Admin roles", "Role-based authorization", "Job posting and browsing", "Separate role dashboards", "Company management and approval", "Recruiter company profile", "Search and filtering", "REST API with MongoDB"],
    image: "/projects/hireloop.jpg",
    github: "https://github.com/sufianseayam/hireloop-client",
    live: "https://hireloop-client-mauve.vercel.app",
  },
  {
    name: "GitHub Issue Tracker",
    type: "Issue Tracking Interface",
    categories: ["Frontend"],
    description: "A responsive issue tracking interface for viewing, filtering and managing software issues.",
    tech: ["React", "JavaScript", "Tailwind CSS", "daisyUI"],
    features: ["Issue listing", "Search", "Open/closed filtering", "Status, priority and labels", "Issue statistics", "Issue details modal"],
    image: "/projects/github-issue-tracker.jpg",
    github: null, // TODO
    live: "https://github-issue-tracker-final.netlify.app",
  },
  {
    name: "Student Result Management System",
    type: "Academic Project",
    categories: ["Academic", "Backend"],
    description: "A CRUD-based academic result management system for managing student result information.",
    tech: ["Laravel", "MySQL"],
    features: ["Student management", "Result management", "CRUD operations", "MySQL database"],
    image: null,
    github: null, // TODO
    live: null,
  },

];
