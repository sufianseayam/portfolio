import Section from "./Section";
import Reveal from "./Reveal";

const areas = ["LLM APIs", "AI-powered web applications", "AI assistants", "AI-based recommendations", "AI features inside backend systems"];

export default function AISection() {
  return (
    <Section id="ai" eyebrow="05. Looking Ahead" title="Exploring AI">
      <Reveal>
        <div className="rounded-xl border border-dashed border-line p-6">
          <p className="max-w-2xl text-slate-300">I’m interested in exploring how AI can be integrated into modern web applications. My goal is to eventually combine my full-stack and backend development skills with AI-powered features.</p>
          <p className="mt-4 text-sm text-muted">Future learning areas:</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {areas.map((a) => <li key={a} className="rounded-md border border-line px-3 py-1 text-sm text-slate-400">{a}</li>)}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
