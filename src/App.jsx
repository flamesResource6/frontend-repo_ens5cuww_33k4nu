import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50">
      <Navbar />

      <main className="pt-24">
        <Hero />
        <Projects />
        <About />
        <Contact />

        <footer className="py-12 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-200/70">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <a href="/test" className="text-sm hover:text-white transition">System status</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
