# Abdulwahed Mansour

**Smart Contract Security Auditor**

Stockholm, Sweden | abdulwahed.sweden@gmail.com | [LinkedIn](https://linkedin.com/in/abdulwahed-mansour) | [GitHub](https://github.com/abdulwahed-sweden)

---

## Professional Summary

Independent smart contract security researcher with a proven track record of finding vulnerabilities in production DeFi protocols. Discovered and formalized the ADS (Asymmetric Deficit Socialization) vulnerability class — a ~$98.6M phantom yield exposure affecting Aave V4, Morpho Blue, and Curve crvUSD. Active on Sherlock, Immunefi, and Code4rena audit platforms. Combines rigorous economic modeling with property-based fuzzing and formal invariant proofs to find what static analyzers miss. 5,700+ tests across Solidity and Rust security tooling.

---

## Core Competencies

- **Smart Contracts:** Solidity 0.8.x, EVM internals, OpenZeppelin 5.0, ERC-4337, ERC-4626
- **Security Tools:** Foundry (Forge/Cast), Slither, Echidna, Hypothesis, Custom fuzzers
- **Protocol Standards:** EIP-712, EIP-1153, Account Abstraction, DeFi vault patterns
- **Audit Platforms:** Sherlock, Immunefi, Code4rena, HackerOne, Bugcrowd, Intigriti
- **Languages:** Solidity, Rust, Python, TypeScript
- **Methodology:** Invariant testing, property-based fuzzing, formal verification, economic modeling

---

## Security Research & Audit Findings

### Vulnerability Discovery: ADS (Asymmetric Deficit Socialization)

Discovered and formalized a novel vulnerability class affecting fee extraction during unrealized loss periods in major DeFi lending protocols:

| Protocol | Phantom Yield Exposure | Share |
|----------|----------------------|-------|
| Aave V4 | ~$96M | 97.3% |
| Morpho Blue | ~$2M | 2.0% |
| Curve crvUSD | ~$585K | 0.6% |
| **Total** | **$98.6M+** | |

### Audit Contest Results

| Contest / Program | Finding | Severity |
|-------------------|---------|----------|
| **Fluid DEX V2** (Sherlock) | Liquidation dust debt creates uncloseable positions | Low–Medium |
| **Fluid DEX V2** (Sherlock) | Smart Debt round-trip precision loss (1–2 wei leak) | Informational |
| **Fluid DEX V2** (Sherlock) | BigMath accounting mismatch (team-acknowledged DC#13) | Informational |
| **Moonwell / Mamo** | SlippagePriceChecker vulnerability | High |

---

## Selected Projects

### Fluid DEX V2 — Independent Security Architecture Review
**Solidity · Foundry · Cross-module invariant analysis**

- Conducted comprehensive line-by-line security review of Fluid DEX V2 protocol covering Money Market Core (Operate, Callback, Liquidate), DEX V2 Base, and cross-module state consistency
- Analyzed BigMath precision trade-offs, reentrancy boundaries, and isolated collateral management patterns
- Documented 5 design observations, 8 code quality notes, and 9 informational findings using a rigorous 5-phase methodology
- [github.com/abdulwahed-sweden/fluid-dex-v2-security-review](https://github.com/abdulwahed-sweden/fluid-dex-v2-security-review)

### TickDriftGuardV4 — Oracle Manipulation Defense Library
**Solidity · EIP-1153 · Foundry · Mainnet Fork Testing**

- Designed and implemented a gas-optimized Solidity library preventing Uniswap V3 tick drift oracle manipulation using dual-layer defense: EIP-1153 transient storage (per-tx) + permanent storage (per-block)
- Proved effectiveness on a $50M mainnet fork flash loan simulation — attack completely blocked (tick drift: 20,985 → blocked at 290)
- Tested against Fluid Protocol's live ETH/USDC vault — confirmed exploit infeasibility across all parameters ($1M–$100M swap sizes)
- [github.com/abdulwahed-sweden/fluid-tick-drift-guard](https://github.com/abdulwahed-sweden/fluid-tick-drift-guard)

### HuntKey — ERC-4337 Account Abstraction Security
**Solidity · ERC-4337 · EIP-712 · 15-check validation · 126 Tests**

- Built a 4-layer defense-in-depth smart account protocol with 15 sequential on-chain validation checks per transaction
- Implemented delegation certificates, session key scoping (function selector + value cap + expiration), and guardian-based recovery with 48h timelock
- [github.com/abdulwahed-sweden/huntkey](https://github.com/abdulwahed-sweden/huntkey)

### Sunna Protocol — DeFi Invariant Enforcement
**Solidity · Foundry · Invariant Testing · 124 Tests**

- Designed 6 mathematical invariants (Solvency Equilibrium, Phantom Yield Prevention, Shared Deficit, Claimable Yield Authenticity, Conservation of Holdings, Deficit Floor Bound) that governance cannot override
- Built ERC-4626 adapter (Sunna Shield) that forces invariants onto existing protocols without their cooperation
- [github.com/abdulwahed-sweden/sunna-protocol](https://github.com/abdulwahed-sweden/sunna-protocol)

### Amend Protocol — Multi-Chain Vault Security
**Solidity · Rust (Anchor) · ERC-4626 · 1,630 Tests**

- Architected cross-chain vault protocol (EVM + Solana) with EthicsGuard and FairFeeGuard — on-chain invariants encoding ethical constraints that governance cannot override
- Built ferox-pro v2.1.0 invariant verification framework running on every code change as a CI/CD stage
- [github.com/abdulwahed-sweden/amend](https://github.com/abdulwahed-sweden/amend)

---

## Security Tooling & Methodology

| Category | Tools & Approach |
|----------|-----------------|
| Static Analysis | Slither, custom pattern detectors |
| Dynamic Testing | Foundry fuzz testing, Echidna, Hypothesis |
| Invariant Verification | Custom invariant frameworks, property-based testing |
| Economic Modeling | Mainnet fork simulations, flash loan attack modeling |
| Code Review | Line-by-line cross-module analysis, 5-phase methodology |

---

## Education

Self-directed deep study in cryptographic protocols, DeFi mechanism design, and formal verification. Published security research on ADS vulnerability class. 21+ repositories, 208,000+ lines of code.

---

## Languages

- Arabic — Native
- English — Professional working proficiency
- Swedish — Basic (actively learning)
