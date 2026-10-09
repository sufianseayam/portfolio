import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02. Skills" title="Tech Stack">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 60}>
            <div className="h-full rounded-xl border border-line bg-panel/60 p-5 transition-colors hover:border-accent/60">
              <h3 className="mb-3 font-semibold text-white">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="rounded-md bg-bg px-2.5 py-1 text-sm text-slate-300 ring-1 ring-line">{s}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
