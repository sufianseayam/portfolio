import Section from "./Section";
import Reveal from "./Reveal";
import { roadmap } from "@/data/skills";

export default function BackendFocus() {
  return (
    <Section id="backend" eyebrow="04. Backend" title="Growing Beyond CRUD">
      <Reveal>
        <p className="mb-10 max-w-2xl text-slate-300">I can build working CRUD applications, and I’m now actively improving my backend knowledge beyond that. This is the path I’m following. I’m still learning each step and building depth as I go.</p>
      </Reveal>
      <ol className="relative ml-3 border-l border-line">
        {roadmap.map(([title, text], i) => (
          <li key={title} className="relative mb-6 ml-6 last:mb-0">
            <Reveal>
              <span className="absolute -left-[37px] top-4 flex h-6 w-6 items-center justify-center rounded-full bg-bg font-mono text-xs text-accent ring-1 ring-accent/60">{i + 1}</span>
              <div className="rounded-lg border border-line bg-panel/50 p-4 transition-colors hover:border-accent/50">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
                <p className="mt-2 text-xs text-accent2">{i < 6 ? "Developing deeper understanding" : "Currently learning"}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
