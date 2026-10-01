import type { ReactNode } from 'react'

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-ink-200 bg-ink-900/5 px-2 py-0.5 font-mono text-[11px] leading-4 text-ink-500">
      {children}
    </span>
  )
}
