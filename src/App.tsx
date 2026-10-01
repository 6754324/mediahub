import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { Footer } from './components/Footer'
import { projects } from './data/projects'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink-950 font-sans">
      <Header />
      <main>
        <Hero />
        <section id="projects" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-8 flex items-center gap-3">
            <h2 className="font-display text-2xl font-semibold text-white">Projects</h2>
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
              {projects.length} tools
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
