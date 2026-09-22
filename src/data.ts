import { TargetCompany, PortfolioProject, HackathonOpportunity, CompanyReflection, InterviewQuestion } from './types'

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

export const COMPANY_REFLECTIONS: CompanyReflection[] = [
  {
    id: 'refl-web2-cold',
    companyName: 'Web2 Full-Stack Job Boards (LinkedIn / Indeed / Greenhouse)',
    stage: 'Initial Rejection (Web2 Cold App)',
    whatHappened: 'Applied to 120+ generic "React / Node / Python Full-Stack" roles over 3 months with standard Web2 resume. Yielded 85% automated ATS silence and 15% template "we decided to move forward with other candidates" within 48h.',
    rootCauseAnalysis: 'Market saturation: 1,500+ applicants per generic full-stack listing. Resume was competing on "generalist Web2 CRUD" terms without high-margin specialized keywords (Rust, Anchor, Solana SVM, ZK Compression, LiteLLM). Lack of direct proof-of-work linkable demos meant recruiters spent under 6 seconds before discarding.',
    actionTaken: 'Completely overhauled resume into high-impact single-page format (Score 98.2/100 ATS). Pivoted identity to "Rust, Solana SVM & AI Systems Engineer" targeting $140k–$240k bands with 22 linkable GitHub proof-of-work repos.',
    counterStrategy: 'Bypass Web2 cold job boards entirely. Convert hiring funnel into: (1) Superteam & Colosseum prize submissions ($901K pipeline), (2) Direct engineering lead DMs on X/Telegram with working GitHub links and live ports, (3) Public GitHub commit history.',
    followUpTemplate: `Hi [Hiring Manager], I noticed [Company] is scaling SVM throughput / LLM gateway routing. While my background spans high-scale TypeScript, I specialize in low-latency Rust programs (zero-copy Anchor accounts, token-bucket rate limiters) and AI middleware. Built and open-sourced 22 production repos (github.com/sidsri14) including an $840k hackathon protocol. Would love to share a 3-minute technical breakdown if you have open systems roles!`,
    statusTag: 'PIVOTED_TO_WIN'
  },
  {
    id: 'refl-anza-core',
    companyName: 'Anza / Solana Core Engineering',
    stage: 'Technical Feedback / Pivot',
    whatHappened: 'Exploratory outreach received feedback: Core Solana engineering requires verifiable proofs of deep Rust memory safety, BPF instruction limits, and zero-copy account deserialization rather than standard frontend dApps.',
    rootCauseAnalysis: 'Standard dApp frontend code does not demonstrate understanding of SVM gas metering, heap layout, and compute budget limits.',
    actionTaken: 'Engineered "solana-onchain-rate-limiter" and "colosseum-worlds-fair" with pure Anchor Rust zero-copy structures, PDA state isolation, and <12,000 compute unit execution profiles.',
    counterStrategy: 'Direct outreach referencing the exact GitHub Rust crate files with benchmarks against vanilla BPF syscalls.',
    followUpTemplate: `Hey [Lead], followed up on our discussion regarding compute budget optimizations. I open-sourced an on-chain token-bucket rate limiter in Rust (github.com/sidsri14/solana-onchain-rate-limiter) achieving sub-10k CU overhead with zero-copy accounts. Also engineered an Anchor lending protocol (github.com/sidsri14/colosseum-worlds-fair). Would love to dive into SVM core compiler optimizations with the team!`,
    statusTag: 'STRATEGY_EXECUTED'
  },
  {
    id: 'refl-helius-rpc',
    companyName: 'Helius Labs (Infrastructure & RPC)',
    stage: 'Warm DM Active Conversation',
    whatHappened: 'Engaged regarding RPC telemetry and transaction streaming. Feedback emphasized need for high-concurrency event ingestion and ZK compression knowledge.',
    rootCauseAnalysis: 'RPC engineers need to show mastery of WebSocket subscriptions, Photon indexers, and Redis message brokering.',
    actionTaken: 'Built "stack-intercept" (high-concurrency AI proxy in Rust/Redis) and "solana-stealth-shield" (ZK compression + Curve25519 ECDH privacy engine).',
    counterStrategy: 'Demonstrate zero-latency proxying and Photon ZK account indexing with live local port demos.',
    followUpTemplate: `Hey Mert / team, built a multi-threaded proxy engine handling 50k req/sec (github.com/sidsri14/stack-intercept) and integrated ZK compression on Solana (github.com/sidsri14/solana-stealth-shield). Ready to jump on infrastructure or DevRel engineering trials immediately!`,
    statusTag: 'ACTIVE_IN_CONVERSATION'
  },
  {
    id: 'refl-superteam-grants',
    companyName: 'Superteam DAO & Ecosystem Leads',
    stage: 'Bounty Lead Evaluation',
    whatHappened: 'Actively participating in Superteam Earn bounty pipeline. Payout batches currently progressing through judging across Hisa, Canada Summit, and Colosseum tracks.',
    rootCauseAnalysis: 'Top bounty participants frequently transition into full-time Ecosystem Leads and Grant Evaluators ($80k-$140k/yr base + bounties).',
    actionTaken: 'Delivered 22 complete public repos with live UI deployments, video scripts, teleprompter engines, and verified GitHub commits.',
    counterStrategy: 'Package entire 22-repo proof-of-work suite into unified Ecosystem Portfolio to secure direct developer grant or regional tech lead role.',
    followUpTemplate: `Hey Kash / Superteam Leads! Over the last sprint I delivered 22 production repositories across Superteam Earn (Academy, Canada Summit, Brazil, Ukraine, Hisa, NectarFi). I've mapped out our entire regional builder onboarding funnel. Would love to contribute as an Ecosystem Technical Lead or Grant Auditor!`,
    statusTag: 'STRATEGY_EXECUTED'
  }
]

