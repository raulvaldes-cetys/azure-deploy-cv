import { Cloud } from 'lucide-react'
import { profile } from '../data/cv'

export default function Footer() {
  return (
    <footer className="border-t border-[#415a77]/40 py-8">
      <div className="flex flex-col items-start justify-between gap-3 text-xs text-[#778da9] sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="inline-flex items-center gap-1.5 font-mono">
          <Cloud size={13} />
          React · Vite · Tailwind · Azure Static Web Apps
        </p>
      </div>
    </footer>
  )
}
