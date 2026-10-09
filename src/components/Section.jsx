import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-10">
          {eyebrow && <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
