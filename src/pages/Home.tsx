import React from 'react';
import Navbar from '../navbar/Navbar';
import { Download } from 'lucide-react';

interface ProjectProps {
  title: string;
  desc: string;
}

interface CardProps {
  title: string;
  subtitle: string;
  href: string;
}

const Home: React.FC = () => {
  return (
    <div className="flex bg-[] bg-dot-pattern-main min-h-screen w-full font-sans selection:bg-emerald-500/30">
      {/* Fixed Left Navbar */}
      <Navbar />
      
      {/* Main Content Area: flex-1 allows it to take up all space between navbars */}
      <main className="ml-64 flex-1 p-20 text-zinc-300">
        
        {/* INNER WRAPPER: This controls the content width without pulling the right sidebar in */}
        <div className="max-w-4xl">
          
          {/* Overview Section */}
          <section id="overview" className="mb-12">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Overview</h2>
              <div className="flex gap-2 text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
                {['EN', '中', 'हि', 'ES', 'FR', 'PT'].map(lang => (
                  <span key={lang} className="hover:text-emerald-500 cursor-pointer transition-colors">{lang}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <StatBadge label="PROJECTS" value="6" />
              <StatBadge label="COMMITS" value="190" />
              <StatBadge label="CERTS" value="1" />
            </div>

            <div className="space-y-4 text-zinc-400 leading-relaxed max-w-3xl text-[15px]">
              <p>
                Senior @ University of Texas at Dallas studying Computer Science. I'm passionate about Back-end Development,
                AI Integration, and Data Management.
              </p>
            </div>
          </section>

          {/* Connect Section */}
          <section id="connect" className="mb-12">
            <h3 className="text-sm font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2 uppercase tracking-widest">Connect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ConnectCard 
                title="GitHub"  
                subtitle="Code, commits, and contribution history" 
                href="https://github.com/nicholas-ackley" 
              />
              <ConnectCard 
                title="LinkedIn" 
                subtitle="Professional profile and work history" 
                href="https://www.linkedin.com/in/nicholas-ackley/" 
              />
              <ConnectCard 
                title="Email" 
                subtitle="Direct contact for opportunities or questions" 
                href="mailto:your-email@example.com" 
              />
            </div>
          </section>

          {/* Download Section */}
          <section id="download" className="mb-12">
            <h3 className="text-sm font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2 uppercase tracking-widest">Download</h3>
            <div className="max-w-md">
              <DownloadCard 
                title="Resume" 
                subtitle="PDF format, updated 2026" 
                filePath="/resume.pdf" 
              />
            </div>
          </section>

          {/* Featured Projects Section */}
          <section id="projects">
            <h3 className="text-sm font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2 uppercase tracking-widest">Featured Projects</h3>
            <div className="space-y-3">
              <ProjectCard title="toyota-engine" desc="A prediction engine for Toyota's vehicle data" />
              <ProjectCard title="assembly-game" desc="a math matching game made in assembly" />
            </div>
          </section>
        </div>
      </main>

      {/* Right Sidebar: Hugging the right edge */}
      <aside className="w-64 p-12 text-[10px] text-zinc-500 uppercase tracking-[0.15em] sticky top-0 h-screen hidden xl:block border-l border-zinc-800/50">
        <p className="mb-6 text-zinc-400 font-bold">On this page</p>
        <ul className="space-y-4">
          {['Connect', 'Download', 'Featured Projects'].map(item => (
            <li key={item} className="hover:text-emerald-500 cursor-pointer transition-colors border-l border-transparent hover:border-emerald-500 pl-4">
              <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

/* --- Components --- */

const DownloadCard: React.FC<{ title: string; subtitle: string; filePath: string }> = ({ title, subtitle, filePath }) => (
  <a 
    href={filePath} 
    download
    className="bg-[#111] border border-zinc-800 p-4 rounded group hover:border-zinc-600 transition-all cursor-pointer relative block no-underline"
  >
    <div className="flex justify-between items-center">
      <div>
        <h4 className="text-sm font-bold text-zinc-200">{title}</h4>
        <p className="text-xs text-zinc-500 mt-1">{subtitle}</p>
      </div>
      <Download size={18} className="text-zinc-700 group-hover:text-emerald-500 transition-colors" />
    </div>
  </a>
);

const StatBadge: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-[#111] border border-zinc-800 px-3 py-1 rounded text-[10px] font-bold tracking-wider">
    <span className="text-zinc-500">{label}</span> <span className="text-emerald-500 ml-1">{value}</span>
  </div>
);

const ConnectCard: React.FC<CardProps> = ({ title, subtitle, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-[#111] border border-zinc-800 p-4 rounded group hover:border-zinc-600 transition-all cursor-pointer relative block no-underline">
    <h4 className="text-sm font-bold text-zinc-200">{title}</h4>
    <p className="text-xs text-zinc-500 mt-1">{subtitle}</p>
    <span className="absolute top-4 right-4 text-zinc-700 group-hover:text-emerald-500 transition-colors">→</span>
  </a>
);

const ProjectCard: React.FC<ProjectProps> = ({ title, desc }) => (
  <div className="bg-[#111] border border-zinc-800 p-5 rounded group hover:border-emerald-500/30 transition-all cursor-pointer">
    <h4 className="text-sm font-bold text-emerald-500 mb-1">{title}</h4>
    <p className="text-xs text-zinc-500">{desc}</p>
  </div>
);

export default Home;