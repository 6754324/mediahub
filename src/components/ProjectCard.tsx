import type { Project } from '../data/projects'
import { site } from '../data/site'
import { TechBadge } from './TechBadge'

export function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === 'live'
  const isHere = project.id === 'mediahub'

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-brand-900/20">
      {/* Cover */}
      <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[7rem] font-bold leading-none text-white/15">
          {project.name.charAt(0)}
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur">
          {project.category}
        </span>
        {!isLive && (
          <span className="absolute right-4 top-4 rounded-full bg-black/30 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur">
            in progress
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-300">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
          {isHere ? (
            <span className="text-sm font-medium text-accent-400">You are here</span>
          ) : isLive ? (
            <>
              <a
                href={project.demoUrl ?? `${site.github}/${project.repo}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-500"
              >
                Open demo
              </a>
              <a
                href={`${site.github}/${project.repo}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Source ↗
              </a>
            </>
          ) : (
            <span className="text-sm text-zinc-500">Coming soon</span>
          )}
        </div>
      </div>
    </article>
  )
}