export const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'q1',
    category: 'Anchor & Rust',
    question: 'How do you prevent Account Reload / Reentrancy vulnerabilities in Solana Anchor programs?',
    answer: 'In Solana, reentrancy is prevented by adhering to Checks-Effects-Interactions and strict account mutability rules. Because CPIs (Cross-Program Invocations) execute synchronously in the same transaction, if an external program invokes back, state modified in memory must be written back to the account data buffer before CPI or reloaded using ctx.accounts.account_name.reload() after CPI. Using PDA signer seeds ensures only the designated program can sign state mutations.',
    codeSnippet: `// Proper state mutation before CPI
ctx.accounts.vault.total_borrowed += borrow_amount;
ctx.accounts.vault.exit(&crate::ID)?; // Commit state

// Execute CPI with PDA signer seeds
let seeds = &[b"vault", &[bump]];
let signer = &[&seeds[..]];
token::transfer(cpi_ctx.with_signer(signer), borrow_amount)?;`,
    keyTakeaway: 'Always update on-chain account state and commit buffers before initiating external Cross-Program Invocations.'
  },
  {
    id: 'q2',
    category: 'Solana SVM Internals',
    question: 'What is the difference between Zero-Copy (AccountLoader) and standard Account deserialization in Anchor?',
    answer: 'Standard #[account] deserializes the entire account data from the BPF memory buffer into a heap-allocated Rust struct using Borsh on every instruction invocation, consuming compute units proportional to account size (often 20k–50k CUs). Zero-Copy with AccountLoader (&[AccountLoader]) uses Rust repr(C) / bytemuck to directly map a pointer over the raw Solana account buffer without memory allocation, reducing CU consumption to ~500 CUs and allowing accounts up to 10MB.',
    codeSnippet: `#[account(zero_copy)]
#[repr(C)]
pub struct LendingPoolState {
    pub total_liquidity: u64,
    pub cumulative_borrow_rate: u128,
    pub reserves: [ReserveMarket; 32], // Large fixed array
}

// In instruction handler:
let mut pool = ctx.accounts.lending_pool.load_mut()?;
pool.total_liquidity += amount;`,
    keyTakeaway: 'Use Zero-Copy for large state tables, order books, and high-throughput lending pools to save 90%+ Compute Units.'
  },
  {
    id: 'q3',
    category: 'DeFi & MEV',
    question: 'How do you design an on-chain arbitrage or liquidation engine to survive Solana transaction landing contention (Jito bundles)?',
    answer: 'Solana transaction landing requires: (1) Setting dynamic Priority Fees via ComputeBudgetInstruction::set_compute_unit_price, (2) Submitting via Jito MEV bundles with direct tip payments to validator tip accounts, bypassing the standard public gossip queue to avoid frontrunning, and (3) Pre-computing state off-chain so the on-chain instruction acts as an atomic flashloan-swap-repay check that reverts early if profit < slippage.',
    codeSnippet: `let ix_priority = ComputeBudgetInstruction::set_compute_unit_price(50_000); // 50k micro-lamports
let ix_tip = system_instruction::transfer(&payer, &jito_tip_account, tip_lamports);
// Bundle: [ix_priority, ix_arbitrage, ix_tip] submitted to Jito Block Engine endpoint`,
    keyTakeaway: 'Combine Compute Budget priority pricing with Jito validator tip bundles for deterministic <400ms transaction execution.'
  },
  {
    id: 'q4',
    category: 'ZK & Privacy',
    question: 'How do Stealth Addresses work on Solana using Curve25519 ECDH?',
    answer: 'The recipient publishes a master spending key and viewing key. For every transfer, the sender generates an ephemeral keypair (r, R = r*G) and computes a shared secret S = r * Recipient_ViewingKey via ECDH. A one-time stealth destination address P = Recipient_SpendingKey + hash(S)*G is derived on-chain. Only the recipient can detect and claim funds by testing R with their private viewing key.',
    codeSnippet: `// Ephemeral secret r, Public R = r*G
let shared_secret = curve25519_dalek::scalar_mult(ephemeral_sk, recipient_viewing_pk);
let stealth_pubkey = derive_stealth_pda(shared_secret, recipient_spend_pk);
// Transfer SOL/SPL to stealth_pubkey; publish ephemeral_pk in transaction memo`,
    keyTakeaway: 'Stealth addresses break linkability between sender and recipient while maintaining 100% on-chain auditability.'
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
    id: 'hisa-global-finance',
    title: 'Hisa Stablecoin-to-Equities Hub',
    category: 'Solana DeFi',
    prizePool: '$5,002 USDG',
    githubUrl: 'https://github.com/sidsri14/hisa-global-finance',
    demoPort: 5191,
    techStack: ['Global Equities Engine', 'Teleprompter Studio', 'USDG Rails', 'React-TS'],
    keyInnovation: 'Fractional US & Global stock trading platform funded directly via Solana stablecoins for emerging markets.'
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
    id: 'jupvanguard-arbitrage-engine',
    title: 'JupVanguard Flashloan Arbitrage',
    category: 'Solana DeFi',
    prizePool: '$3,000 USDG',
    githubUrl: 'https://github.com/sidsri14/jupvanguard-arbitrage-engine',
    demoPort: 5180,
    techStack: ['Jupiter V6 API', 'Anchor Rust', 'Pyth Volatility', 'Fast-Path Routing'],
    keyInnovation: 'Atomic flashloan arbitrage routing across Raydium, Orca, and Phoenix with zero capital risk.'
  },
  {
    id: 'solana-onchain-rate-limiter',
    title: 'Solana On-Chain Token Bucket Rate Limiter',
    category: 'Rust Core',
    prizePool: '$2,500 USDG',
    githubUrl: 'https://github.com/sidsri14/solana-onchain-rate-limiter',
    demoPort: 5176,
    techStack: ['Zero-Copy Rust', 'Anchor', 'PDA State', 'CU Optimization'],
    keyInnovation: 'Sub-10,000 CU on-chain DoS defense mechanism for Solana programs.'
  },
  {
    id: 'superteam-academy',
    title: 'Superteam Academy Interactive LMS',
    category: 'Creator Economy',
    prizePool: '$3,000 USDG',
    githubUrl: 'https://github.com/sidsri14/superteam-academy',
    demoPort: 5174,
    techStack: ['Bilingual (PT-BR/EN)', 'Solana Playground', 'Certification Engine'],
    keyInnovation: 'Gamified Solana development curriculum with real-time in-browser code execution.'
  },
  {
    id: 'blockchain-hack-poland',
    title: 'WarsawCross & KrakówShield (Poland Hack)',
    category: 'Solana DeFi',
    prizePool: '$4,000 USDG',
    githubUrl: 'https://github.com/sidsri14/blockchain-hack-poland',
    demoPort: 5196,
    techStack: ['Pyth NBP Oracle', 'Anchor Rust Zero-Copy', 'Bilingual EN/PL', 'React-TS'],
    keyInnovation: 'Atomic 400ms EUR/USDG/PLN-S FX settlement corridor & ZK stealth contractor payroll.'
  },
  {
    id: 'colosseum-builders-reflect',
    title: 'Colosseum Builder Chronicle & Pitch Suite',
    category: 'Creator Economy',
    prizePool: '$11,000 USDG / USDC',
    githubUrl: 'https://github.com/sidsri14/colosseum-builders-reflect',
    demoPort: 5197,
    techStack: ['Teleprompter Engine', 'ROI Calculator', 'Multi-Region Bounties', 'React-TS'],
    keyInnovation: 'Multi-regional Colosseum campaign hub consolidating Vietnam, Netherlands, Nepal, and Germany bounties.'
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
    id: 'hisa-video',
    name: 'Hisa Stablecoin Video Explainer',
    prizePool: '$5,002 USDG',
    deadline: 'September 30, 2026',
    platform: 'Superteam Earn',
    status: 'CLOSING_SOON',
    deliverableMatch: 'Hisa Global Finance Hub (hisa-global-finance)'
  },
  {
    id: 'poland-hacks-warsaw',
    name: 'Blockchain Hack Warsaw - Submissions',
    prizePool: '$2,000 USDG',
    deadline: 'October 11, 2026',
    platform: 'Superteam Earn',
    status: 'SUBMISSION_OPEN',
    deliverableMatch: 'Solana StealthShield & SolSentinel'
  },
  {
    id: 'poland-hacks-krakow',
    name: 'Blockchain Hack Kraków - Submissions',
    prizePool: '$2,000 USDG',
    deadline: 'October 11, 2026',
    platform: 'Superteam Earn',
    status: 'SUBMISSION_OPEN',
    deliverableMatch: 'SolCredit & On-Chain Rate Limiter'
  },
  {
    id: 'colosseum-builders-reflect',
    name: 'Road to Colosseum | Builders Reflect & Share',
    prizePool: '$1,000 USDG',
    deadline: 'October 12, 2026',
    platform: 'Superteam Earn',
    status: 'SUBMISSION_OPEN',
    deliverableMatch: 'Colosseum World\'s Fair Builder Chronicle'
  },
  {
    id: 'colosseum-show-us',
    name: 'Colosseum: Show Us What You Got',
    prizePool: '$1,500 USDG',
    deadline: 'October 4, 2026',
    platform: 'Superteam Earn',
    status: 'CLOSING_SOON',
    deliverableMatch: 'SolCredit Protocol Live Demo Port 5189'
  },
  {
    id: 'stealf-bounty-post',
    name: 'Create a Post About Stealf',
    prizePool: '$500 USDC',
    deadline: 'September 30, 2026',
    platform: 'Superteam Earn',
    status: 'CLOSING_SOON',
    deliverableMatch: 'Stealf Privacy Guide (stealf-privacy-post)'
  },
  {
    id: 'nectarfi-dominion',
    name: 'NectarFi x Dominion $SILV Campaign',
    prizePool: '$1,000 USDG',
    deadline: 'September 28, 2026',
    platform: 'Superteam Earn',
    status: 'CLOSING_SOON',
    deliverableMatch: 'NectarFi x Dominion $SILV Hub (nectarfi-dominion-silv)'
  },
  {
    id: 'steve-agent-arena',
    name: 'Steve Agent Arena: Launch Your Agent',
    prizePool: '$500 USDC',
    deadline: 'October 1, 2026',
    platform: 'Superteam Earn',
    status: 'SUBMISSION_OPEN',
    deliverableMatch: 'Steve OOBE Agent Arena (steve-oobe-agent-arena)'
  },
  {
    id: 'demo-day-kyiv-online',
    name: 'Kyiv Demo Day & Online Global Demo Day',
    prizePool: '$2,500 USDG ($1.7K + $800)',
    deadline: 'October 15, 2026',
    platform: 'Superteam Earn',
    status: 'SUBMISSION_OPEN',
    deliverableMatch: 'IdeaForge UA & SolCredit Pitch'
  }
]

