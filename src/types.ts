export interface TargetCompany {
  id: string;
  name: string;
  logo: string;
  category: 'L1 Foundation & Core' | 'DeFi Protocol' | 'AI & Infrastructure' | 'Ecosystem Growth';
  rolesHiring: string[];
  salaryRange: string;
  location: string;
  whyFit: string;
  recommendedProject: string;
  outreachDM: string;
  careersUrl: string;
  hiringStatus: 'URGENT_HIRING' | 'ACCEPTING_GRANTS' | 'HIRING_BOUNTY_LEADS';
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Solana DeFi' | 'Rust Core' | 'AI & MCP' | 'Privacy & Security' | 'Creator Economy';
  prizePool: string;
  githubUrl: string;
  demoPort: number;
  techStack: string[];
  keyInnovation: string;
}

export interface HackathonOpportunity {
  id: string;
  name: string;
  prizePool: string;
  deadline: string;
  platform: 'Colosseum' | 'Superteam Earn' | 'Global Web3';
  status: 'SUBMISSION_OPEN' | 'CLOSING_SOON' | 'ACTIVE_ACCELERATOR';
  deliverableMatch: string;
}

export interface CompanyReflection {
  id: string;
  companyName: string;
  stage: 'Initial Rejection (Web2 Cold App)' | 'Technical Feedback / Pivot' | 'Warm DM Active Conversation' | 'Bounty Lead Evaluation';
  whatHappened: string;
  rootCauseAnalysis: string;
  actionTaken: string;
  counterStrategy: string;
  followUpTemplate: string;
  statusTag: 'PIVOTED_TO_WIN' | 'STRATEGY_EXECUTED' | 'ACTIVE_IN_CONVERSATION';
}

export interface InterviewQuestion {
  id: string;
  category: 'Anchor & Rust' | 'Solana SVM Internals' | 'DeFi & MEV' | 'ZK & Privacy';
  question: string;
  answer: string;
  codeSnippet?: string;
  keyTakeaway: string;
}

export interface TimelineMilestone {
  id: string;
  week: string;
  timeframe: string;
  phaseTitle: string;
  targetRevenue: string;
  focusArea: string;
  actions: string[];
  expectedOutcome: string;
  status: 'READY_TO_EXECUTE' | 'IN_PROGRESS' | 'COMPLETED';
}


