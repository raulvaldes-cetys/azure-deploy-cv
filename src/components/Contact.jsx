import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/cv'

const links = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: Phone,
    label: 'Teléfono',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, '')}`,
  },
  { icon: Github, label: 'GitHub', value: 'raulvaldes-cetys', href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'raul-valdes-corona', href: profile.linkedin },
]

export default function Contact() {
  return (
    <Section id="contacto" title="Contacto" icon={Send}>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex items-center gap-4 rounded-2xl border border-[#415a77]/40 bg-[#1b263b]/60 p-4 transition-all hover:-translate-y-0.5 hover:border-[#778da9]/60 hover:bg-[#1b263b]"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#415a77]/50 bg-[#0d1b2a] text-[#778da9] transition-colors group-hover:text-[#e0e1dd]">
              <Icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[11px] uppercase tracking-widest text-[#778da9]">
                {label}
              </span>
              <span className="block truncate text-sm text-[#e0e1dd]">{value}</span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}
