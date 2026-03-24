# Abdulwahed Mansour

**Senior Backend Engineer (Python / Django)**

Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com · [GitHub](https://github.com/abdulwahed-sweden)

---

## Summary

Senior Backend Engineer with 9+ years of experience building reliable, scalable systems in cloud environments. Strong focus on Python, Django, and system design, with hands-on experience delivering production-ready backend services end-to-end.

Experienced in designing systems that handle real-world constraints — concurrency, fairness, and reliability under load. Comfortable working across backend, infrastructure, and DevOps to ensure stable and maintainable systems.

Brings a security-conscious mindset and a strong sense of ownership, with a preference for simple, deterministic solutions that can be explained, tested, and trusted.

---

## Technical Skills

| Area | Technologies |
|------|-------------|
| Languages | Python, TypeScript (Node.js), Rust, Bash, SQL |
| Backend | Django, FastAPI, DRF, Celery, REST APIs, Microservices |
| Databases | PostgreSQL, MySQL, SQLite, Redis, Elasticsearch — schema design, query optimization, migrations |
| DevOps & Cloud | AWS, GCP, Azure (core services) — Docker, Terraform (basic–intermediate), GitHub Actions CI/CD |
| Monitoring | Logging, debugging, performance tuning, system observability |
| Security | Application security, threat modeling, secure system design |
| AI Integration | OpenAI, Claude, Mistral, Ollama — LLM pipelines, MCP server/client integration |

---

## Professional Experience

### Independent Backend & DevOps Engineer — 2016 – Present
*Self-employed / Open Source · Stockholm, Sweden*

Worked on multiple backend and infrastructure-focused projects, building and maintaining systems from development to production.

**Key Contributions**

- Designed and implemented backend systems using Python (Django, FastAPI)
- Built scalable services with focus on correctness, concurrency control, and reliability
- Developed and maintained cloud-based infrastructure across AWS, GCP, and Azure
- Implemented CI/CD pipelines and automated deployment workflows
- Containerized applications using Docker and production-ready configurations
- Designed and optimized relational databases (PostgreSQL, MySQL, SQLite)
- Improved system performance and stability through debugging and tuning
- Applied security best practices across application and infrastructure layers

### Security Researcher (Part-time) — 2022 – Present
*Immunefi / Sherlock / Code4rena · Remote*

- Conducted security reviews of complex distributed systems
- Identified system-level vulnerabilities and edge-case failures
- Focused on system behavior, risk analysis, and failure modes
- Applied security thinking to improve system architecture and design decisions

---

## Selected Projects

### Hyra — Rental Queue Management Engine `NEW`
*Python 3.12, Django 4.2, DRF, PostgreSQL, Elasticsearch, Redis, Celery, Docker*

- Designed a queue processing engine for the Swedish rental housing market (bostadskö) with atomic transactions, row-level locking, and three configurable ranking algorithms (points, first-come, lottery)
- Built eligibility pipeline with six priority-ordered rules (income verification, credit scoring, BankID, Kronofogden debt checks) — deterministic, auditable, and independently testable
- Implemented Elasticsearch full-text search with fuzzy matching, weighted fields, and aggregations — with silent PostgreSQL ILIKE fallback ensuring zero downtime
- Built async webhook delivery system with HMAC-SHA256 signing and 7-level exponential backoff retry (5 min → 7 days)
- Redis-cached stats endpoint with graceful degradation. Full Docker Compose stack (PostgreSQL, Redis, ES, Celery). 59 automated tests, CI/CD pipeline

### Django Auth Platform — Production-Ready Backend System
*Python 3.12, Django, DRF, PostgreSQL, Docker, GitHub Actions*

- Built a production-ready backend supporting both REST APIs and server-rendered views
- Implemented role-based data access with dynamic serializer logic
- Designed rate limiting and authentication flows for security and stability
- Applied production hardening: HSTS, secure cookies, CSRF, reverse proxy support
- Fully containerized with CI/CD and automated testing (50+ tests)

### BookFlow — Appointment Booking API
*Python, FastAPI, SQLAlchemy, JWT*

- Designed a clean REST API with role-based access control
- Implemented booking conflict prevention and lifecycle management
- Structured architecture separating business logic and API layers

### Docker MCP PostgreSQL Server — AI-to-Database Integration
*Python, PostgreSQL, Docker, OpenAI, MCP Protocol*

- Built a system connecting natural language queries to SQL safely
- Enforced read-only access at both database and application levels
- Designed fallback mechanisms between AI-generated and manual queries

### Django Sweden Enterprise Template
*Python, Django, PostgreSQL, BankID, Swish, GDPR*

- Built a production-ready backend tailored for the Swedish market
- Integrated BankID authentication, Swish payments, and VAT logic
- Designed GDPR-aware data structures and workflows

### News Bot — Automated Content Pipeline
*Python, BeautifulSoup4, DeepSeek API, SQLite, Telegram*

- Built a three-stage pipeline: scrape → AI summarisation → Telegram delivery
- Implemented deduplication, scheduling, and rate-limit-aware delivery

---

## Education & Professional Development

### Software Engineer Equivalency Certification — 2010
*Linköping University · Data Föreningen Sverige · Östergötlands Läns Landsting*

Completed formal six-month competency evaluation — officially certified as equivalent to a university-trained Software Engineer.

### Université Pierre et Marie Curie — Paris 6 — 2004
Graduate Studies

### Al-Azhar University — Palestine — 1999
Technical Engineering

### Continuous Learning
Focused on systems design, backend engineering, security, and modern infrastructure. Certifications from Udemy and other platforms. Active daily learning across Python ecosystem, AI integration, and cloud architecture.

---

## Languages

English — Professional · Swedish — Basic (actively learning) · Arabic — Native
