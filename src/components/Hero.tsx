import { site } from '../data/site'

const TITLE = '媒体制作工具箱'
const PETALS = [
  { left: '12%', delay: '0s', size: 10 },
  { left: '38%', delay: '2.5s', size: 14 },
  { left: '64%', delay: '5s', size: 9 },
  { left: '84%', delay: '1.2s', size: 12 },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 水墨晕染 + 云雾漂移 + 花瓣 */}
      <div className="inkwash pointer-events-none absolute inset-0" />
      <div className="anim-drift pointer-events-none absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-accent-300/30 blur-3xl" />
      <div className="anim-drift-slow pointer-events-none absolute top-24 right-[6%] h-80 w-80 rounded-full bg-jade-300/25 blur-3xl" />
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="anim-petal pointer-events-none absolute top-0 rounded-[60%_40%_60%_40%] bg-brand-300/70"
          style={{ left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-28">
        <span className="anim-rise inline-flex items-center gap-2 rounded-full border border-ink-200 bg-paper-100/70 px-3.5 py-1.5 text-xs text-ink-600">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          媒体制作工具
        </span>

        <div className="relative mt-7">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink-950 sm:text-5xl md:text-6xl">
            <span className="anim-rise inline-block" style={{ animationDelay: '0.05s' }}>
              从灵感到成片的
            </span>
            <br />
            <span className="text-brand-700">
              {Array.from(TITLE).map((ch, i) => (
                <span
                  key={i}
                  className="anim-rise inline-block"
                  style={{ animationDelay: `${0.25 + i * 0.09}s` }}
                >
                  {ch}
                </span>
              ))}
            </span>
          </h1>

          {/* 朱砂印章落款 */}
          <div className="anim-stamp absolute right-4 top-2 hidden rotate-[-8deg] flex-col items-center justify-center rounded border-2 border-brand-700 bg-brand-600 px-2 py-1.5 text-paper-50 shadow-md sm:flex">
            <span className="font-display text-base leading-none">匠心</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-16 bg-gold-500/50" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
          <span className="h-px w-16 bg-gold-500/50" />
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
          五个可直接上线的网页工具，覆盖策划、脚本、导播、剪辑与字幕——基于 React、TypeScript
          与一套贯穿始终的统一设计系统构建。
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-paper-50 shadow-sm transition hover:bg-brand-700"
          >
            浏览全部作品
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-300 bg-paper-100/70 px-5 py-2.5 text-sm font-medium text-ink-700 transition hover:border-brand-500 hover:text-brand-700"
          >
            查看源码
            <span aria-hidden>↗</span>
          </a>
        </div>

        <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-ink-200 pt-8">
          {[
            { value: '5', label: '作品' },
            { value: '2', label: '工作流应用' },
            { value: '3', label: '网站' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-3xl font-bold text-ink-950">{stat.value}</dt>
              <dd className="mt-1 text-xs text-ink-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* 山峦剪影 */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-full"
        aria-hidden
      >
        <path
          fill="currentColor"
          className="text-accent-500/15"
          d="M0,224 L180,120 L320,200 L520,80 L720,220 L920,140 L1120,240 L1280,160 L1440,224 L1440,320 L0,320 Z"
        />
        <path
          fill="currentColor"
          className="text-ink-900/10"
          d="M0,272 L240,180 L420,256 L640,160 L880,272 L1080,200 L1280,268 L1440,224 L1440,320 L0,320 Z"
        />
      </svg>
    </section>
  )
}
