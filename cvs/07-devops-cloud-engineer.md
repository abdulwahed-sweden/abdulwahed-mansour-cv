# Abdulwahed Mansour

**DevOps & Cloud Infrastructure Engineer**

Stockholm, Sweden | abdulwahed.sweden@gmail.com | [LinkedIn](https://linkedin.com/in/abdulwahed-sweden) | [GitHub](https://github.com/abdulwahed-sweden)

---

## Professional Summary

DevOps engineer with hands-on experience designing containerized deployments, CI/CD pipelines, and cloud-native infrastructure for web services, APIs, and blockchain protocols. Builds reproducible environments with Docker, automates testing and deployment with GitHub Actions, and deploys to multiple cloud platforms (Vercel, Hugging Face Spaces, Docker-based hosting). Strong backend foundation in Python and Rust enables effective collaboration with development teams and infrastructure-as-code practices.

---

## Core Competencies

- **Containerization:** Docker, Docker Compose, multi-stage builds, isolated service architectures
- **CI/CD:** GitHub Actions, automated testing pipelines, security gates, code quality enforcement
- **Cloud Platforms:** Vercel, Hugging Face Spaces, Docker-based deployment
- **Databases:** PostgreSQL, SQLite, Redis, database containerization
- **Monitoring:** Logging pipelines, audit trails, HTTP request tracing
- **Languages:** Python, Rust, TypeScript, Bash, SQL
- **Security:** Container isolation, read-only database access, secret management, TLS
- **Frameworks:** Django, FastAPI, Axum (Rust), Next.js

---

## Selected Projects & Infrastructure Experience

### Amend Protocol — Multi-Chain Protocol Infrastructure
**Docker · GitHub Actions · Django · PostgreSQL · Multi-repo CI/CD**

- Designed and maintained infrastructure for a multi-chain DeFi protocol spanning 4 pillars: EVM contracts (Foundry), Solana programs (Anchor), security lab (Python), and operations dashboard (Django)
- Implemented CI/CD pipeline with security gates — invariant verification runs on every code change before merge
- Built Django 5.0 operations platform with PostgreSQL, audit trail logging, and compliance tracking
- Managed shared packages (`@amend/invariant-lib`, `@amend/common-types`, `@amend/test-utils`) across the monorepo
- [github.com/abdulwahed-sweden/amend](https://github.com/abdulwahed-sweden/amend)

### Docker MCP PostgreSQL — Secure Database Container
**Docker · Docker Compose · PostgreSQL · MCP · Python**

- Created a Dockerized read-only PostgreSQL server with strict access controls, enabling AI agents to safely query production-like databases via the Model Context Protocol
- Designed container isolation ensuring no write/delete operations can reach the database
- Integrated with LangChain for natural language to SQL translation
- [github.com/abdulwahed-sweden/docker-mcp-postgres-read](https://github.com/abdulwahed-sweden/docker-mcp-postgres-read)

### AuthProfile — Django with Docker & CI/CD
**Docker Compose · GitHub Actions · Django 5.2 · Ruff · PostgreSQL**

- Configured Docker Compose deployment for Django application with PostgreSQL database
- Set up GitHub Actions CI pipeline with automated testing, Ruff code quality enforcement, and build verification
- [github.com/abdulwahed-sweden/django-auth-profile](https://github.com/abdulwahed-sweden/django-auth-profile)

### Polaris Chronos — Docker + Hugging Face Deployment
**Docker · Hugging Face Spaces · Rust · WASM · REST API**

- Containerized a Rust web application with Docker for deployment on Hugging Face Spaces
- Configured app_port binding, SDK integration, and automated deployment pipeline
- Serving global users with high-precision prayer time calculations including polar regions
- Live at: abdulwahed-sweden-polaris-chronos.hf.space
- [github.com/abdulwahed-sweden/polaris-chronos](https://github.com/abdulwahed-sweden/polaris-chronos)

### AI Chatbot — Vercel Cloud Deployment
**Vercel · Next.js · Vercel Postgres · Vercel Blob · Environment Variables**

- Deployed Next.js application on Vercel with Postgres database, Blob storage, and environment variable management
- Configured NextAuth.js for production authentication with secret rotation
- [github.com/abdulwahed-sweden/deepseek-ai-chatbot](https://github.com/abdulwahed-sweden/deepseek-ai-chatbot)

### News Bot — Automated Pipeline Infrastructure
**Python · Scheduling · SQLite · Telegram API · DeepSeek API**

- Built an automated data pipeline with scheduling, deduplication via database tracking, and multi-service integration (news APIs → AI summarization → Telegram delivery)
- Designed for unattended operation with error handling and retry logic
- [github.com/abdulwahed-sweden/news_bot](https://github.com/abdulwahed-sweden/news_bot)

---

## Infrastructure Patterns

| Pattern | Implementation |
|---------|---------------|
| Container Isolation | Docker Compose with read-only DB access, network segmentation |
| CI/CD Pipelines | GitHub Actions with test → lint → security → deploy stages |
| Cloud Deployment | Vercel (Next.js), Hugging Face Spaces (Docker), self-hosted |
| Database Management | PostgreSQL containerization, migrations, seed scripts |
| Secret Management | Environment variables, `.env` files, Vercel secrets |
| Monitoring | HTTP request tracing, audit trail logging, compliance tracking |
| Multi-service | Monorepo with shared packages, cross-service test suites |

---

## Technical Profile

| Area | Technologies |
|------|-------------|
| Containers | Docker, Docker Compose, multi-stage builds |
| CI/CD | GitHub Actions, automated test suites, Ruff, security gates |
| Cloud | Vercel, Hugging Face Spaces, Docker hosting |
| Databases | PostgreSQL, SQLite, Redis |
| Languages | Python, Rust, TypeScript, Bash, SQL |
| OS | Linux, macOS |

---

## Education

Self-directed continuous learning in infrastructure engineering, containerization, and cloud-native architectures. 21+ public repositories with production-grade CI/CD pipelines and Docker configurations.

---

## Languages

- Arabic — Native
- English — Professional working proficiency
- Swedish — Basic (actively learning)
