import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
              <span className="text-white font-semibold tracking-tight">My Portfolio</span>
            </button>

            <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
              <button onClick={() => scrollTo('projects')} className="hover:text-white transition">Projects</button>
              <button onClick={() => scrollTo('about')} className="hover:text-white transition">About</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-white transition">Contact</button>
              <div className="h-5 w-px bg-white/10" />
              <a href="https://github.com/" target="_blank" className="hover:text-white transition" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="hover:text-white transition" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:you@example.com" className="hover:text-white transition" aria-label="Email">
                <Mail size={18} />
              </a>
            </nav>

            <button className="md:hidden text-blue-100" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2 text-blue-100/90">
              <button onClick={() => scrollTo('projects')} className="block w-full text-left py-2">Projects</button>
              <button onClick={() => scrollTo('about')} className="block w-full text-left py-2">About</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left py-2">Contact</button>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={18} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={18} /></a>
                <a href="mailto:you@example.com" className="hover:text-white"><Mail size={18} /></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
