# Abdulwahed Mansour

**Security Researcher · Systems Engineer · Protocol Architect**

[![Portfolio](https://img.shields.io/badge/Portfolio-abdulwahed--mansour.dev-2563eb?style=flat-square)](https://abdulwahed-mansour.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-abdulwahed--sweden-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/abdulwahed-sweden/)
[![GitHub](https://img.shields.io/badge/GitHub-abdulwahed--sweden-181717?style=flat-square&logo=github)](https://github.com/abdulwahed-sweden)

Multi-variant CV portfolio and cover letter generator with 10 role-specific profiles. Each profile targets a distinct specialization backed by real projects, production code, and verified security research.

---

## Quick Start

```bash
cd site
npm install
npm run dev       # http://localhost:5173
npm run build     # Static output → site/dist/
npm run preview   # Preview production build
```

Requires **Node.js 24+** (see `.nvmrc`).

## Key Numbers

| Metric | Value |
|--------|-------|
| Vulnerability exposure discovered | **$98.6M** (ADS class — Aave V4, Morpho Blue, Curve) |
| Largest hack traced | **$1.5B** Bybit hack in **36 seconds** (BTC Sentinel) |
| Production code | **208,000+ lines** across **21+ repositories** |
| Test coverage | **5,700+ tests** in Rust, Python, Solidity, TypeScript |

## Professional Profiles

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
| 10 | [AI-Integrated Backend Engineer](cvs/10-ai-integrated-backend-engineer.md) | LLM APIs, MCP servers, AI-powered pipelines |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Vite 8 + React 19 + TypeScript |
| Styling | Tailwind CSS 3 (class-based dark mode) |
| Routing | React Router v7 (SPA with 404.html fallback) |
| Markdown | react-markdown + remark-gfm |
| Icons | lucide-react |
| Typography | Inter + JetBrains Mono (Google Fonts) |
| Build | < 1 second, code-split per CV profile |
| Deploy | Static — compatible with HF Spaces, Vercel, Netlify |

## Features

- **10 CV profiles** rendered from markdown with full prose styling
- **Cover letter generator** with 10 role templates, CV attachment selection, compose/preview tabs, copy-to-clipboard
- **Dark / light theme** with system preference detection and localStorage persistence
- **Private repository notice** on each CV page
- **Print-friendly** layout (Ctrl+P hides nav, buttons, notices)
- **Responsive** design with mobile navigation
- **SEO** meta tags, Open Graph, structured data

## Project Structure

```
abdulwahed-mansour-cv/
├── cvs/                          # 10 raw Markdown CVs (ATS-friendly)
│   ├── 01-python-backend-architect.md
│   ├── 02-rust-systems-engineer.md
│   └── ...
├── cover-letter.md               # General cover letter template
├── site/                         # Vite + React application
│   ├── public/favicon.svg
│   ├── src/
│   │   ├── components/           # Navigation, Footer
│   │   ├── contexts/             # ThemeContext (dark/light)
│   │   ├── data/cvs.ts           # CV metadata + markdown loader
│   │   └── pages/                # Home, CVPage, CoverLetter, NotFound
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
├── .nvmrc                        # Node 24
├── PLAN.md                       # Design specification
└── README.md
```

## Deployment

Build produces a static `dist/` directory with a `404.html` SPA fallback:

```bash
cd site
npm run build
# Upload dist/ to any static host
```

**Hugging Face Spaces** — push `dist/` contents to a static Space:
```bash
git clone https://huggingface.co/spaces/abdulwahed-sweden/abdulwahed-cv /tmp/hf
cp -r site/dist/* /tmp/hf/
cd /tmp/hf && git add -A && git commit -m "Deploy" && git push
```

## Contact

**Abdulwahed Mansour** — Stockholm, Sweden

- abdulwahed.sweden@gmail.com
- [linkedin.com/in/abdulwahed-sweden](https://www.linkedin.com/in/abdulwahed-sweden/)
- [github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden)

## License

All rights reserved. CV content and portfolio code are proprietary. Some referenced projects are in private repositories — access available upon request for interviews and due diligence.
