export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About me</h2>
        <p className="mt-4 text-blue-100/85 text-lg">
          I’m a creative developer focused on crafting modern, accessible, and fun digital products. My work blends thoughtful UX, crisp UI, and playful motion. I enjoy collaborating with teams to turn ambitious ideas into polished, maintainable experiences.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-blue-100/85">
          <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Design systems & component libraries</li>
          <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Interactive 3D & creative coding</li>
          <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">High‑performance web apps</li>
          <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">DX: tooling, docs, and testing</li>
        </ul>
      </div>
    </section>
  )
}
