import { ExternalLink, Github } from "lucide-react";

const linkCls = "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm";

export default function ProjectCard({ p }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60">
      {p.image ? (
        <img src={p.image} alt={`Screenshot of ${p.name}`} className="aspect-video w-full object-cover object-top" />
      ) : (
        <div role="img" aria-label={`${p.name} screenshot placeholder`} className="flex aspect-video items-center justify-center bg-gradient-to-br from-bg to-panel font-mono text-xs text-muted">
          Screenshot placeholder
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{p.name}</h3>
            <p className="text-sm text-muted">{p.type}</p>
          </div>
          {p.featured && <span className="shrink-0 rounded-full bg-accent2/15 px-2.5 py-0.5 text-xs text-accent2">Featured</span>}
        </div>
        <p className="mt-3 text-sm text-slate-300">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => <li key={t} className="rounded bg-accent/10 px-2 py-0.5 text-xs text-blue-300">{t}</li>)}
        </ul>
        <ul className="mt-4 grid list-disc gap-1 pl-4 text-sm text-slate-400 sm:grid-cols-2">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {p.github ? (
            <a href={p.github} target="_blank" rel="noreferrer" className={`${linkCls} border-line text-slate-200 hover:border-accent`}><Github size={16} /> GitHub</a>
          ) : (
            <span className={`${linkCls} border-dashed border-line text-muted`}><Github size={16} /> GitHub — Coming Soon</span>
          )}
          {p.live ? (
            <a href={p.live} target="_blank" rel="noreferrer" className={`${linkCls} border-accent bg-accent text-white`}><ExternalLink size={16} /> Live Demo</a>
          ) : (
            <span className={`${linkCls} border-dashed border-line text-muted`}><ExternalLink size={16} /> Live Demo — Coming Soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
