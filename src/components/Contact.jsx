"use client";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "@/data/site";

const field = "w-full rounded-lg border border-line bg-bg px-3 py-2 text-sm text-white placeholder:text-muted";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: connect an email service or your backend here (e.g. POST the form data to your Express API,
    // or use a service like Resend / EmailJS). Right now this only shows a confirmation message.
    setSent(true);
    e.target.reset();
  }

  return (
    <Section id="contact" eyebrow="08. Contact" title="Get In Touch">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="mb-6 text-slate-300">I’m open to internships and junior Full-Stack  opportunities. Feel free to reach out.</p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-center gap-3"><Mail size={18} className="text-accent" />
              {site.email ? <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a> : <span className="text-muted">Add your email in src/data/site.js</span>}
            </li>
            <li className="flex items-center gap-3"><Github size={18} className="text-accent" /><a href={site.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
            <li className="flex items-center gap-3"><Linkedin size={18} className="text-accent" /><a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </Reveal>
      
      </div>
    </Section>
  );
}
