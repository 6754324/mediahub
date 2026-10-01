import { site } from '../data/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          作品集 · 媒体制作工具
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          从灵感到成片的
          <br />
          <span className="bg-gradient-to-r from-brand-400 via-fuchsia-400 to-accent-400 bg-clip-text text-transparent">
            媒体制作工具箱
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          五个可直接上线的网页工具，覆盖策划、脚本、导播、剪辑与字幕——基于 React、TypeScript
          与一套贯穿始终的统一设计系统构建。
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-500"
          >
            浏览全部作品
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
          >
            查看源码
            <span aria-hidden>↗</span>
          </a>
        </div>

        <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-white/5 pt-8">
          {[
            { value: '5', label: '作品' },
            { value: '2', label: '工作流应用' },
            { value: '3', label: '网站' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-bold text-white">{stat.value}</dt>
              <dd className="mt-1 text-xs text-zinc-500">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
