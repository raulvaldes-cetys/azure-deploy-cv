import { Code2 } from 'lucide-react'
import Section from './Section'
import { skills } from '../data/cv'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" icon={Code2}>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((g) => (
          <div
            key={g.group}
            className="rounded-2xl border border-[#415a77]/40 bg-[#1b263b]/60 p-5 transition-colors hover:border-[#778da9]/60"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#778da9]">
              {g.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#415a77]/50 bg-[#0d1b2a] px-2.5 py-1 text-sm text-[#e0e1dd]"
                >
                  {s.name}
                  {s.level === 'Beginner' && (
                    <span className="font-mono text-[10px] text-[#778da9]">beginner</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
