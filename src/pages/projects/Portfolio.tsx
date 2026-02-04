import React from 'react';

const Portfolio: React.FC = () => {
  const techStack = ['React', 'CSS Modules', 'Netlify', 'Intersection Observer', 'JavaScript'];

  return (
    <main className="ml-64 flex-1 p-12 text-zinc-300 bg-dot-pattern min-h-screen antialiased">
      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-emerald-500 font-mono text-[10px] px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/5 rounded uppercase tracking-wider">Web Development</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">Legacy Portfolio v1.0</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-4 tracking-tight">Portfolio v1</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            My initial foray into personal branding and web presence. This version focused on 
            fluid animations and a clean, single-page scroll architecture.
          </p>
          <a 
            href="https://nicholas-ackley.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-emerald-500 font-mono text-xs hover:text-emerald-400 transition-colors"
          >
            Live Site ↗
          </a>
        </header>

        {/* Tech Stack */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="bg-[#111] border border-zinc-800 text-zinc-400 px-3 py-1 rounded text-[11px] font-bold tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">Design Philosophy</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            v1 was built using primarily javascript and a <strong className="text-zinc-200">Component-Based Architecture</strong> in React. 
            The goal was to create a simple yet aesthetic <strong className="text-zinc-200">Personal Portfolio</strong> 
            to display my projects, experience, and my enjoyment for UI/UX design.
          </p>
          
          <div className="bg-[#1e1e1e] border border-zinc-800 rounded-lg p-6 font-mono text-[13px] shadow-2xl overflow-hidden mb-6">
            <div className="text-[#6a9955] mb-4 text-xs italic">// Legacy Scroll-Reveal Logic</div>
            <pre className="leading-relaxed">
              <code>
                <span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">observer</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">IntersectionObserver</span><span className="text-[#d4d4d4]">((</span><span className="text-[#9cdcfe]">entries</span><span className="text-[#d4d4d4]">) =&gt; {'{'}</span><br />
                &nbsp;&nbsp;<span className="text-[#9cdcfe]">entries</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">forEach</span><span className="text-[#d4d4d4]">((</span><span className="text-[#9cdcfe]">entry</span><span className="text-[#d4d4d4]">) =&gt; {'{'}</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">if</span> <span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">entry</span><span className="text-[#d4d4d4]">.</span><span className="text-[#9cdcfe]">isIntersecting</span><span className="text-[#d4d4d4]">) {'{'}</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9cdcfe]">entry</span><span className="text-[#d4d4d4]">.</span><span className="text-[#9cdcfe]">target</span><span className="text-[#d4d4d4]">.</span><span className="text-[#9cdcfe]">classList</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">add</span><span className="text-[#d4d4d4]">(</span><span className="text-[#ce9178]">'show'</span><span className="text-[#d4d4d4]">);</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#d4d4d4]">{'}'}</span><br />
                &nbsp;&nbsp;<span className="text-[#d4d4d4]">{'}'});</span><br />
                <span className="text-[#d4d4d4]">{'}'});</span>
              </code>
            </pre>
          </div>
        </section>

        {/* Evolution Section */}
        <section id="evolution" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">The Move to v2</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            While v1 was effective, it relied heavily on custom CSS Modules. For the current version (v2), I decided to migrate to 
            <strong className="text-zinc-200"> Tailwind CSS</strong> and <strong className="text-zinc-200">TypeScript</strong> to ensure 
            better type safety and a faster, utility-first development workflow. This transition has significantly improved maintainability and scalability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111] border border-zinc-800 p-5 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2 tracking-wider">What worked</h4>
              <ul className="text-[11px] text-zinc-500 space-y-2 list-disc ml-3">
                <li>Successful deployment via Netlify.</li>
                <li>Responsive layout for mobile/desktop.</li>
                <li>Clear project showcase structure.</li>
              </ul>
            </div>
            <div className="bg-[#111] border border-zinc-800 p-5 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2 tracking-wider">Lessons Learned</h4>
              <ul className="text-[11px] text-zinc-500 space-y-2 list-disc ml-3">
                <li>Typed props (TS) prevent runtime errors.</li>
                <li>Centralized navigation improves UX.</li>
                <li>Utility CSS reduces bundle size.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Portfolio;