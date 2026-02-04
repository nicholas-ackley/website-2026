import { motion } from 'framer-motion';
import { Terminal, Cpu, Globe, Rocket, BookOpen } from 'lucide-react';

const Roadmap: React.FC = () => {
  const timeline = [
    {
      year: 'Year 1: Freshman Year!',
      status: 'Completed',
      icon: <Terminal className="text-emerald-500" size={20} />,
      content: 'Learning about the fundamentals of programming, mathematics, and what a software engineer does. Built small projects to solidify concepts (calculators and simple GUIs).',
      skills: ['C++'],
      accentColor: 'border-emerald-500/20',
      iconBg: 'bg-emerald-500/10'
    },
    {
      year: 'Year 2: Sophomore Year!',
      status: 'Completed',
      icon: <Cpu className="text-blue-500" size={20} />,
      content: 'Learning more about the connection between hardware and software, data structures and Java! Landed my first internship as a software engineering intern!',
      skills: ['Javascript','React', 'C++', 'Data Structures'],
      accentColor: 'border-blue-500/20',
      iconBg: 'bg-blue-500/10'
    },
    {
      year: 'Year 3: Junior Year!',
      status: 'Completed',
      icon: <Globe className="text-amber-500" size={20} />,
      content: 'Completed my first Hackathon, and discovered my passion for Data science and Backend management. Database systems, language and paradigms, and digital logic design were some of the key courses this year.',
      skills: ['Python', 'Java', 'SQL', 'Arduino'],
      accentColor: 'border-amber-500/20',
      iconBg: 'bg-amber-500/10'
    },
    {
      year: 'Year 4: Senior Year!',
      status: 'Upcoming', // You can change this to 'Current' when ready
      icon: <Rocket className="text-purple-500" size={20} />,
      content: 'Currently seeking summer internships as I approach my graduation date! Interested in Data Science and AI Integration. Working on a capstone project involving Computer Vision and AI integration to help Alzheimer\'s patients navigate digital environments more easily.',
      skills: ['Research', 'System Design', 'Leadership'],
      accentColor: 'border-purple-500/20',
      iconBg: 'bg-purple-500/10'
    },
  ];

  return (
    <main className="ml-64 flex-1 p-12 text-zinc-300 bg-dot-pattern min-h-screen antialiased selection:bg-emerald-500/30">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Lifecycle</span>
          </div>
          <h1 className="text-5xl font-bold text-zinc-100 mb-6 tracking-tighter">Academic Roadmap</h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            A vertical trace of my journey through Computer Science, marking technical milestones and future trajectories.
          </p>
        </header>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-800" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isUpcoming = item.status === 'Upcoming';
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative pl-12 ${isUpcoming ? 'opacity-60' : 'opacity-100'}`}
                >
                  {/* Node Icon Container */}
                  <div className={`absolute left-0 top-0 w-10 h-10 rounded-full border border-zinc-800 bg-[#0a0a0a] flex items-center justify-center z-10 transition-all duration-500 ${item.iconBg}`}>
                    {item.icon}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">{item.year}</span>
                      
                      {/* Dynamic Badges based on status */}
                      {item.status === 'Completed' ? (
                        <span className="text-[9px] font-bold bg-zinc-800 text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded uppercase">Archive</span>
                      ) : item.status === 'Current' ? (
                        <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded uppercase">Active Phase</span>
                      ) : (
                        <span className="text-[9px] font-bold bg-zinc-900 text-zinc-700 border border-zinc-800 px-2 py-0.5 rounded uppercase italic">Current</span>
                      )}
                    </div>

                    <div className={`bg-[#111] border ${item.accentColor} p-6 rounded-lg hover:bg-[#141414] transition-all group`}>
                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                        {item.content}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map(skill => (
                          <span key={skill} className="text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded group-hover:text-zinc-300 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Stat */}
        <footer className="mt-20 pt-12 border-t border-zinc-900 flex justify-between items-center text-zinc-600">
          <div className="flex items-center gap-4">
            <BookOpen size={16} />
            <span className="text-xs uppercase tracking-widest font-bold">University of Texas at Dallas</span>
          </div>
          <span className="font-mono text-[10px]">EST. GRADUATION DECEMBER 2026</span>
        </footer>
      </div>
    </main>
  );
};

export default Roadmap;