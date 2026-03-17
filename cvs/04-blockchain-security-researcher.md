# Abdulwahed Mansour

**Blockchain Security Researcher**

Stockholm, Sweden | abdulwahed.sweden@gmail.com | [LinkedIn](https://linkedin.com/in/abdulwahed-mansour) | [GitHub](https://github.com/abdulwahed-sweden)

---

## Professional Summary

Blockchain security researcher focused on DeFi protocol vulnerabilities, oracle manipulation defense, and economic exploit modeling. Discovered the ADS (Asymmetric Deficit Socialization) vulnerability class — ~$98.6M exposure across major lending protocols. Builds custom fuzzers, invariant proof frameworks, and mainnet fork exploit simulators to find vulnerabilities that static analyzers miss. Active auditor on Sherlock and Immunefi with findings in production protocols including Fluid DEX V2 and Moonwell.

---

## Core Competencies

- **Security Research:** Vulnerability discovery, economic exploit modeling, oracle manipulation analysis
- **Smart Contracts:** Solidity 0.8.x, EVM internals, ERC-4337, ERC-4626, EIP-1153
- **Security Tools:** Foundry, Slither, Echidna, Hypothesis, Custom invariant frameworks
- **Systems Engineering:** Rust, Python, TypeScript
- **Blockchain:** EVM, Bitcoin, Solana, DeFi protocol architecture, MEV research
- **Platforms:** Sherlock, Immunefi, Code4rena, HackerOne, Bugcrowd

---

## Original Research

### ADS (Asymmetric Deficit Socialization) — Novel Vulnerability Class

Discovered and formalized a systemic vulnerability in DeFi lending protocols where fee extraction occurs on accrued interest before verifying collectibility — treasury captures 100% of profits while depositors absorb 100% of losses.

| Protocol | Phantom Yield Exposure |
|----------|----------------------|
| Aave V4 | ~$96M |
| Morpho Blue | ~$2M |
| Curve crvUSD | ~$585K |
| **Total** | **$98.6M+** |

### Oracle Manipulation Defense — TickDriftGuardV4

Designed a dual-layer defense against Uniswap V3 tick drift oracle attacks using EIP-1153 transient storage. Proved on a $50M mainnet fork simulation — reduced exploitable tick drift from 20,985 to 0.

### Fluid Protocol Oracle Security Analysis

Comprehensive mainnet fork testing ($1M–$100M swap sizes) proving same-block oracle manipulation is infeasible against Fluid's architecture due to UniV3's pre-swap tick observation writes.

---

## Audit Track Record

| Contest / Program | Finding | Severity |
|-------------------|---------|----------|
| **Fluid DEX V2** (Sherlock) | Liquidation dust debt creates uncloseable positions | Low–Medium |
| **Fluid DEX V2** (Sherlock) | Smart Debt round-trip precision loss (1–2 wei leak) | Informational |
| **Fluid DEX V2** (Sherlock) | BigMath accounting mismatch (team-acknowledged DC#13) | Informational |
| **Moonwell / Mamo** | SlippagePriceChecker vulnerability | High |

---

## Blockchain Forensics Investigations

| Investigation | Scale | Outcome |
|---------------|-------|---------|
| **Bybit Hack** (DELTA STRIKE) | $1.5B · 682 txs · 42,479 addresses | Lazarus Group attribution, THORChain/Chainflip bridge tracing |
| **DSI Hack** | Decentralized Systems Inc | Full fund flow reconstruction |

---

## Selected Projects

### BTC Sentinel — Multi-Chain Forensic Intelligence Platform
**Rust · Zero-copy parsing · MITRE ATT&CK · AML · 213 Tests**

- Built a professional forensics platform with 5 core engines: pattern analysis (10+ heuristics), forensic flow tracing, cluster analysis (Union-Find), watchlist scanning, and real-time mempool interception
- Traced $1.5B Bybit hack in 36 seconds — identified Lazarus Group attribution and cross-bridge fund flows
- [github.com/abdulwahed-sweden/Bitcoin-Sentinel](https://github.com/abdulwahed-sweden/Bitcoin-Sentinel)

### Fluid DEX V2 — Security Architecture Review
**Solidity · Cross-module invariant analysis · 5-phase methodology**

- Independent line-by-line review covering Money Market Core, DEX V2 Base, and library modules
- Analyzed BigMath precision characteristics, reentrancy boundaries, and state consistency patterns
- [github.com/abdulwahed-sweden/fluid-dex-v2-security-review](https://github.com/abdulwahed-sweden/fluid-dex-v2-security-review)

### TickDriftGuardV4 — Oracle Manipulation Defense
**Solidity · EIP-1153 · Foundry · $50M Mainnet Fork Simulation**

- Dual-layer defense library blocking tick drift oracle attacks: transient storage (per-tx) + permanent storage (per-block)
- Validated with comprehensive mainnet fork simulations proving attack infeasibility
- [github.com/abdulwahed-sweden/fluid-tick-drift-guard](https://github.com/abdulwahed-sweden/fluid-tick-drift-guard)

### HuntKey — Account Abstraction Security Protocol
**Rust · Solidity · ERC-4337 · HKDF-SHA256 · 126 Tests**

- 4-layer defense-in-depth execution model with 15 sequential on-chain validation checks
- HKDF-derived single-use session keys eliminating entire classes of key compromise risk
- [github.com/abdulwahed-sweden/huntkey](https://github.com/abdulwahed-sweden/huntkey)

### Sunna Protocol — Invariant-Enforced DeFi
**Solidity · Foundry · 6 Constitutional Invariants · 124 Tests**

- Built around ADS vulnerability discovery — first protocol with mathematical proofs preventing phantom yield extraction
- Constitutional invariants that governance cannot override
- [github.com/abdulwahed-sweden/sunna-protocol](https://github.com/abdulwahed-sweden/sunna-protocol)

---

## Research Methodology

| Phase | Activity |
|-------|----------|
| 1. Architecture Review | System design analysis, trust boundaries, state flow mapping |
| 2. Invariant Identification | Define mathematical properties the protocol must maintain |
| 3. Attack Surface Analysis | Economic modeling, flash loan scenarios, oracle manipulation |
| 4. Dynamic Testing | Property-based fuzzing, mainnet fork simulations, exploit PoCs |
| 5. Verification | Invariant proof frameworks, regression test suites |

---

## Education

Self-directed research in cryptographic protocols, DeFi mechanism design, and formal verification. Published original vulnerability research (ADS class). 21+ repositories, 5,700+ tests, 208,000+ lines of code.

---

## Languages

- Arabic — Native
- English — Professional working proficiency
- Swedish — Basic (actively learning)
