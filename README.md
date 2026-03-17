# Abdulwahed Mansour — Portfolio & CV Collection

Multi-variant CV portfolio with a premium static website, optimized for the Swedish tech job market. Each CV targets a specific specialization backed by real projects from [github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden).

## Live Site

Built with **Astro 6** + **Tailwind CSS 4**, using the Polaris Chronos design system (Inter + Plus Jakarta Sans + JetBrains Mono).

```bash
cd site
npm install
npm run build     # Static build → site/dist/
npm run preview   # Preview at localhost:4321
```

**Requires Node.js 22+**

## CV Variants

| # | Profile | Target Role | Accent |
|---|---------|-------------|--------|
| 01 | [Python Backend Architect](cvs/01-python-backend-architect.md) | Senior Python/FastAPI/Django backend | Blue |
| 02 | [Rust Systems Engineer](cvs/02-rust-systems-engineer.md) | Rust systems, async services, CLI tools | Orange |
| 03 | [Smart Contract Security Auditor](cvs/03-smart-contract-security-auditor.md) | Solidity auditing, DeFi security, bug bounty | Red |
| 04 | [Blockchain Security Researcher](cvs/04-blockchain-security-researcher.md) | Vulnerability research, protocol analysis, MEV | Purple |
| 05 | [DeFi / Islamic Finance Protocol Engineer](cvs/05-defi-islamic-finance-protocol-engineer.md) | DeFi protocol design, Shariah-compliant finance | Green |
| 06 | [Full-Stack Web Developer](cvs/06-fullstack-web-developer.md) | Django + Vue/React, full-stack applications | Cyan |
| 07 | [DevOps & Cloud Engineer](cvs/07-devops-cloud-engineer.md) | Docker, CI/CD, cloud deployment, infrastructure | Violet |
| 08 | [Security Engineer / Pentester](cvs/08-security-engineer-pentester.md) | Penetration testing, security tools, bug bounty | Rose |
| 09 | [Blockchain Forensics Specialist](cvs/09-blockchain-forensics-specialist.md) | On-chain investigations, AML, threat intelligence | Yellow |
| 10 | [AI-Integrated Backend Engineer](cvs/10-ai-integrated-backend-engineer.md) | LLM integration, MCP, AI-powered pipelines | Teal |

## Key Numbers

- **21+ public repositories** across Rust, Solidity, Python, and TypeScript
- **208,000+ lines of code** with **5,700+ tests**
- **$98.6M** vulnerability exposure discovered (ADS class)
- **$1.5B** Bybit hack traced in 36 seconds

## Project Structure

```
abdulwahed-mansour-cv/
├── cvs/                          # Raw Markdown CVs (ATS-friendly)
│   ├── 01-python-backend-architect.md
│   ├── 02-rust-systems-engineer.md
│   └── ... (10 variants)
├── site/                         # Astro portfolio website
│   ├── src/
│   │   ├── content/cvs/          # CVs with frontmatter (site source)
│   │   ├── components/           # SEO, Nav, Footer
│   │   ├── layouts/              # BaseLayout
│   │   ├── pages/                # index + dynamic /cv/[slug]
│   │   └── styles/global.css     # Polaris design system
│   ├── dist/                     # Built static site (11 pages)
│   └── package.json
└── README.md
```

## Site Features

- **11 static pages** — zero client-side JS (except mobile menu)
- **Per-page SEO** — unique title, description, keywords, OG tags, Twitter Cards, canonical URLs
- **Polaris design system** — Inter body, Plus Jakarta Sans headings, JetBrains Mono code
- **Light theme** — clean `#f8f9fb` background, dark text, per-CV accent colors
- **Print-friendly** — Ctrl+P hides nav/footer
- **Responsive** — mobile nav with 2-column dropdown
- **ATS-optimized** — Markdown CVs convert to PDF/DOCX for job platforms

## Contact

- **Email:** abdulwahed.sweden@gmail.com
- **LinkedIn:** [abdulwahed-mansour](https://linkedin.com/in/abdulwahed-mansour)
- **GitHub:** [abdulwahed-sweden](https://github.com/abdulwahed-sweden)
- **Location:** Stockholm, Sweden
