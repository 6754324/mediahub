import { site } from '../data/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-24">
        <p className="mb-4 font-mono text-sm text-accent-400">// media production tools</p>

        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Tools for the whole
          <br />
          <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
            content pipeline
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          A collection of five production-grade web tools spanning planning, scripting, directing,
          editing and subtitling — built with React, TypeScript and one shared design system.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-500"
          >
            Browse the tools
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
          >
            View source
          </a>
        </div>

        <dl className="mt-16 grid max-w-md grid-cols-3 gap-6">
          {[
            { value: '5', label: 'Projects' },
            { value: '2', label: 'Workflow apps' },
            { value: '3', label: 'Websites' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-bold text-white">{stat.value}</dt>
              <dd className="mt-1 font-mono text-xs text-zinc-500">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
