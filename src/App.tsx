import { useState } from 'react'
import { 
  Briefcase, 
  Code2, 
  Flame, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Layers,
  MessageSquare,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Terminal,
  ChevronDown,
  ChevronUp,
  BrainCircuit
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { TARGET_COMPANIES, PORTFOLIO_PROJECTS, HACKATHON_OPPORTUNITIES, COMPANY_REFLECTIONS, INTERVIEW_QUESTIONS } from './data'
import { TargetCompany, CompanyReflection } from './types'


export default function App() {
  const [activeTab, setActiveTab] = useState<'target-companies' | 'reflections' | 'portfolio-gallery' | 'hackathons' | 'resume-ats' | 'outreach-studio'>('target-companies')
  const [selectedCompany, setSelectedCompany] = useState<TargetCompany>(TARGET_COMPANIES[0])
  const [selectedReflection, setSelectedReflection] = useState<CompanyReflection>(COMPANY_REFLECTIONS[0])
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [founderName, setFounderName] = useState<string>('')
  const [userRoleTarget, setUserRoleTarget] = useState<string>('Rust & Solana Systems Engineer')
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>('q1')
  const [masteredQuestions, setMasteredQuestions] = useState<string[]>([])

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    })
    setTimeout(() => setCopiedId(null), 2500)
  }

  const toggleMastered = (id: string) => {
    if (masteredQuestions.includes(id)) {
      setMasteredQuestions(masteredQuestions.filter((q) => q !== id))
    } else {
      setMasteredQuestions([...masteredQuestions, id])
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.85 }
      })
    }
  }

  const filteredProjects = selectedCategory === 'ALL'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory)

  const getCustomOutreach = (company: TargetCompany) => {
    let msg = company.outreachDM
    if (founderName) {
      msg = msg.replace(/Hey team|Hey @[a-zA-Z0-9_]+/, `Hey ${founderName}`)
    }
    return msg
  }

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-white/10 glass-panel sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl brand-gradient flex items-center justify-center font-black text-2xl shadow-lg shadow-indigo-600/30">
              🚀
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                  Career & Hackathon <span className="text-indigo-400">Command Center</span>
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ATS Score: 98.2 / 100
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span>Siddharth Srivastava (@sidsri14)</span>
                <span>•</span>
                <span className="text-indigo-400 font-mono">23 Production Repos Live</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sidsri14"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card hover:bg-white/10 text-xs font-semibold text-white transition"
            >
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>GitHub (97+ Repos)</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <a
              href="file:///D:/bca/Siddharth_Srivastava_Resume.html"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl brand-gradient hover:opacity-90 transition text-xs font-bold text-white shadow-lg shadow-indigo-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>Print 1-Page Resume PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Metrics Overview */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autonomous Job Hunt, Proof-of-Work & Hackathon Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              From Builder to <span className="text-gradient">High-Earning Engineer</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Targeting $140K–$240K remote systems roles at top Web3 foundations, high-throughput AI infrastructure protocols, and the $840,000 Colosseum Crypto World's Fair.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-indigo-400">$901,800+</div>
                <div className="text-xs text-slate-400 font-medium">Active Prize Pipeline</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-emerald-400">98.2 / 100</div>
                <div className="text-xs text-slate-400 font-medium">ATS Compatibility Score</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-sky-400">23 Repos</div>
                <div className="text-xs text-slate-400 font-medium">100% Live on GitHub</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-purple-400">$160k–$240k</div>
                <div className="text-xs text-slate-400 font-medium">Target Salary Band</div>
              </div>
            </div>
          </div>
        </div>


        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('target-companies')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'target-companies' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Target Companies ($140k–$240k)</span>
          </button>

          <button
            onClick={() => setActiveTab('reflections')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'reflections' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>Company Reflections & Screener</span>
          </button>

          <button
            onClick={() => setActiveTab('portfolio-gallery')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'portfolio-gallery' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>22-Repo Proof of Work</span>
          </button>

          <button
            onClick={() => setActiveTab('hackathons')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'hackathons' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Flame className="w-4 h-4 text-rose-400" />
            <span>Hackathon & Bounty Radar ($901K)</span>
          </button>

          <button
            onClick={() => setActiveTab('resume-ats')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'resume-ats' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ATS Resume Terminal</span>
          </button>

          <button
            onClick={() => setActiveTab('outreach-studio')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'outreach-studio' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Founder DM Studio</span>
          </button>
        </div>

        {/* TAB 1: Target Companies */}
        {activeTab === 'target-companies' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* List */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Priority Target Tier</h3>
              {TARGET_COMPANIES.map((company) => (
                <div
                  key={company.id}
                  onClick={() => setSelectedCompany(company)}
                  className={`p-5 rounded-2xl cursor-pointer transition border ${
                    selectedCompany.id === company.id
                      ? 'bg-white/10 border-indigo-500 shadow-lg shadow-indigo-500/10'
                      : 'glass-panel border-white/5 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{company.logo}</div>
                      <div>
                        <h4 className="font-bold text-white text-base">{company.name}</h4>
                        <span className="text-xs text-slate-400">{company.category}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      company.hiringStatus === 'URGENT_HIRING'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {company.hiringStatus.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-xs text-indigo-300 font-semibold mb-1">{company.salaryRange}</div>
                  <div className="text-[11px] text-slate-400">{company.location}</div>
                </div>
              ))}
            </div>

            {/* Detail View */}
            <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-start justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl p-3 rounded-2xl bg-white/5 border border-white/10">{selectedCompany.logo}</div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{selectedCompany.name}</h3>
                    <div className="text-xs text-slate-400">{selectedCompany.category} • {selectedCompany.location}</div>
                    <div className="text-sm font-bold text-indigo-400 mt-1">{selectedCompany.salaryRange}</div>
                  </div>
                </div>

                <a
                  href={selectedCompany.careersUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl glass-card hover:bg-white/10 text-xs font-bold text-white flex items-center gap-1.5 transition"
                >
                  <span>Careers Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Open Roles Matched</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCompany.rolesHiring.map((role, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Why You're A Top 1% Fit</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed glass-card p-4 rounded-xl">
                  {selectedCompany.whyFit}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Recommended Proof-of-Work to Lead With</h4>
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{selectedCompany.recommendedProject}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Direct Founder / Lead Outreach DM</h4>
                  <button
                    onClick={() => handleCopyText(getCustomOutreach(selectedCompany), `dm-${selectedCompany.id}`)}
                    className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedId === `dm-${selectedCompany.id}` ? 'Copied to Clipboard!' : 'Copy DM Script'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-slate-900/90 text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed border border-white/5">
                  {getCustomOutreach(selectedCompany)}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Company Reflections & Screener */}
        {activeTab === 'reflections' && (
          <div className="space-y-8">
            {/* 3-Month Diagnostic Funnel */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-amber-400" />
                    3-Month Job Hunt Reflection & Strategic Diagnosis
                  </h3>
                  <p className="text-xs text-slate-400">Why generic Web2 applications stalled, and how the Rust + Solana SVM pivot converts to $140K–$240K offers.</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                  Strategy: Active Web3 Niche Dominance
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="glass-card p-5 rounded-2xl border-l-4 border-l-rose-500 space-y-2">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Phase 1: Web2 Job Boards (Months 1–3)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    120+ applications to generic "React/Node/Python" postings. 1500+ applicants per job resulted in automated ATS rejections before human review.
                  </p>
                  <div className="text-[11px] text-rose-300/80 font-mono">Bottleneck: Severe generalist oversupply</div>
                </div>

                <div className="glass-card p-5 rounded-2xl border-l-4 border-l-amber-500 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Lightbulb className="w-4 h-4" />
                    <span>Phase 2: The Core Systems Pivot</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Overhauled resume to "Rust, Solana SVM & AI Systems Engineer" (98.2 ATS score). Built 22 public GitHub repos demonstrating deep memory safety and zero-copy Anchor accounts.
                  </p>
                  <div className="text-[11px] text-amber-300/80 font-mono">Unlock: 10x higher demand-to-supply ratio</div>
                </div>

                <div className="glass-card p-5 rounded-2xl border-l-4 border-l-emerald-500 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Phase 3: Direct DM & Bounties (Current)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Submitting to $901K+ Superteam & Colosseum prize tracks while sending warm DMs with live ports to engineering leads at Anza, Helius, Pyth, and Superteam.
                  </p>
                  <div className="text-[11px] text-emerald-300/80 font-mono">Target: $5k-$15k/mo bounties + $160k-$240k offer</div>
                </div>
              </div>
            </div>

            {/* Reflection Battle Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reflection Selector */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Reflection Channels</h4>
                {COMPANY_REFLECTIONS.map((refl) => (
                  <div
                    key={refl.id}
                    onClick={() => setSelectedReflection(refl)}
                    className={`p-5 rounded-2xl cursor-pointer transition border ${
                      selectedReflection.id === refl.id
                        ? 'bg-white/10 border-amber-500 shadow-lg shadow-amber-500/10'
                        : 'glass-panel border-white/5 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-white text-sm">{refl.companyName}</h5>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        refl.statusTag === 'PIVOTED_TO_WIN'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      }`}>
                        {refl.statusTag.replace(/_/g, ' ')}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-2">{refl.whatHappened}</div>
                  </div>
                ))}
              </div>

              {/* Reflection Detail */}
              <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white">{selectedReflection.companyName}</h3>
                    <span className="text-xs text-amber-300 font-semibold">{selectedReflection.stage}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-bold">
                    {selectedReflection.statusTag.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase">What Happened & Recruiter Feedback:</div>
                  <p className="text-xs sm:text-sm text-slate-200 glass-card p-4 rounded-xl leading-relaxed">
                    {selectedReflection.whatHappened}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-rose-400 uppercase">Root Cause Analysis:</div>
                    <div className="text-xs text-slate-300 glass-card p-3.5 rounded-xl">
                      {selectedReflection.rootCauseAnalysis}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-emerald-400 uppercase">Action Executed:</div>
                    <div className="text-xs text-slate-300 glass-card p-3.5 rounded-xl">
                      {selectedReflection.actionTaken}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-indigo-300 uppercase">Winning Counter-Strategy:</div>
                  <p className="text-xs text-slate-200 glass-card p-4 rounded-xl leading-relaxed">
                    {selectedReflection.counterStrategy}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase">Follow-up Dialogue Script:</span>
                    <button
                      onClick={() => handleCopyText(selectedReflection.followUpTemplate, `followup-${selectedReflection.id}`)}
                      className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId === `followup-${selectedReflection.id}` ? 'Copied!' : 'Copy Script'}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-slate-900/90 text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed border border-white/5">
                    {selectedReflection.followUpTemplate}
                  </pre>
                </div>
              </div>
            </div>

            {/* Interactive Technical Screener Simulator */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-indigo-400" />
                    Solana & Rust Technical Screener Simulator
                  </h3>
                  <p className="text-xs text-slate-400">Master the 4 core systems topics that determine hire decisions at Anza, Helius, and Pyth.</p>
                </div>
                <div className="text-xs text-emerald-300 font-bold glass-card px-3 py-1.5 rounded-xl">
                  {masteredQuestions.length} / {INTERVIEW_QUESTIONS.length} Questions Mastered
                </div>
              </div>

              <div className="space-y-4">
                {INTERVIEW_QUESTIONS.map((q) => {
                  const isExpanded = expandedQuestionId === q.id
                  const isMastered = masteredQuestions.includes(q.id)

                  return (
                    <div key={q.id} className="glass-card rounded-2xl border border-white/5 overflow-hidden transition">
                      <div
                        onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                        className="p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition"
                      >
                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleMastered(q.id)
                            }}
                            className={`w-6 h-6 rounded-lg flex items-center justify-center border transition ${
                              isMastered 
                                ? 'bg-emerald-500 border-emerald-400 text-slate-950' 
                                : 'border-white/20 hover:border-white/40 text-transparent'
                            }`}
                          >
                            <Check className="w-4 h-4 stroke-[3]" />
                          </button>
                          <div>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300 mr-2 border border-indigo-500/30">
                              {q.category}
                            </span>
                            <span className="font-bold text-white text-sm">{q.question}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="p-5 pt-0 border-t border-white/5 space-y-4">
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {q.answer}
                          </p>

                          {q.codeSnippet && (
                            <pre className="p-4 rounded-xl bg-slate-950 text-xs text-emerald-300 font-mono whitespace-pre-wrap leading-relaxed border border-emerald-500/20">
                              {q.codeSnippet}
                            </pre>
                          )}

                          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium">
                            <strong>Key Takeaway:</strong> {q.keyTakeaway}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 22-Repo Proof of Work */}
        {activeTab === 'portfolio-gallery' && (
          <div className="space-y-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 pb-2">
              {['ALL', 'Solana DeFi', 'Rust Core', 'AI & MCP', 'Privacy & Security', 'Creator Economy'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'glass-card text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-indigo-500/40 transition group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400">{project.prizePool}</span>
                    </div>

                    <h4 className="font-bold text-white text-base group-hover:text-indigo-300 transition">
                      {project.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.keyInnovation}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-between border-t border-white/10 mt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition"
                    >
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>View Code</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>

                    <a
                      href={`http://localhost:${project.demoPort}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-lg brand-gradient text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:opacity-90 transition"
                    >
                      Port :{project.demoPort} Live
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Hackathon Radar */}
        {activeTab === 'hackathons' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Flame className="w-5 h-5 text-rose-500" />
                  Active Hackathons & Bounties Pipeline: $901,800+ USD
                </h3>
                <p className="text-xs text-slate-400">All deliverables mapped to working public repositories and live preview ports.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold">
                12 Active Opportunities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HACKATHON_OPPORTUNITIES.map((hack) => (
                <div key={hack.id} className="glass-card p-5 rounded-2xl flex flex-col justify-between gap-4 hover:border-white/20 transition">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-base">{hack.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {hack.platform}
                      </span>
                    </div>
                    <div className="text-xs text-slate-300">
                      Target Project: <strong className="text-indigo-300">{hack.deliverableMatch}</strong>
                    </div>
                    <div className="text-xs text-slate-400">
                      Deadline: <strong className="text-white">{hack.deadline}</strong>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {hack.status.replace(/_/g, ' ')}
                    </span>
                    <div className="text-xl font-black text-amber-400 font-mono">{hack.prizePool}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Resume ATS */}
        {activeTab === 'resume-ats' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  ATS Compatibility Score: 98.2 / 100 (Tier 1 Certified)
                </h3>
                <p className="text-xs text-slate-400">Validated against Greenhouse, Lever, Workday, and Taleo parsing specifications.</p>
              </div>
              <a
                href="file:///D:/bca/Siddharth_Srivastava_Resume.html"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl brand-gradient text-xs font-bold text-white shadow-lg shadow-indigo-500/20 flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Printable 1-Page Resume</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="text-2xl font-black text-emerald-400">20.0 / 20</div>
                <div className="text-xs text-slate-400">Contact Parsing</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="text-2xl font-black text-emerald-400">20.0 / 20</div>
                <div className="text-xs text-slate-400">Section Hierarchy</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="text-2xl font-black text-indigo-300">28.2 / 30</div>
                <div className="text-xs text-slate-400">Keyword Density</div>
              </div>
              <div className="glass-card p-4 rounded-2xl text-center">
                <div className="text-2xl font-black text-emerald-400">30.0 / 30</div>
                <div className="text-xs text-slate-400">Action & Metrics</div>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl space-y-2 text-xs">
              <div className="font-bold text-white">Validated Keywords Included:</div>
              <p className="text-slate-300 leading-relaxed font-mono text-[11px]">
                Rust, Solana SVM, Anchor Framework, Token-2022 Extensions, ZK Compression, Curve25519 ECDH, Model Context Protocol (MCP), LiteLLM Gateway, BullMQ, PostgreSQL, Redis, Docker Compose, TypeScript, Python, REST, WebSockets, CI/CD.
              </p>
            </div>
          </div>
        )}

        {/* TAB 6: Outreach Studio */}
        {activeTab === 'outreach-studio' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-indigo-400" />
                Direct DM & Email Outreach Generator
              </h3>
              <p className="text-xs text-slate-400">High-converting cold message templates tailored for Web3 founders, CTOs, and grant leads.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 font-medium mb-1.5 block">Recipient Name / Founder Handle:</label>
                <input
                  type="text"
                  placeholder="e.g. Mert / Anatoly / Austin"
                  value={founderName}
                  onChange={(e) => setFounderName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-medium mb-1.5 block">Target Role:</label>
                <input
                  type="text"
                  value={userRoleTarget}
                  onChange={(e) => setUserRoleTarget(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Cold Twitter/X & Telegram DM Template:</span>
                <button
                  onClick={() => handleCopyText(`Hey ${founderName || '[Name]'}, saw you're expanding engineering at [Company]. I'm a ${userRoleTarget} with 22 production repos on GitHub (github.com/sidsri14). Recently built SolCredit (Anchor lending protocol with on-chain risk scoring for the Colosseum $840K World's Fair) and Solana StealthShield (ZK Curve25519 stealth transfers). Would love to contribute to your core infrastructure. Here's my 1-page resume: [Resume Link]. Open for a quick technical chat this week?`, 'cold-dm')}
                  className="px-3 py-1 rounded-lg brand-gradient text-xs font-bold text-white shadow-md flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedId === 'cold-dm' ? 'Copied!' : 'Copy Template'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-900/90 text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed">
{`Hey ${founderName || '[Name]'}, saw you're expanding engineering at [Company]. I'm a ${userRoleTarget} with 22 production repos on GitHub (github.com/sidsri14). Recently built SolCredit (Anchor lending protocol with on-chain risk scoring for the Colosseum $840K World's Fair) and Solana StealthShield (ZK Curve25519 stealth transfers). Would love to contribute to your core infrastructure. Here's my 1-page resume: [Resume Link]. Open for a quick technical chat this week?`}
              </pre>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-panel py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>Built for <strong>Siddharth Srivastava</strong> — Career Command Center</div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/sidsri14" target="_blank" rel="noreferrer" className="hover:text-white transition">github.com/sidsri14</a>
            <span>•</span>
            <a href="https://x.com/SidSri0228" target="_blank" rel="noreferrer" className="hover:text-white transition">@SidSri0228</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
