# Abdulwahed Mansour — Portfolio & CV Collection

Multi-variant CV portfolio with a static website, cover letter generator, and 10 role-specific profiles. Each CV targets a specific specialization backed by real projects from [github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden).

**Live:** [abdulwahed-mansour.dev](https://abdulwahed-mansour.dev)

## Quick Start

```bash
cd site
npm install
npm run dev       # Dev server → localhost:4321
npm run build     # Static build → site/dist/
npm run preview   # Preview build
```

**Requires Node.js 24+** (see `.nvmrc`)

## CV Profiles

| # | Profile | Focus |
|---|---------|-------|
| 01 | [Python Backend Architect](cvs/01-python-backend-architect.md) | FastAPI, Django, data pipelines, AI integration |
| 02 | [Rust Systems Engineer](cvs/02-rust-systems-engineer.md) | Tokio, Axum, async services, cryptography, CLI |
| 03 | [Smart Contract Security Auditor](cvs/03-smart-contract-security-auditor.md) | Solidity auditing, DeFi security, Sherlock, Immunefi |
| 04 | [Blockchain Security Researcher](cvs/04-blockchain-security-researcher.md) | Vulnerability research, exploit modeling, MEV |
| 05 | [DeFi / Islamic Finance Protocol Engineer](cvs/05-defi-islamic-finance-protocol-engineer.md) | ERC-4626, Shariah-compliant DeFi, multi-chain |
| 06 | [Full-Stack Web Developer](cvs/06-fullstack-web-developer.md) | Django, React, Next.js, Vue.js, TypeScript |
| 07 | [DevOps & Cloud Engineer](cvs/07-devops-cloud-engineer.md) | Docker, CI/CD, GitHub Actions, cloud deployment |
| 08 | [Security Engineer / Pentester](cvs/08-security-engineer-pentester.md) | Rust pentesting tools, bug bounty, offensive security |
| 09 | [Blockchain Forensics Specialist](cvs/09-blockchain-forensics-specialist.md) | On-chain tracing, AML, threat intelligence |
| 10 | [AI-Integrated Backend Engineer](cvs/10-ai-integrated-backend-engineer.md) | LLM APIs, MCP servers, AI pipelines |

## Key Numbers

- **21+ repositories** across Rust, Solidity, Python, and TypeScript
- **208,000+ lines of code** with **5,700+ tests**
- **$98.6M** vulnerability exposure discovered (ADS class)
- **$1.5B** Bybit hack traced in 36 seconds with BTC Sentinel

## Tech Stack

- **Astro 6** + **Tailwind CSS 4** + **React 19** (cover letter generator)
- **Inter** + **JetBrains Mono** typography
- Dark/light theme with CSS custom properties
- Print-optimized A4 layout (Ctrl+P)
- Full SEO: OG tags, Twitter Cards, JSON-LD, canonical URLs

## Project Structure

```
abdulwahed-mansour-cv/
├── cvs/                        # Raw Markdown CVs (ATS-friendly)
├── cover-letter.md             # General cover letter
├── site/
│   ├── src/
│   │   ├── components/         # Nav, Footer, SEO, CoverLetterGenerator
│   │   ├── content/cvs/        # CVs with frontmatter
│   │   ├── layouts/            # BaseLayout
│   │   ├── pages/              # index, /cv/[slug], /cover-letter, 404
│   │   └── styles/global.css   # Design system
│   └── package.json
├── .nvmrc                      # Node 24
└── README.md
```

## Contact

**Email:** abdulwahed.sweden@gmail.com
**LinkedIn:** [abdulwahed-mansour](https://linkedin.com/in/abdulwahed-mansour)
**GitHub:** [abdulwahed-sweden](https://github.com/abdulwahed-sweden)
**Location:** Stockholm, Sweden
