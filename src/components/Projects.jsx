export default function Projects() {
  const projects = [
    {
      title: 'Neon UI Kit',
      desc: 'A vibrant component kit built with accessibility and performance in mind.',
      tags: ['React', 'Tailwind', 'A11y'],
      link: '#'
    },
    {
      title: '3D Playground',
      desc: 'Interactive Spline + WebGL demos exploring motion and depth.',
      tags: ['Spline', 'Three.js', 'Motion'],
      link: '#'
    },
    {
      title: 'SaaS Dashboard',
      desc: 'Clean analytics dashboard with charts, filters and auth.',
      tags: ['Next.js', 'Charts', 'Auth'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-2 text-blue-100/80 max-w-2xl">A few highlights that showcase my attention to detail, playful interactions, and commitment to clean code.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/15 px-4 py-2 text-blue-50 hover:border-white/30 transition">Get in touch</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition backdrop-blur p-5 flex flex-col">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.25),transparent_40%)]" />
              </div>
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-blue-100/80 mt-1 flex-1">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] tracking-wide rounded-full border border-white/10 bg-white/5 text-blue-100/90 px-2 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
