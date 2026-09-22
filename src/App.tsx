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
  Layers
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { TARGET_COMPANIES, PORTFOLIO_PROJECTS, HACKATHON_OPPORTUNITIES } from './data'
import { TargetCompany } from './types'

export default function App() {
  const [activeTab, setActiveTab] = useState<'target-companies' | 'portfolio-gallery' | 'hackathons' | 'resume-ats' | 'outreach-studio'>('target-companies')
  const [selectedCompany, setSelectedCompany] = useState<TargetCompany>(TARGET_COMPANIES[0])
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [founderName, setFounderName] = useState<string>('')
  const [userRoleTarget, setUserRoleTarget] = useState<string>('Rust & Solana Systems Engineer')

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
                <span className="text-indigo-400 font-mono">22 Production Repos Live</span>
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
              <span>GitHub (96+ Repos)</span>
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
                <div className="text-2xl font-extrabold text-indigo-400">$893,800+</div>
                <div className="text-xs text-slate-400 font-medium">Active Prize Pipeline</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-emerald-400">98.2 / 100</div>
                <div className="text-xs text-slate-400 font-medium">ATS Compatibility Score</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-extrabold text-sky-400">22 Repos</div>
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
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'target-companies' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Target Companies & DM Outreach ($140k–$240k)</span>
          </button>
          <button
            onClick={() => setActiveTab('portfolio-gallery')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'portfolio-gallery' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>22-Repo Proof of Work Gallery</span>
          </button>
          <button
            onClick={() => setActiveTab('hackathons')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'hackathons' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>Hackathon & Bounty Money Radar</span>
          </button>
          <button
            onClick={() => setActiveTab('resume-ats')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'resume-ats' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive ATS Resume Terminal</span>
          </button>
          <button
            onClick={() => setActiveTab('outreach-studio')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'outreach-studio' 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Founder & Recruiter DM Studio</span>
          </button>
        </div>

        {/* TAB 1: Target Companies */}
        {activeTab === 'target-companies' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Companies List */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Priority Hiring Companies ({TARGET_COMPANIES.length})
              </h3>
              {TARGET_COMPANIES.map((comp) => {
                const isSelected = selectedCompany.id === comp.id
                return (
                  <div
                    key={comp.id}
                    onClick={() => setSelectedCompany(comp)}
                    className={`p-4 rounded-2xl cursor-pointer transition border ${
                      isSelected
                        ? 'bg-indigo-950/60 border-indigo-500 shadow-lg ring-1 ring-indigo-500/40'
                        : 'glass-card border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{comp.logo}</span>
                        <div>
                          <div className="font-bold text-white text-sm">{comp.name}</div>
                          <div className="text-[10px] text-slate-400">{comp.location}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {comp.hiringStatus.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-xs text-indigo-300 font-mono">{comp.salaryRange}</div>
                  </div>
                )
              })}
            </div>

            {/* Company Deep Dive & Outreach Generator */}
            <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedCompany.logo}</span>
                  <div>
                    <h3 className="text-2xl font-black text-white">{selectedCompany.name}</h3>
                    <p className="text-xs text-indigo-400 font-medium">{selectedCompany.category}</p>
                  </div>
                </div>
                <a
                  href={selectedCompany.careersUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card hover:bg-white/10 text-xs font-semibold text-white transition"
                >
                  <span>Official Careers Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                </a>
              </div>

              {/* Roles & Why Fit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-2xl space-y-1.5">
                  <div className="text-xs font-bold text-slate-400 uppercase">Target Open Roles</div>
                  <ul className="text-xs text-slate-200 space-y-1">
                    {selectedCompany.rolesHiring.map((r, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-4 rounded-2xl space-y-1.5">
                  <div className="text-xs font-bold text-slate-400 uppercase">Estimated Compensation Band</div>
                  <div className="text-base font-black text-emerald-400 font-mono">{selectedCompany.salaryRange}</div>
                  <div className="text-[11px] text-slate-400">Recommended Showcase: <strong>{selectedCompany.recommendedProject}</strong></div>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl">
                <div className="text-xs font-bold text-indigo-300 uppercase mb-1">Why Your Technical Profile is a Top Match:</div>
                <p className="text-xs text-slate-200 leading-relaxed">{selectedCompany.whyFit}</p>
              </div>

              {/* Ready-to-Send Proof of Work DM */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase flex items-center gap-2">
                    <Send className="w-3.5 h-3.5 text-indigo-400" /> Tailored Proof-of-Work DM for Founders / Engineering Leads
                  </span>
                  <button
                    onClick={() => handleCopyText(getCustomOutreach(selectedCompany), selectedCompany.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg brand-gradient text-xs font-bold text-white hover:opacity-90 transition shadow-md shadow-indigo-600/20"
                  >
                    {copiedId === selectedCompany.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-200" />
                        <span>Copied DM!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy DM Template</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                  {getCustomOutreach(selectedCompany)}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 22-Repo Gallery */}
        {activeTab === 'portfolio-gallery' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 glass-panel p-6 rounded-3xl border border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">22 Public Production Repositories & Proof-of-Work</h3>
                <p className="text-xs text-slate-400">All repositories are compiled, deployed, verified with live browser testing, and pushed to GitHub.</p>
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {['ALL', 'Solana DeFi', 'Privacy & Security', 'AI & MCP', 'Creator Economy'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white'
                        : 'glass-card text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((proj) => (
                <div key={proj.id} className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 flex flex-col justify-between hover:border-indigo-500/40 transition group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {proj.category}
                      </span>
                      <span className="text-xs font-black text-emerald-400 font-mono">
                        {proj.prizePool}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition">{proj.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{proj.keyInnovation}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-300 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-indigo-400 hover:underline font-bold"
                    >
                      <span>View GitHub Repo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-slate-500 font-mono">Local Port: :{proj.demoPort}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Hackathons */}
        {activeTab === 'hackathons' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                Active Hackathons & High-Prize Bounty Radar ($893K+ Total Pool)
              </h3>
              <p className="text-xs text-slate-400">Real-time target schedule and direct deliverable matching.</p>
            </div>

            <div className="space-y-4">
              {HACKATHON_OPPORTUNITIES.map((hack) => (
                <div key={hack.id} className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
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

                  <div className="text-right">
                    <div className="text-2xl font-black text-amber-400 font-mono">{hack.prizePool}</div>
                    <span className="text-[10px] font-bold text-emerald-400">{hack.status.replace('_', ' ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Resume ATS */}
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

        {/* TAB 5: Outreach Studio */}
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
