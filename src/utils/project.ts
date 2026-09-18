import type { Project } from '@/types/portfolio';

/** Returns a compact meta line, e.g. "Des 2025 - Agu 2026 · Personal Project". */
export const getProjectMeta = (project: Project): string =>
  [project.period, project.type].filter(Boolean).join(' · ');
