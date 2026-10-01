import { site } from '../data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-ink-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-brand-600 font-display text-sm font-bold text-white">
            M
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Media<span className="text-brand-400">Hub</span>
          </span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#projects" className="transition hover:text-white">
            作品
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
