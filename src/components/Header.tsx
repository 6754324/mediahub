import { site } from '../data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-gold-500/40 bg-paper-50/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          {/* 朱砂印章 */}
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border-2 border-brand-700 bg-brand-600 font-display text-lg leading-none text-paper-50 shadow-sm">
            匠
          </span>
          <span className="font-display text-xl tracking-wide text-ink-900">MediaHub</span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-ink-500">
          <a href="#projects" className="transition hover:text-brand-600">
            作品
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-600"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
