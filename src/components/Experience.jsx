import { Briefcase } from 'lucide-react'
import Section from './Section'
import { experience } from '../data/cv'

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiencia" icon={Briefcase}>
      <ol className="relative border-l border-[#415a77]/50 pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative pb-10 last:pb-0">
            <span
              className={`absolute -left-[31px] top-1.5 grid size-3.5 place-items-center rounded-full ring-4 ring-[#0d1b2a] sm:-left-[39px] ${
                job.current ? 'bg-[#e0e1dd]' : 'bg-[#415a77]'
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight text-[#e0e1dd]">{job.role}</h3>
              <span className="font-mono text-xs text-[#778da9]">{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-[#778da9]">{job.company}</p>

            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#e0e1dd]/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#415a77]" />
                  {b}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-[#415a77]/50 bg-[#1b263b] px-2 py-0.5 font-mono text-[11px] text-[#778da9]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
