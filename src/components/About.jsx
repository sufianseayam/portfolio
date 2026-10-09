import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "@/data/site";

const focus = ["Full-stack JavaScript development", "Backend development", "REST APIs", "Database design", "Authentication", "Authorization", "Application architecture", "Problem solving"];

export default function About() {
  return (
    <Section id="about" eyebrow="01. About" title="About Me">
      <div className="grid gap-10 md:grid-cols-[auto_1fr]">
        <Reveal>
          {/* TODO: set site.photo in src/data/site.js to show your photo */}
          {site.photo ? (
            <img src={site.photo} alt="Portrait of Md. Abu Sufian" className="h-44 w-44 rounded-2xl border border-line object-cover" />
          ) : (
            <div role="img" aria-label="Profile photo placeholder" className="flex h-44 w-44 items-center justify-center rounded-2xl border border-line bg-panel font-mono text-4xl text-accent">AS</div>
          )}
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-4 text-slate-300">
            <p>I’m a Software Engineering student at Daffodil International University who enjoys building practical web applications and figuring out how they work under the hood.</p>
            <p>I started with frontend and full-stack development, and over time I’ve found myself more drawn to the backend: how data is modeled, how users are authenticated, and how an API should behave when things go wrong. That’s where I’m putting most of my effort now.</p>
            <p>I’m looking for internships and junior Full-Stack or Backend roles where I can keep learning and contribute to real projects.</p>
            <h3 className="pt-2 text-sm font-semibold uppercase tracking-wider text-muted">Current focus</h3>
            <ul className="flex flex-wrap gap-2">
              {focus.map((f) => <li key={f} className="rounded-md border border-line bg-panel px-3 py-1 text-sm">{f}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
