import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-ink-200 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink-400 sm:flex-row">
        <p>
          由 <span className="text-ink-700">@{site.handle}</span> 制作
        </p>
        <p className="text-xs">React · TypeScript · Tailwind CSS · 统一设计系统</p>
        <a href={`mailto:${site.email}`} className="transition hover:text-brand-600">
          联系我
        </a>
      </div>
    </footer>
  )
}
