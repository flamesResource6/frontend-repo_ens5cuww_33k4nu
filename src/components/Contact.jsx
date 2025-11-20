import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I\'ll get back to you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s connect</h2>
        <p className="mt-2 text-blue-100/85">Have a project in mind or just want to say hi?</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input required name="name" placeholder="Your name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <input required type="email" name="email" placeholder="Email address" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea required name="message" rows="5" placeholder="Tell me about your project" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <button className="justify-self-start rounded-lg bg-cyan-400/90 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 transition">Send message</button>
          {status && <p className="text-blue-100/85">{status}</p>}
        </form>
      </div>
    </section>
  )
}
