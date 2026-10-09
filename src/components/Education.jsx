import { GraduationCap } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" eyebrow="07. Education" title="Education">
      <Reveal>
        <div className="flex gap-4 rounded-xl border border-line bg-panel/60 p-6">
          <GraduationCap className="mt-1 shrink-0 text-accent" />
          <div>
            <h3 className="text-lg font-semibold text-white">Daffodil International University</h3>
            <p className="text-slate-300">Department of Software Engineering</p>
            <p className="mt-2 text-sm text-muted">CGPA: 3.75 · Expected Graduation: June 2027</p>
          </div>
        </div>
      </Reveal>
      {/* No work experience listed on purpose: the Projects section is the evidence of practical work. */}
    </Section>
  );
}
