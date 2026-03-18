---
title: "Senior Rust Systems Engineer"
short: "Rust Engineer"
description: "Senior Rust Systems Engineer building high-performance async services, cryptographic protocols, and CLI tools with Tokio, Axum, and WASM. 5,700+ tests across production Rust codebases."
keywords: "Rust, Tokio, Axum, Systems Programming, async, WASM, Cryptography, CLI, Performance, Stockholm"
icon: "cpu"
tags: ["Rust", "Systems", "Async", "Tokio"]
slug: "02-rust-systems-engineer"
order: 2
---

## Professional Summary

Systems engineer specializing in Rust with extensive experience building high-performance, async-first applications — from HTTP servers and CLI toolkits to cryptographic protocol engines and forensics platforms. Proven track record delivering production-grade Rust code with comprehensive test coverage (5,700+ tests), zero-copy data processing, and memory-safe concurrent architectures using Tokio and Axum. Passionate about performance-critical systems, developer tooling, and security-first design.

---

## Core Competencies

- **Languages:** Rust (2021/2024 Edition), Python, TypeScript, Solidity, SQL
- **Rust Ecosystem:** Tokio, Axum, async-std, Serde, Clap, reqwest, rustls, HKDF, WASM
- **Systems Design:** Async-first architecture, zero-copy parsing, concurrent pipelines, plugin systems
- **Web Services:** REST APIs, WebSocket, MCP (Model Context Protocol), HTTP/2
- **Cryptography:** HKDF-SHA256, EIP-712 structured signing, key derivation hierarchies
- **Infrastructure:** Docker, GitHub Actions CI/CD, cross-platform builds (Linux/macOS/Windows)
- **Testing:** Property-based testing, fuzzing, integration suites, benchmark-driven optimization

---

## Selected Projects

### HuntKey — Intent-Based Sovereign Smart Account Protocol
**Rust · Solidity · ERC-4337 · HKDF-SHA256 · EIP-712 · 126 Tests**

- Engineered the Rust cryptographic backend for a 4-layer defense-in-depth account abstraction protocol with deterministic key derivation (HKDF-SHA256), chain-isolated session keys, and EIP-712 structured data signing
- Implemented 15-check on-chain validation pipeline where a single failed check reverts the entire transaction
- Built BIP-39 mnemonic-based hierarchical key management: root identity → action keys → ephemeral session keys
- [github.com/abdulwahed-sweden/huntkey](https://github.com/abdulwahed-sweden/huntkey)

### BTC Sentinel — Multi-Chain Forensic Intelligence Platform
**Rust · Zero-copy parsing · Async CLI · MITRE ATT&CK · 213 Tests**

- Built a professional-grade blockchain forensics platform in Rust with five core engine modules: pattern analysis (10+ heuristics), flow tracing, cluster analysis (Union-Find), watchlist scanning, and real-time mempool interception
- Achieved zero-copy parsing and zero-allocation hot paths for high-throughput Bitcoin transaction analysis
- Traced the $1.5B Bybit hack across 682 transactions and 42,479 addresses in 36 seconds
- [github.com/abdulwahed-sweden/Bitcoin-Sentinel](https://github.com/abdulwahed-sweden/Bitcoin-Sentinel)

### Polaris Chronos — Universal Prayer Time Engine
**Rust · WASM · Astronomy · Hugging Face Spaces · 109 Tests**

- Developed a high-precision solar position engine in Rust solving prayer time calculation in polar regions where all existing libraries fail (Midnight Sun, Polar Night)
- Compiled to WebAssembly for browser deployment, built REST API and full web dashboard, deployed on Hugging Face Spaces
- Implemented Odeh (2004) crescent visibility criterion and adaptive latitude projection algorithms
- [github.com/abdulwahed-sweden/polaris-chronos](https://github.com/abdulwahed-sweden/polaris-chronos)

### Chthonic — Modular Penetration Testing Framework
**Rust · Tokio · Async networking · Plugin architecture**

- Designed a next-generation security framework inspired by Metasploit, built from scratch in Rust with async-first networking (Tokio), modular plugin architecture via traits, and session management
- Implemented async TCP port scanner (10x faster than Ruby-based tools), HTTP header injection scanner with 30+ payloads, and interactive CLI with context-aware commands
- Single statically-linked binary (~5MB) supporting Linux, macOS, and Windows
- [github.com/abdulwahed-sweden/chthonic](https://github.com/abdulwahed-sweden/chthonic)

### Axum Web Application — Production Theme System
**Rust · Axum 0.8 · Tokio · Tailwind CSS · i18n**

- Built a production-ready web application with Axum featuring dark/light theme system (40+ CSS design tokens), full RTL/LTR internationalization (Arabic/English), and a comprehensive component library
- Implemented async handlers, middleware pipeline, and static asset serving with Tokio runtime
- [github.com/abdulwahed-sweden/axum-rust](https://github.com/abdulwahed-sweden/axum-rust)

### DeepSeek-Rust — Async AI API Client Library
**Rust · Tokio · reqwest · Serde · Builder Pattern**

- Published an async Rust client library for the DeepSeek AI API with full type safety, automatic exponential backoff retries, builder pattern API, and secure API key handling via the `secrecy` crate
- Supports Chat, Reasoner, and Coder model variants with token usage tracking
- [github.com/abdulwahed-sweden/deepseek-rust](https://github.com/abdulwahed-sweden/deepseek-rust)

### Additional Rust Projects

- **Rust Scraper Pro** — Production-grade web scraping library with multi-source support, processing pipelines, caching, rate limiting, and multiple output formats (JSON, CSV, SQLite, PostgreSQL)
- **Swiftline** — Minimal HTTP CLI with rustls TLS, JSON path extraction, stdin pipelines, cross-platform (Windows/macOS/Linux)
- **Rust CLI Toolkit** — Modular command-line toolkit with file operations, network utilities, task management, interactive shell with auto-completion, and macro system
- **Weather API** — High-performance REST API with Axum, MCP protocol integration for Claude Code, 40+ city endpoints, statistics and sorting

---

## Technical Profile

| Area | Technologies |
|------|-------------|
| Core Language | Rust (2021/2024 Edition), unsafe-free where possible |
| Async Runtime | Tokio, async-std |
| Web Frameworks | Axum, Actix-web |
| Serialization | Serde (JSON, TOML, Bincode) |
| Cryptography | HKDF-SHA256, EIP-712, BIP-39, rustls |
| CLI | Clap v4, colored output, interactive REPL |
| Compilation | WASM (wasm-pack), cross-compilation |
| Testing | 5,700+ tests, property-based, fuzzing, benchmarks |

---

## Education

Self-directed continuous learning in systems programming, cryptography, and distributed systems. 21+ public repositories, 208,000+ lines of production code, active open-source contributor.

---

## Languages

- Arabic — Native
- English — Professional working proficiency
- Swedish — Basic (actively learning)
