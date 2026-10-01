import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { Footer } from './components/Footer'
import { projects } from './data/projects'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-paper-50 font-sans">
      <Header />
      <main>
        <Hero />
        <section id="projects" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-8 flex items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-950">全部作品</h2>
              <p className="mt-1 text-sm text-ink-500">
                两个工作流应用 + 三个网站，各自带可独立验证的自研核心引擎。
              </p>
            </div>
            <span className="rounded-full border border-ink-200 px-3 py-1 text-xs text-ink-500">
              {projects.length} 个项目
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
