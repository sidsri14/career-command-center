import { TargetCompany, PortfolioProject, HackathonOpportunity } from './types'

export const TARGET_COMPANIES: TargetCompany[] = [
  {
    id: 'anza-solana',
    name: 'Anza / Solana Core',
    logo: '⚡',
    category: 'L1 Foundation & Core',
    rolesHiring: ['Core Rust Engineer', 'SVM Systems Architect', 'Developer Experience Lead'],
    salaryRange: '$160,000 – $240,000 USD + Token Allocations',
    location: 'Remote (Global)',
    whyFit: 'Deep experience with Anchor Rust programs, Token-2022 extensions, on-chain token bucket rate limiters, and Firedancer testnet optimizations.',
    recommendedProject: 'SolCredit Protocol & On-Chain Rate Limiter in Rust',
    outreachDM: `Hey team @anza_xyz, saw you're expanding core SVM engineering. I'm a Rust & Solana systems engineer with 22 production repos on GitHub (github.com/sidsri14). Recently built SolCredit (Anchor lending protocol with on-chain risk scoring) and a gas-optimized token bucket rate limiter in Rust. Would love to contribute to SVM validator throughput & core tooling. Here's my resume: [Resume Link]. Open for a technical sync?`,
    careersUrl: 'https://www.anza.xyz/careers',
    hiringStatus: 'URGENT_HIRING'
  },
  {
    id: 'helius-labs',
    name: 'Helius Labs',
    logo: '☀️',
    category: 'AI & Infrastructure',
    rolesHiring: ['Backend Rust Engineer', 'RPC Infrastructure Developer', 'Developer Relations'],
    salaryRange: '$140,000 – $210,000 USD',
    location: 'Remote (Global)',
    whyFit: 'Built zero-key RPC telemetry engines, WebSocket transaction streaming, and ZK compression integrations.',
    recommendedProject: 'SolPulse Dashboard & StackIntercept AI Gateway',
    outreachDM: `Hey @0xMert_ / @heliuslabs team! Huge fan of what you're building with Solana RPCs & Pyth/Photon infrastructure. I'm a Rust/TypeScript systems builder with 22 public repos on GitHub (github.com/sidsri14). Built high-concurrency proxies in Rust (StackIntercept) and SolPulse zero-key RPC telemetry. Would love to help Helius scale developer infrastructure. Open for a brief chat?`,
    careersUrl: 'https://helius.dev/careers',
    hiringStatus: 'URGENT_HIRING'
  },
  {
    id: 'pyth-network',
    name: 'Pyth Network / Douro Labs',
    logo: '🔮',
    category: 'DeFi Protocol',
    rolesHiring: ['Oracle Integration Engineer', 'Rust Smart Contract Dev', 'Quantitative Developer'],
    salaryRange: '$150,000 – $220,000 USD',
    location: 'Remote (Global)',
    whyFit: 'Engineered multi-signal alpha detection, price oracle volatility indexing, and Jupiter flashloan arbitrage engines.',
    recommendedProject: 'JupVanguard Arbitrage & Narrative Radar',
    outreachDM: `Hey @PythNetwork team, following your cross-chain oracle rollouts closely. I'm a Rust & Solana systems engineer with 22 public repositories (github.com/sidsri14). Recently built JupVanguard (Jupiter flashloan arbitrage with Pyth volatility index) and SolCredit lending protocol. Excited by oracle data fidelity & high-throughput market feeds. Would love to connect regarding open engineering roles!`,
    careersUrl: 'https://pyth.network/jobs',
    hiringStatus: 'URGENT_HIRING'
  },
  {
    id: 'superteam-global',
    name: 'Superteam Global & Regional Hubs',
    logo: '🏆',
    category: 'Ecosystem Growth',
    rolesHiring: ['Ecosystem Tech Lead', 'Grant Evaluator & Auditor', 'Regional Bounty Lead'],
    salaryRange: '$80,000 – $140,000 USD + Bounty Rewards',
    location: 'Remote / Hybrid (India / Global)',
    whyFit: 'Top active builder agent across Superteam Earn with 22 completed production deliverables spanning Brazil LMS, Canada Summit, and Ukraine Matrix.',
    recommendedProject: 'Superteam Academy LMS & Solana Summit Canada Hub',
    outreachDM: `Hey @SuperteamDAO / @superteamindia leads! I've been one of the most active builders on Superteam Earn this season with 22 production-grade deliverables across Superteam Academy, Canada Summit, and Colosseum. Looking to step in as a dedicated Ecosystem Engineer / Technical Lead to help evaluate grants, build developer tooling, and support new builders. Let's connect!`,
    careersUrl: 'https://superteam.fun',
    hiringStatus: 'HIRING_BOUNTY_LEADS'
  },
  {
    id: 'dialect-labs',
    name: 'Dialect (Blinks & Actions)',
    logo: '⚡',
    category: 'AI & Infrastructure',
    rolesHiring: ['Solana Actions Engineer', 'Mobile SDK Architect', 'Full-Stack Web3 Dev'],
    salaryRange: '$130,000 – $190,000 USD',
    location: 'Remote',
    whyFit: 'Built Solana Seeker dApp store integrations, Flipcash creator tipping suites, and interactive Action links.',
    recommendedProject: 'Moony Tips Flipcash Suite & SOLARA Seeker Lotto',
    outreachDM: `Hey @saydialect team! Built native Solana Seeker lottery and creator tip card suites utilizing instant on-chain actions and Seed Vault hardware signing. Huge believer in Blinks turning every link into an on-chain transaction. Would love to contribute to Dialect developer SDKs and mobile action protocols. Here's my 1-page resume: [link]!`,
    careersUrl: 'https://dialect.to',
    hiringStatus: 'ACCEPTING_GRANTS'
  }
]

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'colosseum-worlds-fair',
    title: 'SolCredit Protocol (Colosseum $840K MVP)',
    category: 'Solana DeFi',
    prizePool: '$840,000 Pool + $250K Pre-Seed',
    githubUrl: 'https://github.com/sidsri14/colosseum-worlds-fair',
    demoPort: 5189,
    techStack: ['Rust', 'Anchor', 'Solana SVM', 'ML Risk Engine', 'TypeScript', 'Tailwind'],
    keyInnovation: 'First AI-powered under-collateralized lending protocol on Solana with on-chain zero-knowledge credit verification.'
  },
  {
    id: 'solana-stealth-shield',
    title: 'Solana StealthShield (ZK Privacy)',
    category: 'Privacy & Security',
    prizePool: '$2,000 USDG',
    githubUrl: 'https://github.com/sidsri14/solana-stealth-shield',
    demoPort: 5182,
    techStack: ['Curve25519 ECDH', 'Token-2022', 'ZK Compression', 'Rust', 'TypeScript'],
    keyInnovation: 'Non-interactive zero-knowledge stealth addresses eliminating sender-recipient transaction linkability on Solana.'
  },
  {
    id: 'solsentinel',
    title: 'SolSentinel (Static Analysis Engine)',
    category: 'Privacy & Security',
    prizePool: '$5,000 USDG',
    githubUrl: 'https://github.com/sidsri14/solsentinel',
    demoPort: 5177,
    techStack: ['Rust AST', 'Anchor Inspector', 'Vulnerability Atlas', 'React 19'],
    keyInnovation: 'Automated 10-class Solana smart contract static analysis with automated exploit PoC generation.'
  },
  {
    id: 'stack-intercept',
    title: 'StackIntercept & LiteLLM Gateway',
    category: 'AI & MCP',
    prizePool: 'Production AI Infrastructure',
    githubUrl: 'https://github.com/sidsri14/stack-intercept',
    demoPort: 5173,
    techStack: ['Rust Core', 'Python SDK', 'Redis', 'Docker Compose', 'OpenAI Spec'],
    keyInnovation: 'Sub-millisecond AI gateway proxy unifying 100+ LLM API endpoints with streaming cost guardrails.'
  },
  {
    id: 'solana-summit-canada',
    title: 'Solana Summit Canada Hub',
    category: 'Creator Economy',
    prizePool: '$10,000 USDG',
    githubUrl: 'https://github.com/sidsri14/solana-summit-canada',
    demoPort: 5190,
    techStack: ['Bilingual i18n (EN/FR)', 'Teleprompter Engine', 'Luma Integration', 'React-TS'],
    keyInnovation: '7-category creator challenge launchpad with synchronized video teleprompter and 48h Summit itinerary.'
  },
  {
    id: 'kriptok-league-experience',
    title: 'KriptoK League Perp Chronicle & PnL Engine',
    category: 'Solana DeFi',
    prizePool: '$2,000 USDC',
    githubUrl: 'https://github.com/sidsri14/kriptok-league-experience',
    demoPort: 5192,
    techStack: ['Perp Analytics', 'PnL Card Studio', 'Multi-chain 12-Chain Wallet', 'React-TS'],
    keyInnovation: 'Full-round perp tournament trading chronicle with live PnL share card generator and technical invalidation bounds.'
  },
  {
    id: 'solara-lottery-seeker',
    title: 'SOLARA Lotto & Seeker dApp Hub',
    category: 'Solana DeFi',
    prizePool: '$500 USDC',
    githubUrl: 'https://github.com/sidsri14/solara-lottery-seeker',
    demoPort: 5193,
    techStack: ['VRF Entropy', 'Seeker dApp Store', '6-Bracket Pool', 'Solana Pay'],
    keyInnovation: '100% on-chain weekly lottery settling every Thursday with verifiable VRF randomness and Seeker Seed Vault integration.'
  },
  {
    id: 'nectarfi-dominion-silv',
    title: 'NectarFi x Dominion $SILV Campaign Hub',
    category: 'Solana DeFi',
    prizePool: '$1,000 USDG',
    githubUrl: 'https://github.com/sidsri14/nectarfi-dominion-silv',
    demoPort: 5194,
    techStack: ['DEX Swaps', '30-Day Hold Simulator', 'Video Storyboard', 'React-TS'],
    keyInnovation: 'Interactive 30-day snapshot reward simulator for the $5,000 $SILV community pool.'
  }
]

