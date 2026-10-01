export type Category = 'Workflow App' | 'Website'
export type Status = 'live' | 'soon'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  category: Category
  status: Status
  /** Tailwind gradient classes for the card cover. */
  accent: string
  tech: string[]
  repo: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'mediahub',
    name: 'MediaHub',
    tagline: 'Portfolio entry point & shared design system',
    description:
      'The hub that ties this collection together — a dark studio-styled entry page built on a shared design system used across every project.',
    category: 'Website',
    status: 'live',
    demoUrl: 'https://mediahub-eight-nu.vercel.app',
    accent: 'from-accent-500 to-brand-500',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repo: 'mediahub',
  },
  {
    id: 'rundown-studio',
    name: 'Rundown Studio',
    tagline: 'Live-show rundown builder for broadcast directors',
    description:
      'Drag-and-drop a broadcast rundown as a node graph, auto-compute segment timings via topological sort, detect anchor-time conflicts, run a simulated live play-through, and export a show sheet.',
    category: 'Workflow App',
    status: 'live',
    demoUrl: 'https://rundown-studio-iota.vercel.app',
    accent: 'from-brand-500 to-fuchsia-500',
    tech: ['React Flow', 'TypeScript', 'Zustand', 'Timeline engine'],
    repo: 'rundown-studio',
  },
  {
    id: 'videoflow-ai',
    name: 'VideoFlow AI',
    tagline: 'Video production pipeline with critical-path scheduling',
    description:
      'Break a topic into tasks across the 选题 → 脚本 → 分镜 → 拍摄 → 剪辑 → 后期 → 发布 workflow, wire up dependencies, and schedule the project with the Critical Path Method.',
    category: 'Workflow App',
    status: 'live',
    demoUrl: 'https://videoflow-ai-phi.vercel.app',
    accent: 'from-fuchsia-500 to-accent-500',
    tech: ['React', 'TypeScript', 'CPM scheduler', 'DeepSeek API'],
    repo: 'videoflow-ai',
  },
  {
    id: 'script-studio',
    name: 'Script Studio',
    tagline: 'Screenplay & shot-list workbench for video writers',
    description:
      'Structure a story into scenes tagged with 起承转合 beats, write per-shot 分镜 (景别 / 运镜 / 画面 / 台词 / 音效), and export an industry-format screenplay.',
    category: 'Website',
    status: 'live',
    demoUrl: 'https://script-studio-inky.vercel.app',
    accent: 'from-amber-500 to-orange-600',
    tech: ['React', 'TypeScript', 'Screenplay engine', 'DeepSeek API'],
    repo: 'script-studio',
  },
  {
    id: 'subtitle-studio',
    name: 'Subtitle Studio',
    tagline: 'Subtitle timing, clean-up & AI translation',
    description:
      'Parse and export SRT, edit cues inline, run timing operations (shift / merge / split), flag overlaps and reading-speed issues, and batch-translate lines with AI.',
    category: 'Website',
    status: 'live',
    demoUrl: 'https://subtitle-studio-nu.vercel.app',
    accent: 'from-emerald-500 to-accent-500',
    tech: ['React', 'TypeScript', 'SRT engine', 'DeepSeek API'],
    repo: 'subtitle-studio',
  },
]
