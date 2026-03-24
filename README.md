# Abdulwahed Mansour

**Senior Backend Engineer & Security Engineer**

[![Portfolio](https://img.shields.io/badge/Portfolio-abdulwahed--mansour.dev-2563eb?style=flat-square)](https://abdulwahed-mansour.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-abdulwahed--sweden-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/abdulwahed-sweden/)
[![GitHub](https://img.shields.io/badge/GitHub-abdulwahed--sweden-181717?style=flat-square&logo=github)](https://github.com/abdulwahed-sweden)

Professional CV portfolio with 2 focused profiles — one for backend engineering, one for security engineering. Each profile is backed by real projects, production code, and verified research.

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

## Professional Profiles

| # | Profile | Focus |
|---|---------|-------|
| 01 | [Senior Backend Engineer (Python / Django)](cvs/01-senior-backend-engineer.md) | Django, FastAPI, APIs, databases, system design, reliability |
| 02 | [Security Engineer (Systems Security & Backend Protection)](cvs/02-security-engineer.md) | Vulnerability analysis, threat modeling, penetration testing, secure architecture |

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

- **2 focused CV profiles** rendered from markdown with full prose styling
- **Cover letter generator** with 3 role templates, CV attachment selection, compose/preview tabs, copy-to-clipboard
- **Printable resume** optimized for A4 / PDF export
- **Dark / light theme** with system preference detection and localStorage persistence
- **Private repository notice** on each CV page
- **Print-friendly** layout (Ctrl+P hides nav, buttons, notices)
- **Responsive** design with mobile navigation
- **Accessible** — ARIA labels, semantic HTML, keyboard navigation
- **SEO** — Open Graph, Twitter cards, canonical URL, theme-color

## Project Structure

```
abdulwahed-mansour-cv/
├── cvs/                          # 2 focused Markdown CVs (ATS-friendly)
│   ├── 01-senior-backend-engineer.md
│   └── 02-security-engineer.md
├── cover-letter.md               # General cover letter template
├── site/                         # Vite + React application
│   ├── public/                   # favicon, robots.txt
│   ├── src/
│   │   ├── components/           # Navigation, Footer
│   │   ├── contexts/             # ThemeContext (dark/light)
│   │   ├── data/cvs.ts           # CV metadata + markdown loader
│   │   └── pages/                # Home, CVPage, CoverLetter, PrintableCV, NotFound
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
├── .nvmrc                        # Node 24
└── README.md
```

## Deployment

Build produces a static `dist/` directory with a `404.html` SPA fallback:

```bash
cd site
npm run build
# Upload dist/ to any static host
```

## Contact

**Abdulwahed Mansour** — Stockholm, Sweden

- abdulwahed.mansour@gmail.com
- [linkedin.com/in/abdulwahed-sweden](https://www.linkedin.com/in/abdulwahed-sweden/)
- [github.com/abdulwahed-sweden](https://github.com/abdulwahed-sweden)

## License

All rights reserved. CV content and portfolio code are proprietary. Some referenced projects are in private repositories — access available upon request for interviews and due diligence.
