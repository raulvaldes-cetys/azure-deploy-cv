import { MapPin, Mail, Github, Linkedin, ArrowDownRight, FileDown } from 'lucide-react'
import { profile, stats } from '../data/cv'

export default function Hero() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 pt-28 pb-10 sm:pt-36 sm:pb-16">
      <div className="grain -mx-5 rounded-none px-5 py-10 sm:-mx-8 sm:rounded-3xl sm:px-10 sm:py-14">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#415a77]/50 bg-[#1b263b]/70 px-3 py-1 font-mono text-xs text-[#778da9]">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#778da9] opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-[#e0e1dd]" />
          </span>
          Disponible para nuevas oportunidades
        </p>

        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#e0e1dd] sm:text-6xl">
          {profile.name.split(' ').slice(0, 2).join(' ')}
          <br />
          <span className="text-[#778da9]">{profile.name.split(' ').slice(2).join(' ')}</span>
        </h1>

        <p className="mt-4 font-mono text-sm text-[#778da9] sm:text-base">{profile.role}</p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#e0e1dd]/80 sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#e0e1dd] px-5 py-2.5 text-sm font-semibold text-[#0d1b2a] transition-transform hover:-translate-y-0.5 hover:bg-white"
          >
            <Mail size={16} />
            Contáctame
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#415a77] px-5 py-2.5 text-sm font-medium text-[#e0e1dd] transition-colors hover:bg-[#1b263b]"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#415a77] px-5 py-2.5 text-sm font-medium text-[#e0e1dd] transition-colors hover:bg-[#1b263b]"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-[#415a77] px-5 py-2.5 text-sm font-medium text-[#e0e1dd] transition-colors hover:bg-[#1b263b]"
          >
            <FileDown size={16} />
            CV en PDF
          </a>
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-sm text-[#778da9]">
          <MapPin size={14} />
          {profile.location}
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[#415a77]/40 bg-[#1b263b]/60 p-4 transition-colors hover:border-[#778da9]/60"
          >
            <dt className="text-2xl font-bold tracking-tight text-[#e0e1dd] sm:text-3xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs leading-snug text-[#778da9]">{s.label}</dd>
          </div>
        ))}
      </dl>

      <a
        href="#experiencia"
        className="no-print mt-10 inline-flex items-center gap-1.5 font-mono text-xs text-[#778da9] transition-colors hover:text-[#e0e1dd]"
      >
        Scroll <ArrowDownRight size={14} />
      </a>
    </section>
  )
}
