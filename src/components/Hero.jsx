import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { site } from "@/data/site";

const btn = "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-16 pt-32 pb-20 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.14),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to Internship Opportunities
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Software Engineering Student Building <span className="text-accent">Full-Stack Applications</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300">Focused on backend development, REST APIs, databases, authentication, and modern JavaScript applications.</p>
          <p className="mt-3 max-w-xl text-muted">I’m a Software Engineering student passionate about building practical software, strengthening my backend skills, and solving real-world problems through technology.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-accent text-white hover:bg-blue-500`}>View Projects <ArrowRight size={16} /></a>
            <a href={site.github} target="_blank" rel="noreferrer" className={`${btn} border border-line text-slate-200 hover:border-accent`}><Github size={16} /> GitHub</a>
            <a href="#contact" className={`${btn} border border-line text-slate-200 hover:border-accent`}><Mail size={16} /> Contact Me</a>
            <a href={site.resume} download className={`${btn} border border-line text-slate-200 hover:border-accent2`}><Download size={16} /> Download Resume</a>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-panel/70 shadow-xl backdrop-blur">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-300">
{"const developer = {\n  focus: "}<span className="text-accent2">"Backend"</span>{",\n  stack: ["}<span className="text-accent2">"JavaScript"</span>{", "}<span className="text-accent2">"Node.js"</span>{",\n          "}<span className="text-accent2">"Express"</span>{", "}<span className="text-accent2">"MongoDB"</span>{"],\n  goal: "}<span className="text-accent2">"Build better software"</span>{"\n};"}
          </pre>
        </div>
      </div>
    </section>
  );
}
