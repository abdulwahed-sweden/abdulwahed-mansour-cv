---
title: "Blockchain Forensics & Intelligence Analyst"
short: "Forensics Analyst"
description: "Blockchain Forensics Specialist who traced the $1.5B Bybit hack in 36 seconds. Built multi-chain intelligence platform with MITRE ATT&CK mapping and AML tooling."
keywords: "Blockchain Forensics, AML, MITRE ATT&CK, Bitcoin, Ethereum, Threat Intelligence, Fund Tracing, Compliance, Stockholm"
icon: "eye"
accent: "#eab308"
slug: "09-blockchain-forensics-specialist"
order: 9
---

## Professional Summary

Blockchain forensics specialist building intelligence platforms for tracing criminal fund flows across Bitcoin and Ethereum. Developed BTC Sentinel — a multi-chain forensics platform that traced the $1.5B Bybit hack in 36 seconds, identifying Lazarus Group attribution and cross-bridge fund movements through THORChain and Chainflip. Combines Rust systems engineering (zero-copy parsing, async mempool interception) with MITRE ATT&CK threat intelligence mapping and AML compliance tooling. Deep understanding of DeFi protocol vulnerabilities and exploit patterns.

---

## Core Competencies

- **Blockchain Forensics:** On-chain transaction tracing, fund flow reconstruction, entity clustering
- **Threat Intelligence:** MITRE ATT&CK mapping, threat actor attribution, TTPs documentation
- **AML/Compliance:** Anti-money laundering analysis, suspicious transaction detection, bridge tracing
- **Blockchain Protocols:** Bitcoin, Ethereum, EVM chains, Solana, THORChain, Chainflip
- **DeFi Security:** Protocol vulnerability analysis, MEV research, oracle manipulation detection
- **Tools & Languages:** Rust, Python, Solidity, Foundry
- **Investigation Methods:** Cluster analysis (Union-Find), heuristic-based pattern detection, mempool monitoring

---

## Forensics Investigations

### Bybit Hack — Operation DELTA STRIKE
**$1.5B · 682 transactions · 42,479 addresses**

- Conducted comprehensive forensic analysis of the largest cryptocurrency theft, tracing fund flows across Bitcoin and Ethereum networks
- Identified Lazarus Group (DPRK state-sponsored) as the threat actor through behavioral pattern analysis and transaction timing correlation
- Traced stolen funds through cross-bridge movements via THORChain and Chainflip decentralized bridges
- Platform completed initial trace in 36 seconds using optimized Rust forensics engine

### DSI Hack — Decentralized Systems Inc
- Full fund flow reconstruction from initial exploit through laundering stages
- Complete evidence chain suitable for law enforcement reporting

---

## Flagship Project: BTC Sentinel

### Multi-Chain Forensic Intelligence Platform
**Rust · Python · Solidity · MITRE ATT&CK · 213 Tests**

Professional-grade forensics platform spanning Bitcoin and Ethereum with five specialized engine modules:

| Engine | Function | Technology |
|--------|----------|------------|
| **Pattern Engine** | 10+ behavioral heuristics for suspicious activity detection | Rust, zero-copy parsing |
| **Forensics Tracer** | Fund flow reconstruction, temporal analysis, entity classification | Rust, graph algorithms |
| **Cluster Engine** | Address clustering via Union-Find for entity identification | Rust, zero-allocation |
| **Sentinel Watch** | Real-time mempool interception for live threat detection | Rust, async polling/WebSocket |
| **Watchlist Scanner** | Known threat actor address matching against live transactions | Rust, Clap v4 CLI |

**Ethereum Module:**
- Aave V3 liquidation research across 33,827 on-chain events
- Solidity/Hardhat MEV simulation environment for Ethereum mainnet and Base L2
- Python forensic analysis scripts for large-scale data processing

**Performance:**
- Zero-copy parsing and zero-allocation hot paths
- Single statically-linked binary
- Cross-platform (Linux, macOS, Windows)

[github.com/abdulwahed-sweden/Bitcoin-Sentinel](https://github.com/abdulwahed-sweden/Bitcoin-Sentinel)

---

## Related Security Research

### ADS Vulnerability Discovery
- Identified ~$98.6M phantom yield exposure across Aave V4, Morpho Blue, and Curve crvUSD — relevant to understanding DeFi exploit economics

### Oracle Manipulation Analysis
- Built TickDriftGuardV4 — dual-layer defense against Uniswap V3 price oracle attacks
- Comprehensive mainnet fork testing proving manipulation infeasibility across $1M–$100M attack scenarios

### Fluid DEX V2 Audit (Sherlock)
- Independent security review identifying liquidation dust debt, precision loss, and accounting mismatches

### DeFi Protocol Security Auditing
- Active on Sherlock, Immunefi, Code4rena — found High severity vulnerability in Moonwell/Mamo

---

## Additional Projects

### HuntKey — Account Security Protocol
**Rust · Solidity · ERC-4337 · 126 Tests**
- Intent-based smart account with 4-layer defense — relevant to secure wallet/custody infrastructure

### Sunna Protocol — DeFi Invariant Enforcement
**Solidity · Foundry · 124 Tests**
- Constitutional invariants preventing phantom yield extraction — built to counter ADS vulnerability class

---

## Technical Profile

| Area | Technologies |
|------|-------------|
| Forensics | Transaction tracing, fund flow graphs, entity clustering, bridge tracing |
| Threat Intelligence | MITRE ATT&CK, threat actor TTPs, behavioral heuristics |
| AML | Suspicious activity detection, watchlist scanning, compliance reporting |
| Blockchain | Bitcoin, Ethereum, Solana, THORChain, Chainflip, DeFi protocols |
| Engineering | Rust (zero-copy, async), Python, Solidity, graph algorithms |

---

## Education

Self-directed deep study in blockchain forensics, cryptographic protocols, and DeFi security. Published original vulnerability research. 21+ repositories, 208,000+ lines of code.

---

## Languages

- Arabic — Native
- English — Professional working proficiency
- Swedish — Basic (actively learning)