export const HACKATHON_OPPORTUNITIES: HackathonOpportunity[] = [
  {
    id: 'colosseum-fair',
    name: "Colosseum Crypto World's Fair",
    prizePool: '$840,000 + $2.5M Pre-Seed Accelerator',
    deadline: 'October 12, 2026',
    platform: 'Colosseum',
    status: 'ACTIVE_ACCELERATOR',
    deliverableMatch: 'SolCredit Protocol (colosseum-worlds-fair)'
  },
  {
    id: 'road-to-colosseum-mvp',
    name: 'Road to Colosseum: Build Your MVP',
    prizePool: '$8,000 USDG (Top Prize $2,000)',
    deadline: 'October 2, 2026',
    platform: 'Superteam Earn',
    status: 'CLOSING_SOON',
    deliverableMatch: 'SolCredit Protocol (colosseum-worlds-fair)'
  },
  {
    id: 'canada-summit-part2',
    name: 'Solana Summit Canada Creator Challenge (Part 2)',
    prizePool: '$10,000 USDG (Grand Prize $2,000)',
    deadline: 'October 1, 2026',
    platform: 'Superteam Earn',
    status: 'SUBMISSION_OPEN',
    deliverableMatch: 'Solana Summit Canada Hub (solana-summit-canada)'
  },
  {
    id: 'poland-hacks',
    name: 'Blockchain Hack Warsaw & Kraków',
    prizePool: '$4,000 USDG ($2K each)',
    deadline: 'October 11, 2026',
    platform: 'Superteam Earn',
    status: 'SUBMISSION_OPEN',
    deliverableMatch: 'Solana StealthShield & SolSentinel'
  },
  {
    id: 'hisa-video',
    name: 'Hisa Stablecoin Video Explainer',
    prizePool: '$5,002 USDG',
    deadline: 'September 30, 2026',
    platform: 'Superteam Earn',
    status: 'CLOSING_SOON',
    deliverableMatch: 'Hisa Global Finance Hub (hisa-global-finance)'
  }
]
