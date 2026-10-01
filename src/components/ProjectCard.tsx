import type { Project } from '../data/projects'
import { site } from '../data/site'
import { TechBadge } from './TechBadge'

export function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === 'live'
  const isHere = project.id === 'mediahub'
  const poster = project.demoVideo?.replace(/\.webm$/, '-poster.jpg')

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-paper-100 transition duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-lg hover:shadow-gold-500/10">
      {/* Cover — 视频封面（hover 播放）或渐变封面 */}
      <div className="relative h-36 overflow-hidden bg-paper-200">
        {project.demoVideo ? (
          <video
            src={project.demoVideo}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            onMouseEnter={(e) => {
              void e.currentTarget.play().catch(() => {})
            }}
            onMouseLeave={(e) => {
              e.currentTarget.pause()
              e.currentTarget.currentTime = 0
            }}
          />
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
            <div className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[7rem] font-bold leading-none text-white/20">
              {project.name.charAt(0)}
            </div>
          </>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-black/25 px-2.5 py-1 text-[11px] text-white backdrop-blur">
          {project.category}
        </span>
        {project.demoVideo && (
          <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-black/25 px-2 py-1 text-[11px] text-white backdrop-blur">
            ▶ 演示
          </span>
        )}
        {!isLive && (
          <span className="absolute right-4 top-4 rounded-full bg-black/25 px-2.5 py-1 text-[11px] text-white/85 backdrop-blur">
            制作中
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink-900">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-700">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-ink-200/80 pt-4">
          {isHere ? (
            <span className="text-sm font-medium text-accent-600">你在这里</span>
          ) : isLive ? (
            <>
              <a
                href={project.demoUrl ?? `${site.github}/${project.repo}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-paper-50 transition hover:bg-brand-700"
              >
                开始使用
                <span aria-hidden>↗</span>
              </a>
              <a
                href={`${site.github}/${project.repo}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink-400 transition hover:text-ink-900"
              >
                源码 ↗
              </a>
            </>
          ) : (
            <span className="text-sm text-ink-300">敬请期待</span>
          )}
        </div>
      </div>
    </article>
  )
}
