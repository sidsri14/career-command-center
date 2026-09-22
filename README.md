# Career & Hackathon Command Center

**Operational hub for the Web3 bounty/hackathon pipeline — 24 production-grade deliverables, 23 public repos, and a Tier-1 ATS resume (98.2/100).** One dashboard to run the full job-search + bounty portfolio as a system.

## Tabs

| View | What it runs |
|---|---|
| **Target Companies** | Hiring intelligence on target employers (Anza/Solana Core, Helius, Pyth/Douro, Superteam Hubs) — roles, salary ranges, why-fit, mapped to the best portfolio project, and a pre-written founder/CTO outreach DM per company (copy-to-clipboard). |
| **Outreach Studio** | Scratchpad for direct DMs to founders/CTOs backed by the public-repo proof. |
| **Portfolio Gallery** | The 24-repo bounty portfolio rendered as a judgement-ready gallery. |
| **Hackathons** | Active bounty pipeline with deadlines and prize pools (Superteam Earn + Colosseum). |
| **Resume ATS** | The 1-page printable resume (`D:\bca\Siddharth_Srivastava_Resume.html`), ATS 98.2/100, with score breakdown. |
| **Reflections** | Post-build reflections fed back into strategy. |

## Strategy it encodes

1. **Root cause:** cold Web2 applications faced 1,500+ generic applicants per role; resumes lacked niche systems keywords (Rust, Anchor, Solana SVM, ZK Compression).
2. **Pivot:** a public 23-repo portfolio as the credibility layer + direct founder/CTO DMs on X & Telegram + this command center to coordinate it all.

## Stack

- React + TypeScript + Vite (Oxlint)
- `lucide-react` icons

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:5195
pnpm build
```