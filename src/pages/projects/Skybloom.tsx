import React from 'react';

const SkyBloom: React.FC = () => {
  const techStack = ['Godot Engine', 'GDScript', 'C#', 'SQLite', 'Aseprite', 'OpenSimplexNoise'];

  return (
    <main className="ml-64 flex-1 p-12 text-zinc-300 bg-dot-pattern min-h-screen antialiased">
      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-500 font-mono text-[10px] px-2 py-0.5 border border-amber-500/30 bg-amber-500/5 rounded uppercase tracking-wider animate-pulse">
              Work In Progress
            </span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">Game Development</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-4 tracking-tight">SkyBloom</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            A Starde -inspired sandbox adventure where players cultivate life on floating islands! 
            Master procedural farming, interact with a cast of unique NPCs, and uncover the mystery 
            of the floating world through a narrative driven Story Mode.
          </p>
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

        {/* Core Mechanics: Farming & NPC Interaction */}
        <section id="mechanics" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">World Architecture</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            The world is powered by a custom <strong className="text-zinc-200">OpenSimplexNoise</strong> generation system, 
            blending hand-crafted story islands with procedural resource clusters. I am currently refining the 
            weight-based animal spawning and the multi-stage crop growth cycles in GDScript.
          </p>

          {/* VS CODE THEMED BOX (GDScript) */}
          <div className="bg-[#1e1e1e] border border-zinc-800 rounded-lg p-6 font-mono text-[13px] shadow-2xl overflow-hidden mb-8">
            <div className="text-[#6a9955] mb-4 text-xs italic">// Island Resource & Tile Dispatcher</div>
            <pre className="leading-relaxed">
              <code>
                <span className="text-[#569cd6]">func</span> <span className="text-[#dcdcaa]">generate_island</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">seed_val</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#4ec9b0]">int</span><span className="text-[#d4d4d4]">):</span><br />
                &nbsp;&nbsp;<span className="text-[#569cd6]">var</span> <span className="text-[#9cdcfe]">noise</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#4ec9b0]">FastNoiseLite</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">new</span><span className="text-[#d4d4d4]">()</span><br />
                &nbsp;&nbsp;<span className="text-[#9cdcfe]">noise</span><span className="text-[#d4d4d4]">.</span><span className="text-[#9cdcfe]">seed</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#9cdcfe]">seed_val</span><br />
                &nbsp;&nbsp;<span className="text-[#c586c0]">for</span> <span className="text-[#9cdcfe]">x</span> <span className="text-[#c586c0]">in</span> <span className="text-[#dcdcaa]">range</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">width</span><span className="text-[#d4d4d4]">):</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">for</span> <span className="text-[#9cdcfe]">y</span> <span className="text-[#c586c0]">in</span> <span className="text-[#dcdcaa]">range</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">height</span><span className="text-[#d4d4d4]">):</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">var</span> <span className="text-[#9cdcfe]">val</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#9cdcfe]">noise</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">get_noise_2d</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">x</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">y</span><span className="text-[#d4d4d4]">)</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">if</span> <span className="text-[#9cdcfe]">val</span> <span className="text-[#d4d4d4]">&gt;</span> <span className="text-[#b5cea8]">0.4</span><span className="text-[#d4d4d4]">:</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">spawn_tile</span><span className="text-[#d4d4d4]">(</span><span className="text-[#4ec9b0]">Vector2</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">x</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">y</span><span className="text-[#d4d4d4]">),</span> <span className="text-[#ce9178]">"fertile_soil"</span><span className="text-[#d4d4d4]">)</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">elif</span> <span className="text-[#9cdcfe]">val</span> <span className="text-[#d4d4d4]">&gt;</span> <span className="text-[#b5cea8]">0.7</span><span className="text-[#d4d4d4]">:</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#dcdcaa]">spawn_npc_spawnpoint</span><span className="text-[#d4d4d4]">(</span><span className="text-[#4ec9b0]">Vector2</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">x</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">y</span><span className="text-[#d4d4d4]">))</span>
              </code>
            </pre>
          </div>
          
        </section>

        {/* Feature Grid */}
        <section id="features" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">Project Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#111] border border-zinc-800 p-4 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2">Farming & Livestock</h4>
              <p className="text-[11px] text-zinc-500 leading-tight">Implementing soil nutrients and animal AI for a sustainable ecosystem.</p>
            </div>
            <div className="bg-[#111] border border-zinc-800 p-4 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2">Narrative NPC's</h4>
              <p className="text-[11px] text-zinc-500 leading-tight">Designing a branching dialogue system to drive the core story mode.</p>
            </div>
            <div className="bg-[#111] border border-zinc-800 p-4 rounded border-dashed border-zinc-700">
              <h4 className="text-amber-500 text-[10px] font-bold uppercase mb-2 tracking-widest">In Development</h4>
              <p className="text-[11px] text-zinc-500 leading-tight">Multi-island travel systems and airship physics are currently in R&D.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SkyBloom;