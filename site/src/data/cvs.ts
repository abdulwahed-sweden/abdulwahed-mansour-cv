export interface CVMeta {
  title: string;
  short: string;
  description: string;
  keywords: string;
  tags: string[];
  slug: string;
  order: number;
}

export const cvs: CVMeta[] = [
  { title: "Senior Backend Engineer (Python / Django)", short: "Backend Engineer", description: "Senior Backend Engineer with 9+ years building reliable, scalable systems with Python, Django, and production-grade infrastructure.", keywords: "Python, Django, FastAPI, DRF, PostgreSQL, REST API, Docker, Backend, System Design, Stockholm", tags: ["Python", "Django", "Backend", "APIs"], slug: "01-senior-backend-engineer", order: 1 },
  { title: "Security Engineer (Systems Security & Backend Protection)", short: "Security Engineer", description: "Security Engineer focused on vulnerability analysis, threat modeling, secure architecture, and building offensive/defensive security tooling.", keywords: "Security Engineer, Vulnerability Analysis, Threat Modeling, Penetration Testing, Python, Rust, Backend Security, Stockholm", tags: ["Security", "Python", "Rust", "Threat Modeling"], slug: "02-security-engineer", order: 2 },
];

// Load raw markdown content for a CV by slug
const cvModules = import.meta.glob('/../cvs/*.md', { query: '?raw', import: 'default', eager: false }) as Record<string, () => Promise<string>>;

export async function loadCVContent(slug: string): Promise<string> {
  for (const [path, loader] of Object.entries(cvModules)) {
    if (path.includes(slug)) {
      const content = await loader();
      // Strip header block (name, title, contact) before first ## heading
      let stripped = content.replace(/^---[\s\S]*?---\n*/, '');
      const firstH2 = stripped.indexOf('\n## ');
      if (firstH2 > 0) stripped = stripped.substring(firstH2 + 1);
      return stripped;
    }
  }
  return '';
}
