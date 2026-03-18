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
  { title: "Senior Python Backend Architect", short: "Python Architect", description: "Senior Python Backend Architect specializing in FastAPI, Django, and high-throughput API design.", keywords: "Python, FastAPI, Django, DRF, PostgreSQL, REST API, SQLAlchemy, Docker, Backend Architect, Stockholm", tags: ["Python", "FastAPI", "Django", "Backend"], slug: "01-python-backend-architect", order: 1 },
  { title: "Senior Rust Systems Engineer", short: "Rust Engineer", description: "Senior Rust Systems Engineer building high-performance async services, cryptographic protocols, and CLI tools.", keywords: "Rust, Tokio, Axum, Systems Programming, async, WASM, Cryptography, CLI, Performance, Stockholm", tags: ["Rust", "Systems", "Async", "Tokio"], slug: "02-rust-systems-engineer", order: 2 },
  { title: "Smart Contract Security Auditor", short: "Contract Auditor", description: "Smart Contract Security Auditor with proven findings on Sherlock and Immunefi. Discovered the ADS vulnerability class (~$98.6M exposure).", keywords: "Smart Contract, Security Audit, Solidity, Foundry, DeFi, Sherlock, Immunefi, ERC-4337, Vulnerability Research, Stockholm", tags: ["Solidity", "Security", "DeFi", "Audit"], slug: "03-smart-contract-security-auditor", order: 3 },
  { title: "Blockchain Security Researcher", short: "Security Research", description: "Blockchain Security Researcher focused on DeFi vulnerabilities, oracle manipulation defense, and economic exploit modeling.", keywords: "Blockchain Security, DeFi, Oracle Manipulation, MEV, Vulnerability Research, Solidity, Rust, Exploit Modeling, Stockholm", tags: ["Security", "Research", "DeFi", "Exploits"], slug: "04-blockchain-security-researcher", order: 4 },
  { title: "DeFi Protocol Engineer — Islamic Finance", short: "DeFi Protocol", description: "DeFi Protocol Engineer pioneering Shariah-compliant decentralized finance with 1,630+ tests.", keywords: "DeFi, Islamic Finance, ERC-4626, Solidity, Solana, Mudaraba, Protocol Design, Smart Contracts, Stockholm", tags: ["DeFi", "Islamic Finance", "Solidity", "Protocol"], slug: "05-defi-islamic-finance-protocol-engineer", order: 5 },
  { title: "Full-Stack Web Developer", short: "Full-Stack Dev", description: "Full-Stack Web Developer building modern applications with Django, FastAPI, Vue.js, React, and Next.js.", keywords: "Full-Stack, Django, FastAPI, Vue.js, React, Next.js, TypeScript, Tailwind CSS, PostgreSQL, Stockholm", tags: ["Full-Stack", "React", "Django", "TypeScript"], slug: "06-fullstack-web-developer", order: 6 },
  { title: "DevOps & Cloud Infrastructure Engineer", short: "DevOps Engineer", description: "DevOps & Cloud Engineer with hands-on Docker, CI/CD pipelines, and multi-platform deployment experience.", keywords: "DevOps, Docker, CI/CD, GitHub Actions, Cloud, Infrastructure, PostgreSQL, Vercel, Linux, Stockholm", tags: ["DevOps", "Docker", "CI/CD", "Cloud"], slug: "07-devops-cloud-engineer", order: 7 },
  { title: "Security Engineer & Penetration Tester", short: "Security / Pentest", description: "Security Engineer building offensive and defensive tools in Rust with high-severity vulnerability findings.", keywords: "Security Engineer, Pentesting, Rust, TCP Scanning, Bug Bounty, Immunefi, HackerOne, MITRE ATT&CK, Stockholm", tags: ["Security", "Pentesting", "Linux", "Network"], slug: "08-security-engineer-pentester", order: 8 },
  { title: "Blockchain Forensics & Intelligence Analyst", short: "Forensics Analyst", description: "Blockchain Forensics Specialist who traced the $1.5B Bybit hack in 36 seconds with BTC Sentinel.", keywords: "Blockchain Forensics, Transaction Tracing, AML, MITRE ATT&CK, THORChain, Lazarus Group, Stockholm", tags: ["Blockchain", "Forensics", "Rust", "Analysis"], slug: "09-blockchain-forensics-specialist", order: 9 },
  { title: "AI-Integrated Backend Engineer", short: "AI Backend", description: "AI-Integrated Backend Engineer building production systems with LLM APIs, MCP, and AI-powered data pipelines.", keywords: "LLM, AI, DeepSeek, OpenAI, Anthropic, MCP, LangChain, Vercel AI SDK, RAG, Stockholm", tags: ["AI", "LLM", "Python", "MCP"], slug: "10-ai-integrated-backend-engineer", order: 10 },
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
