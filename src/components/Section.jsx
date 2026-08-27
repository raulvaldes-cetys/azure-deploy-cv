export default function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-20">
      <div className="mb-8 flex items-center gap-3">
        {Icon && (
          <span className="grid size-9 place-items-center rounded-lg border border-[#415a77]/50 bg-[#1b263b] text-[#778da9]">
            <Icon size={18} />
          </span>
        )}
        <h2 className="text-xl font-semibold tracking-tight text-[#e0e1dd] sm:text-2xl">{title}</h2>
        <span className="h-px flex-1 bg-gradient-to-r from-[#415a77]/60 to-transparent" />
      </div>
      {children}
    </section>
  )
}
