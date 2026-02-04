import React from 'react';

const Alzheimers: React.FC = () => {
  const techStack = ['Senior Research', 'UI/UX Design', 'Cognitive Accessibility', 'Human-Computer Interaction'];

  return (
    <main className="ml-64 flex-1 p-12 text-zinc-300 bg-dot-pattern min-h-screen antialiased">
      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-500 font-mono text-[10px] px-2 py-0.5 border border-amber-500/30 bg-amber-500/5 rounded uppercase tracking-wider animate-pulse">
              Work In Progress
            </span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">Senior Research Project</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-4 tracking-tight">Alzheimer's Cognitive Interface</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Currently conducting a senior research project under faculty guidance to design specialized 
            digital interfaces that accommodate the cognitive and motor-function shifts in Alzheimer's patients.
          </p>
        </header>

        {/* Tech Stack / Research Areas */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="bg-[#111] border border-zinc-800 text-zinc-400 px-3 py-1 rounded text-[11px] font-bold tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Research Objective */}
        <section id="objective" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">Research Objective</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Innovate a solution for Alzheimer's patients to better navigate digital environments through a virtual screen that can recognize faces that list doctors, caregivers, and family members.
            <strong className="text-zinc-200"> Computer vision</strong>—a field of artificial intelligence (AI) 
                that enables computers to interpret, analyze, and understand visual information from the world, such as digital images and videos
          </p>
          
          <div className="bg-[#111] border border-zinc-800 rounded-lg p-8 text-center border-dashed">
            <p className="text-zinc-500 italic text-sm">
              User testing and prototype wireframes are currently under faculty review. 
              <br />Visual documentation will be updated upon phase completion.
            </p>
          </div>
        </section>

        {/* Technical Challenges */}
        <section id="challenges" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">Key Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-zinc-100 text-sm font-bold">Memory Load Reduction</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Developing a stateless navigation system where the user never needs to remember "how they got here" to find their way back.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-zinc-100 text-sm font-bold">Motor Function Buffering</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Implementing gesture-smoothing algorithms to handle unintentional tremors during touch-screen interactions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Alzheimers;