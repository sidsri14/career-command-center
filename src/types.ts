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
