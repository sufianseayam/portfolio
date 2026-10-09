"use client";
import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projects, filters } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <Section id="projects" eyebrow="03. Projects" title="Things I’ve Built">
      <Reveal>
        <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} aria-pressed={active === f}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${active === f ? "border-accent bg-accent text-white" : "border-line text-muted hover:text-white"}`}>
              {f}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-2">
        {shown.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
    </Section>
  );
}
