import { FolderGit2, Trophy } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/cv'

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos" icon={FolderGit2}>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`group flex flex-col rounded-2xl border border-[#415a77]/40 bg-[#1b263b]/60 p-5 transition-all hover:-translate-y-0.5 hover:border-[#778da9]/60 hover:bg-[#1b263b] ${
              i === 0 ? 'sm:col-span-2' : ''
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight text-[#e0e1dd]">{p.name}</h3>
              <span className="font-mono text-xs text-[#778da9]">{p.period}</span>
            </div>

            {p.award && (
              <p className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#778da9]/50 bg-[#415a77]/30 px-2.5 py-0.5 text-[11px] font-medium text-[#e0e1dd]">
                <Trophy size={12} />
                {p.award}
              </p>
            )}

            <p className="mt-3 text-sm leading-relaxed text-[#e0e1dd]/80">{p.summary}</p>

            <ul className="mt-3 space-y-2">
              {p.bullets.map((b, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-[#e0e1dd]/70">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#415a77]" />
                  {b}
                </li>
              ))}
            </ul>

            <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {p.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-[#415a77]/50 bg-[#0d1b2a] px-2 py-0.5 font-mono text-[11px] text-[#778da9]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
