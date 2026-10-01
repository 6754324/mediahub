import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          由 <span className="text-zinc-300">@{site.handle}</span> 制作
        </p>
        <p className="text-xs">React · TypeScript · Tailwind CSS · 统一设计系统</p>
        <a href={`mailto:${site.email}`} className="transition hover:text-zinc-300">
          联系我
        </a>
      </div>
    </footer>
  )
}
