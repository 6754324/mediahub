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
    accent: 'from-accent-500 to-brand-500',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repo: 'mediahub',
  },
  {
    id: 'rundown-studio',
    name: 'Rundown Studio',
    tagline: 'Live-show rundown builder for broadcast directors',
    description:
      'Drag-and-drop a broadcast rundown, auto-compute segment timings, detect schedule conflicts, and export a printable show sheet — the way a control room plans a live show.',
    category: 'Workflow App',
    status: 'soon',
    accent: 'from-brand-500 to-fuchsia-500',
    tech: ['React Flow', 'TypeScript', 'Zustand', 'Timeline engine'],
    repo: 'rundown-studio',
  },
  {
    id: 'videoflow-ai',
    name: 'VideoFlow AI',
    tagline: 'End-to-end AI video production pipeline',
    description:
      'Chain idea → script → storyboard prompts → titles → subtitles into a visual pipeline, executed step by step with streaming AI output and editable intermediate results.',
    category: 'Workflow App',
    status: 'soon',
    accent: 'from-fuchsia-500 to-accent-500',
    tech: ['React', 'TypeScript', 'DeepSeek API', 'SSE'],
    repo: 'videoflow-ai',
  },
  {
    id: 'script-studio',
    name: 'Script Studio',
    tagline: 'AI writing workbench for video scripts',
    description:
      'Generate storyboard scripts, talking-head scripts, interview outlines and show proposals from templates, with streaming preview, editing and export.',
    category: 'Website',
    status: 'soon',
    accent: 'from-amber-500 to-orange-600',
    tech: ['React', 'TypeScript', 'DeepSeek API', 'Template engine'],
    repo: 'script-studio',
  },
  {
    id: 'subtitle-studio',
    name: 'Subtitle Studio',
    tagline: 'Subtitle parsing, timing & bilingual translation',
    description:
      'Parse SRT/VTT/ASS, auto-split and time-stamp raw text, edit in a side-by-side bilingual editor, and export ready-to-use subtitle files.',
    category: 'Website',
    status: 'soon',
    accent: 'from-emerald-500 to-accent-500',
    tech: ['React', 'TypeScript', 'SRT/ASS', 'DeepSeek API'],
    repo: 'subtitle-studio',
  },
]
