---
title: "AI-Integrated Backend Engineer"
short: "AI Backend"
description: "AI-Integrated Backend Engineer building production systems with LLM APIs, Model Context Protocol, and AI-powered data pipelines. DeepSeek, OpenAI, Anthropic, LangChain."
keywords: "AI, LLM, MCP, LangChain, DeepSeek, OpenAI, FastAPI, Rust, Python, Backend, Stockholm"
icon: "brain"
tags: ["AI", "LLM", "Python", "MCP"]
slug: "10-ai-integrated-backend-engineer"
order: 10
---

## Professional Summary

Backend engineer specializing in AI integration — building production systems that connect LLM APIs, Model Context Protocol (MCP) servers, and AI-powered data pipelines with robust backend infrastructure. Developed AI chatbots, natural language database interfaces, automated content pipelines, and Rust client libraries for AI APIs. Experienced with the full AI application stack: LLM API integration, RAG patterns, prompt engineering, and deploying AI-powered services on cloud platforms. Strong backend foundation in Python (FastAPI, Django) and Rust (Axum, Tokio).

---

## Core Competencies

- **AI Integration:** LLM APIs (DeepSeek, OpenAI, Anthropic, Google Gemini), Model Context Protocol (MCP)
- **AI Frameworks:** Vercel AI SDK, LangChain, SQLDatabaseChain
- **Backend:** Python (FastAPI, Django), Rust (Axum, Tokio), TypeScript (Next.js)
- **Databases:** PostgreSQL, SQLite, Redis, Vercel Postgres
- **Infrastructure:** Docker, Vercel, Hugging Face Spaces, GitHub Actions
- **API Design:** REST, MCP, WebSocket, JWT, OpenAPI
- **Data Processing:** Web scraping, NLP pipelines, content summarization, deduplication

---

## Selected Projects

### DeepSeek-Rust — Async AI API Client Library
**Rust · Tokio · reqwest · Serde · Builder Pattern**

- Published an async Rust client library for the DeepSeek AI API with full type safety, automatic exponential backoff retries, and secure API key handling
- Supports multiple model variants (Chat, Reasoner, Coder) with token usage tracking for cost management
- Builder pattern API with method chaining for ergonomic usage
- [github.com/abdulwahed-sweden/deepseek-rust](https://github.com/abdulwahed-sweden/deepseek-rust)

### AI Chatbot — Multi-Provider Chat Application
**Next.js 14 · TypeScript · Vercel AI SDK · PostgreSQL · NextAuth.js**

- Built and deployed an AI chatbot with Next.js App Router supporting multiple LLM providers (Google Gemini, OpenAI, Anthropic, Cohere) via Vercel AI SDK's unified API
- Implemented chat persistence with Vercel Postgres, file attachments with Blob storage, and secure authentication
- Server-side rendering with React Server Components for optimal performance
- Live deployment: deepseek-ai-chatbot-zeta.vercel.app
- [github.com/abdulwahed-sweden/deepseek-ai-chatbot](https://github.com/abdulwahed-sweden/deepseek-ai-chatbot)

### Docker MCP PostgreSQL — AI Agent Database Interface
**Python · Docker · PostgreSQL · MCP · LangChain**

- Created a secure MCP server enabling AI agents to query PostgreSQL databases via natural language
- Docker-isolated containers with read-only safety preventing accidental writes/deletes
- Integrated LangChain SQLDatabaseChain for natural language → SQL translation with validation
- [github.com/abdulwahed-sweden/docker-mcp-postgres-read](https://github.com/abdulwahed-sweden/docker-mcp-postgres-read)

### Weather API with MCP Integration — Claude Code Compatible
**Rust · Axum · Tokio · MCP · REST API**

- Built a high-performance REST API in Rust with full Model Context Protocol integration for Claude Code Desktop
- MCP tool provider endpoint (`/mcp/tool/weather_info`) with standardized ISO 8601 responses and validation
- Auto-detected by Claude Code Desktop on localhost — zero configuration AI assistant integration
- [github.com/abdulwahed-sweden/weather_api_rust](https://github.com/abdulwahed-sweden/weather_api_rust)

### News Aggregation Pipeline — AI-Powered Content Processing
**Python · DeepSeek API · Telegram Bot · SQLite**

- Automated pipeline fetching news from multiple sources, deduplicating via database tracking, summarizing with DeepSeek AI, and delivering to Telegram channels
- Modular architecture: fetcher → summarizer → sender with independent error handling
- [github.com/abdulwahed-sweden/news_bot](https://github.com/abdulwahed-sweden/news_bot)

### Rust Scraper Pro — AI-Ready Data Collection
**Rust · Tokio · Multi-source · Processing Pipelines**

- Production-grade web scraping library with validation/normalization/deduplication pipeline, intelligent caching, rate limiting, and multiple output formats (JSON, CSV, database)
- Designed for feeding AI training data and RAG pipelines
- [github.com/abdulwahed-sweden/rust-scraper-pro](https://github.com/abdulwahed-sweden/rust-scraper-pro)

### Polaris Chronos — AI-Deployable Computation Engine
**Rust · WASM · Hugging Face Spaces · Docker · REST API**

- Deployed computational Rust engine on Hugging Face Spaces (AI/ML platform) with REST API and web dashboard
- Compiled to WebAssembly for browser-based inference-like deployment
- [github.com/abdulwahed-sweden/polaris-chronos](https://github.com/abdulwahed-sweden/polaris-chronos)

---

## AI Integration Patterns

| Pattern | Implementation |
|---------|---------------|
| LLM API Client | Rust async client library with retries, type safety, token tracking |
| Multi-Provider | Unified API supporting 4+ LLM providers via Vercel AI SDK |
| MCP Protocol | Server & client implementations for AI-tool interoperability |
| NL → SQL | LangChain + PostgreSQL with read-only safety constraints |
| Content Pipeline | Fetch → Deduplicate → AI Summarize → Deliver |
| Data Collection | Production scraping with caching, rate limiting, multiple formats |

---

## Technical Profile

| Area | Technologies |
|------|-------------|
| AI/LLM | DeepSeek, OpenAI, Anthropic, Google Gemini, Vercel AI SDK |
| AI Frameworks | LangChain, MCP, WASM inference |
| Backend | FastAPI, Django, Axum (Rust), Next.js |
| Databases | PostgreSQL, SQLite, Redis, Vercel Postgres |
| Infrastructure | Docker, Vercel, Hugging Face Spaces, GitHub Actions |
| Data | Web scraping, NLP, content pipelines, deduplication |

---

## Education

Self-directed continuous learning in AI systems integration, backend architecture, and distributed systems. 21+ public repositories, 208,000+ lines of production code.

---

## Languages

- Arabic — Native
- English — Professional working proficiency
- Swedish — Basic (actively learning)
