import {Layers, GitBranch, Users, Database, ShieldCheck } from 'lucide-react';

const Experience: React.FC = () => {
  const getSkillStyles = (skill: string) => {
    const skillMap: Record<string, string> = {
      'Python': 'border-blue-500/30 text-blue-400',
      'JavaScript': 'border-yellow-500/30 text-yellow-400',
      'React': 'border-cyan-500/30 text-cyan-400',
      'Java': 'border-orange-500/30 text-orange-400',
      'SQL': 'border-emerald-500/30 text-emerald-400',
      'Git': 'border-red-500/30 text-red-400',
      'JIRA': 'border-blue-600/30 text-blue-500',
      'CI/CD': 'border-purple-500/30 text-purple-400',
    };
    return skillMap[skill] || 'border-zinc-800 text-zinc-400';
  };

  return (
    <main className="ml-64 flex-1 p-12 text-zinc-300 bg-dot-pattern min-h-screen antialiased">
      <div className="max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Professional.trace</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-4 tracking-tight">Experience</h1>
        </header>

        {/* --- WORK EXPERIENCE SECTION --- */}
        <section className="space-y-20 mb-20">
          
          {/* McKesson */}
          <div className="relative pl-8 border-l border-zinc-800 group">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-zinc-100 font-bold text-xl">Software Engineering Intern</h3>
                <p className="text-emerald-500 text-sm font-medium">McKesson — Richardson, TX</p>
              </div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase bg-zinc-900 px-2 py-1 border border-zinc-800 rounded">May 2024 — Aug 2025</span>
            </div>

            <div className="space-y-6 text-sm text-zinc-400 leading-relaxed">
              <div>
                <h4 className="text-zinc-200 font-bold mb-2 flex items-center gap-2 italic">
                  <ShieldCheck size={14} className="text-emerald-500" /> Data Governance & Pipeline Automation
                </h4>
                <p>
                  Engineered robust CI/CD automation scripts to manage the lifecycle of massive healthcare datasets. My work focused on ensuring that incoming data met strict clinical validation rules before entering the production environment, reducing manual audit time significantly.
                </p>
              </div>

              <div>
                <h4 className="text-zinc-200 font-bold mb-2 italic">
                  <Database size={14} className="text-emerald-500" /> Statistical Monitoring & Integrity
                </h4>
                <p>
                  Developed Python-based monitoring tools to detect statistical anomalies in real-time. By implementing automated data-quality checks, I helped the team identify corrupted or non-compliant records early in the ETL process, maintaining the high trust required for downstream medical analytics.
                </p>
              </div>
            </div>
            
          </div>

          {/* Traver Connect */}
          <div className="relative pl-8 border-l border-zinc-800 group">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-zinc-100 font-bold text-xl">Software Engineering Intern</h3>
                <p className="text-blue-400 text-sm font-medium">Traver Connect — Richardson, TX</p>
              </div>
              <span className="text-zinc-500 text-[10px] font-mono uppercase bg-zinc-900 px-2 py-1 border border-zinc-800 rounded">May 2023 — Aug 2023</span>
            </div>

            <div className="space-y-6 text-sm text-zinc-400 leading-relaxed">
              <div>
                <h4 className="text-zinc-200 font-bold mb-2 flex items-center gap-2 italic">
                  <Users size={14} className="text-blue-400" /> Agile Team Integration
                </h4>
                <p>
                  Fully integrated into a high-velocity <strong>Agile/Scrum</strong> environment, working directly under the guidance of the Scrum Master. I participated in daily stand-ups, sprint planning, and retrospective meetings, gaining a deep understanding of how enterprise software moves from a Jira ticket to a production release.
                </p>
                
              </div>

              <div>
                <h4 className="text-zinc-200 font-bold mb-2 italic">
                  <GitBranch size={14} className="text-blue-400" /> Collaborative Version Control
                </h4>
                <p>
                  Managed features through the full Git lifecycle. I learned to navigate complex codebases by creating feature branches, resolving merge conflicts, and participating in peer code reviews. I utilized <strong>JIRA</strong> to track my development progress and ensure all deliverables aligned with sprint objectives.
                </p>
              </div>

              <div>
                <h4 className="text-zinc-200 font-bold mb-2 italic">
                  <Layers size={14} className="text-blue-400" /> Frontend Dashboard Engineering
                </h4>
                <p>
                  Successfully delivered a project to build a dynamic user dashboard using <strong>React</strong> and <strong>JavaScript</strong>. The task involved fetching pre-filtered backend data and implementing frontend reduction logic to display complex datasets cleanly, focusing on reducing API rendering latency for the end-user.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="mb-20">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-8">
            Skill Distribution
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Python', 'JavaScript', 'React', 'Java', 'SQL', 'Git', 'JIRA', 'CI/CD', 'AGILE', 'SCRUM'].map(skill => (
              <span key={skill} className={`px-3 py-1 bg-zinc-900/50 border rounded text-[11px] font-bold tracking-wide transition-all ${getSkillStyles(skill)}`}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Experience;