import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] text-blue-100/90">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Available for freelance work
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Creative Developer building modern, playful experiences
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg max-w-xl">
            I blend code and design to craft delightful interfaces, interactive 3D, and performant web apps.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="rounded-lg bg-cyan-400/90 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition">See Projects</a>
            <a href="#contact" className="rounded-lg border border-white/20 hover:border-white/40 text-white px-5 py-3 transition">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
