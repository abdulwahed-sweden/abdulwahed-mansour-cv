# Abdulwahed Mansour

**DeFi Protocol Engineer — Islamic Finance & Ethical DeFi**

Stockholm, Sweden | abdulwahed.sweden@gmail.com | [LinkedIn](https://linkedin.com/in/abdulwahed-mansour) | [GitHub](https://github.com/abdulwahed-sweden)

---

## Professional Summary

DeFi protocol architect pioneering Shariah-compliant decentralized finance infrastructure. Designed and built the world's first on-chain effort measurement system (JHD units), constitutional invariant enforcement that governance cannot override, and the first protocol to mathematically eliminate the ADS vulnerability class (~$98.6M exposure). Deep expertise in ERC-4626 vault architecture, profit-loss sharing mechanisms, multi-chain deployment (EVM + Solana), and formal invariant verification. 1,630+ tests across production DeFi code.

---

## Core Competencies

- **Protocol Design:** DeFi vaults, lending protocols, ERC-4626, profit-loss sharing, tokenomics
- **Smart Contracts:** Solidity 0.8.x, Anchor (Solana), OpenZeppelin 5.0, Foundry
- **Security:** Invariant testing, property-based fuzzing, economic exploit modeling, audit review
- **Islamic Finance:** Mudaraba, Ghunm bil-Ghurm (risk-sharing), Takaful, Shariah compliance
- **Systems:** Rust, Python, TypeScript
- **Infrastructure:** Multi-chain architecture (EVM + Solana), CI/CD with security gates

---

## Selected Projects

### Sunna Protocol — Shariah-Compliant DeFi Infrastructure
**Solidity · Foundry · Islamic Finance · ERC-4626 · 124 Tests**

Built around the ADS vulnerability class discovered in major lending protocols (~$98.6M exposure). First DeFi protocol with constitutional invariant enforcement and on-chain effort measurement.

**4-Layer Architecture:**

| Layer | Component | Innovation |
|-------|-----------|------------|
| **Layer 1** | Sunna Core | 6 mathematical invariants (SE-1, PY-1, SD-1, CLA-1, CHC-1, DFB-1) — cannot be bypassed by governance |
| **Layer 2** | Sunna Shield | ERC-4626 adapter forcing Sunna invariants onto existing protocols without cooperation |
| **Layer 3** | Sunna Mudaraba | World's first on-chain effort measurement (JHD units) with burned effort tracking |
| **Layer 4** | $HELAL Governance | Ethical governance — can adjust parameters but cannot override constitutional invariants |

**Key Innovations:**
- **JHD (Effort Units):** On-chain measurement of manager effort (trades, reports, rebalancing) — permanently burned when projects fail (enforcing risk-sharing)
- **Efficiency Ratio:** `(Profit × 100) / JHD` — quantitative manager performance metric
- **ADS Prevention:** Phantom Yield Prevention invariant mathematically eliminates fee extraction on unrealized gains
- [github.com/abdulwahed-sweden/sunna-protocol](https://github.com/abdulwahed-sweden/sunna-protocol)

### Amend Protocol — Multi-Chain DeFi Vault Platform
**Solidity · Rust (Anchor) · ERC-4626 · Django · 1,630 Tests**

- Architected cross-chain vault protocol spanning EVM (Base) and Solana with ERC-4626 tokenized vaults
- Introduced EthicsGuard and FairFeeGuard — on-chain invariant constraints encoding ethical principles that no governance vote can override
- Built ferox-pro v2.1.0 invariant verification framework integrated into CI/CD pipeline
- Operations dashboard (Django 5.0) with audit trail, compliance tracking, and protocol monitoring

| Pillar | Technology | Tests |
|--------|-----------|-------|
| Protocol (EVM) | Solidity 0.8.20, Foundry, Base | 800+ |
| Protocol (Solana) | Anchor 0.32.1, SPL tokens | 400+ |
| Security Lab | ferox-pro v2.1.0, Python | 300+ |
| Operations | Django 5.0, PostgreSQL | 130+ |

- [github.com/abdulwahed-sweden/amend](https://github.com/abdulwahed-sweden/amend)

### HuntKey — Account Abstraction for DeFi
**Solidity · Rust · ERC-4337 · EIP-712 · 126 Tests**

- Built intent-based smart account protocol enabling constrained DeFi operations — users never sign raw transaction bytes
- Session keys scoped by function selector, value cap, and expiration — ideal for automated DeFi strategies
- [github.com/abdulwahed-sweden/huntkey](https://github.com/abdulwahed-sweden/huntkey)

### TickDriftGuardV4 — Oracle Security for DeFi
**Solidity · EIP-1153 · Foundry · $50M Mainnet Fork**

- Gas-optimized defense against oracle manipulation — critical for any DeFi protocol using Uniswap V3 price feeds
- Dual-layer (transient + permanent storage) defense proven on mainnet fork simulations
- [github.com/abdulwahed-sweden/fluid-tick-drift-guard](https://github.com/abdulwahed-sweden/fluid-tick-drift-guard)

---

## Original Research

### ADS Vulnerability Class (Asymmetric Deficit Socialization)
- Discovered systemic vulnerability where DeFi protocols extract fees on accrued interest before verifying collectibility
- Quantified ~$98.6M phantom yield exposure across Aave V4 ($96M), Morpho Blue ($2M), Curve crvUSD ($585K)
- Designed and implemented mathematical countermeasures (Sunna Protocol invariants)

---

## Technical Profile

| Area | Technologies |
|------|-------------|
| Protocol Design | ERC-4626 vaults, Mudaraba profit-sharing, Takaful buffer |
| Smart Contracts | Solidity 0.8.x, Anchor (Solana), OpenZeppelin 5.0 |
| Security | Foundry fuzzing, invariant testing, mainnet fork simulations |
| Infrastructure | Multi-chain (EVM + Solana), Django ops dashboard, CI/CD |
| Islamic Finance | JHD effort units, Ghunm bil-Ghurm, constitutional governance |

---

## Education

Self-directed deep study in DeFi mechanism design, Islamic finance principles, cryptographic protocols, and formal verification. Published original vulnerability research. 21+ repositories, 208,000+ lines of code.

---

## Languages

- Arabic — Native
- English — Professional working proficiency
- Swedish — Basic (actively learning)
