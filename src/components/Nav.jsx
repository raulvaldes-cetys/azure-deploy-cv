import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'
import { profile, sections } from '../data/cv'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[#415a77]/40 bg-[#0d1b2a]/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#sobre-mi"
          className="font-mono text-sm font-medium tracking-tight text-[#e0e1dd] transition-colors hover:text-white"
        >
          <span className="text-[#778da9]">{'<'}</span>rv
          <span className="text-[#778da9]">{' />'}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active === id
                    ? 'bg-[#415a77]/40 text-[#e0e1dd]'
                    : 'text-[#778da9] hover:text-[#e0e1dd]'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden rounded-full p-2 text-[#778da9] transition-colors hover:bg-[#1b263b] hover:text-[#e0e1dd] sm:block"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden rounded-full p-2 text-[#778da9] transition-colors hover:bg-[#1b263b] hover:text-[#e0e1dd] sm:block"
          >
            <Linkedin size={18} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="rounded-full p-2 text-[#e0e1dd] transition-colors hover:bg-[#1b263b] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#415a77]/40 bg-[#0d1b2a]/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto max-w-5xl px-5 py-3 sm:px-8">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    active === id
                      ? 'bg-[#1b263b] text-[#e0e1dd]'
                      : 'text-[#778da9] hover:bg-[#1b263b]/60 hover:text-[#e0e1dd]'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
