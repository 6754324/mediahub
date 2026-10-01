export type Category = '工作流应用' | '网站'
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
    tagline: '作品集入口 · 统一设计系统',
    description:
      '把这套工具串起来的枢纽——一个深色工作室风格的作品集入口页，承载着贯穿所有项目、保持一致观感的统一设计系统。',
    category: '网站',
    status: 'live',
    demoUrl: 'https://mediahub-eight-nu.vercel.app',
    accent: 'from-accent-500 to-brand-500',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repo: 'mediahub',
  },
  {
    id: 'rundown-studio',
    name: 'Rundown Studio',
    tagline: '广播导播的直播节目单构建器',
    description:
      '以节点图拖拽编排直播节目单，用拓扑排序自动计算各环节时间轴，检测锚定冲突、模拟直播走带，并导出一份可直接执行的播出单。',
    category: '工作流应用',
    status: 'live',
    demoUrl: 'https://rundown-studio-iota.vercel.app',
    accent: 'from-brand-500 to-fuchsia-500',
    tech: ['React Flow', 'TypeScript', 'Zustand', '时间轴引擎'],
    repo: 'rundown-studio',
  },
  {
    id: 'videoflow-ai',
    name: 'VideoFlow AI',
    tagline: '带关键路径排程的视频制作流水线',
    description:
      '把选题拆成「选题 → 脚本 → 分镜 → 拍摄 → 剪辑 → 后期 → 发布」各阶段任务，串联依赖关系，用关键路径法（CPM）自动排程。',
    category: '工作流应用',
    status: 'live',
    demoUrl: 'https://videoflow-ai-phi.vercel.app',
    accent: 'from-fuchsia-500 to-accent-500',
    tech: ['React', 'TypeScript', 'CPM 排程', 'DeepSeek API'],
    repo: 'videoflow-ai',
  },
  {
    id: 'script-studio',
    name: 'Script Studio',
    tagline: '面向视频创作者的剧本与分镜工作台',
    description:
      '把故事拆成带「起承转合」节拍的场次，逐镜撰写分镜（景别 / 运镜 / 画面 / 台词 / 音效），并导出行业格式剧本。',
    category: '网站',
    status: 'live',
    demoUrl: 'https://script-studio-inky.vercel.app',
    accent: 'from-amber-500 to-orange-600',
    tech: ['React', 'TypeScript', '剧本引擎', 'DeepSeek API'],
    repo: 'script-studio',
  },
  {
    id: 'subtitle-studio',
    name: 'Subtitle Studio',
    tagline: '字幕时间轴 · 清理 · AI 翻译',
    description:
      '解析与导出 SRT，行内编辑字幕，执行平移 / 合并 / 拆分等时间轴操作，标记重叠与语速问题，并可用 AI 批量翻译。',
    category: '网站',
    status: 'live',
    demoUrl: 'https://subtitle-studio-nu.vercel.app',
    accent: 'from-emerald-500 to-accent-500',
    tech: ['React', 'TypeScript', 'SRT 引擎', 'DeepSeek API'],
    repo: 'subtitle-studio',
  },
]
