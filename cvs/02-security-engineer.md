# Abdulwahed Mansour

**Security Engineer (Systems Security & Backend Protection)**

Stockholm, Sweden · +46 76 930 8145 · abdulwahed.mansour@gmail.com · [GitHub](https://github.com/abdulwahed-sweden)

---

## Summary

Security Engineer with a strong backend and systems engineering background. Focused on identifying vulnerabilities, hardening production systems, and building security tooling that addresses real-world risks — from authentication and API security to infrastructure protection and threat detection.

Experienced in vulnerability analysis, threat modeling, and building offensive/defensive tools in Python and Rust. Applies security thinking at every layer: application logic, data handling, network boundaries, and deployment infrastructure.

Background includes active security research on platforms like Immunefi, Sherlock, and Code4rena, with confirmed high-severity findings in production systems.

---

## Technical Skills

| Area | Technologies |
|------|-------------|
| Security Focus | Vulnerability analysis, threat modeling, secure architecture, penetration testing |
| Languages | Python, Rust, Bash, SQL, TypeScript |
| Backend Security | Authentication hardening, API security, input validation, rate limiting, CSRF/XSS/SSRF prevention |
| Infrastructure | Docker (container isolation), Linux hardening, TLS, secret management, CI/CD security gates |
| Offensive Tools | Custom scanners, fuzzers, injection detection, port scanning, exploit PoC development |
| Forensics | Transaction tracing, behavioral pattern analysis, MITRE ATT&CK mapping |
| Databases | PostgreSQL, SQLite, Redis — access control, query safety, read-only enforcement |

---

## Professional Experience

### Security Researcher — 2022 – Present
*Immunefi / Sherlock / Code4rena · Remote*

- Discovered high-severity vulnerabilities in production systems through manual code review and behavioral analysis
- Identified the ADS (Asymmetric Deficit Socialization) vulnerability class — ~$98.6M exposure across three major protocols
- Conducted independent security architecture reviews with a structured 5-phase methodology
- Focused on system behavior under edge conditions: concurrency, precision loss, state inconsistency, and access control failures

**Confirmed Findings**

| Program | Finding | Severity |
|---------|---------|----------|
| Moonwell / Mamo (Immunefi) | SlippagePriceChecker vulnerability | High |
| Fluid DEX V2 (Sherlock) | Liquidation dust debt → uncloseable positions | Low–Medium |
| Fluid DEX V2 (Sherlock) | Precision loss in round-trip operations | Informational |
| Fluid DEX V2 (Sherlock) | Accounting mismatch (team-acknowledged) | Informational |

### Independent Backend & Security Engineer — 2016 – Present
*Self-employed / Open Source · Stockholm, Sweden*

- Built backend systems with security as a first-class concern — auth flows, rate limiting, HSTS, CSRF protection, secure cookie handling
- Designed read-only database access patterns and container isolation for sensitive systems
- Applied secure coding practices across Python and Rust codebases
- Developed CI/CD pipelines with automated security gates and code quality enforcement

---

## Selected Projects

### Chthonic — Modular Penetration Testing Framework
*Rust, Tokio, async networking, plugin architecture*

- Built a security framework from scratch in Rust with async-first networking and modular plugin architecture
- Implemented async TCP port scanner with concurrent scanning and configurable timeouts
- Built HTTP header injection scanner testing 30+ attack payloads (Host header injection, cache poisoning, XSS via User-Agent/Referer)
- Session management with persistent connections and interactive CLI with context-aware commands

### HuntKits CLI — Security Automation Platform
*Python, CLI architecture, modular plugin system*

- Developed a large-scale security automation platform for vulnerability scanning and analysis workflows
- 25,000+ lines of code with 60+ tests and extensible plugin system
- Designed for reliability, parallel execution, and modular extensibility

### BTC Sentinel — Threat Detection & Forensic Analysis Platform
*Rust, zero-copy parsing, MITRE ATT&CK, behavioral heuristics, 213 tests*

- Built a high-performance forensic analysis platform with five detection engines: pattern analysis, flow tracing, cluster analysis (Union-Find), watchlist scanning, and real-time interception
- Applied MITRE ATT&CK framework for threat actor attribution and behavioral classification
- Achieved zero-copy parsing and zero-allocation hot paths for high-throughput analysis
- Used in real investigations: traced $1.5B in stolen funds across 682 transactions and 42,479 addresses in 36 seconds

### Django Auth Platform — Secure Backend Reference
*Python 3.12, Django, DRF, PostgreSQL, Docker*

- Built with security as the primary design constraint — role-based access, rate limiting, HSTS, secure cookies, CSRF protection
- Designed dynamic serializer logic to enforce data access boundaries per user role
- Production-hardened with reverse proxy support and automated security testing

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
Focused on systems security, vulnerability research, threat modeling, and secure architecture. Active daily learning across security tooling, backend hardening, and infrastructure protection.

---

## Languages

English — Professional · Swedish — Basic (actively learning) · Arabic — Native
