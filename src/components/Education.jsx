import { GraduationCap, Award } from 'lucide-react'
import Section from './Section'
import { education, awards } from '../data/cv'

export default function Education() {
  return (
    <Section id="educacion" title="Educación y reconocimientos" icon={GraduationCap}>
      <div className="grid gap-4 lg:grid-cols-5">
        {education.map((e) => (
          <div
            key={e.school}
            className="rounded-2xl border border-[#415a77]/40 bg-[#1b263b]/60 p-5 lg:col-span-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight text-[#e0e1dd]">{e.school}</h3>
              <span className="font-mono text-xs text-[#778da9]">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-[#e0e1dd]/80">{e.degree}</p>
            <p className="mt-3 inline-block rounded-lg border border-[#778da9]/50 bg-[#415a77]/30 px-2.5 py-1 font-mono text-xs text-[#e0e1dd]">
              {e.gpa}
            </p>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-[#778da9]">
              Cursos relevantes
            </h4>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {e.courses.map((c) => (
                <li
                  key={c}
                  className="rounded-md border border-[#415a77]/50 bg-[#0d1b2a] px-2 py-0.5 text-[12px] text-[#778da9]"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-2xl border border-[#415a77]/40 bg-[#1b263b]/60 p-5 lg:col-span-2">
          <h3 className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#778da9]">
            <Award size={14} /> Premios
          </h3>
          <ol className="mt-4 space-y-4">
            {awards.map((a) => (
              <li key={a.year} className="border-l-2 border-[#415a77] pl-3">
                <p className="text-sm font-semibold text-[#e0e1dd]">{a.title}</p>
                <p className="mt-0.5 font-mono text-[11px] text-[#778da9]">{a.project}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#e0e1dd]/70">{a.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
