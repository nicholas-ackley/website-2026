import React from 'react';

const MathMatch: React.FC = () => {
  const techStack = ['MIPS Assembly', 'Memory Addressing', 'Syscall 30 (Time)', 'Stack Management', 'MARS/SPIM'];

  return (
    <main className="ml-64 flex-1 p-12 text-zinc-300 bg-dot-pattern min-h-screen antialiased">
      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-emerald-500 font-mono text-[10px] px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/5 rounded uppercase tracking-wider">Low-Level Systems</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">Assembly Logic Game</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-4 tracking-tight">MIPS Math Matcher</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            A memory-matching game built in MIPS Assembly where players match mathematical equations to their results. 
            The project features a real-time countdown timer and a dynamic 4x4 coordinate-based grid system.
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

        {/* Core Mechanic: 2D Array Mapping */}
        <section id="addressing" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">Grid Addressing Logic</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            The grid (A1-D4) is mapped to a 1D array in the <code className="text-emerald-500">.data</code> segment. 
            I implemented a custom parser to convert ASCII user input into a memory offset using the formula: 
            <strong className="text-zinc-200"> Index = (Row * 4) + Column</strong>.
          </p>
          
          {/* VS CODE THEMED BOX (Memory Logic) */}
          <div className="bg-[#1e1e1e] border border-zinc-800 rounded-lg p-6 font-mono text-[13px] shadow-2xl overflow-hidden mb-6">
            <div className="text-[#6a9955] mb-4 text-xs italic">// Calculating the Array Index from User Input</div>
            
            <pre className="leading-relaxed">
              <code>
                <span className="text-[#6a9955]"># Convert 'A'-'D' and '1'-'4' to Index</span><br />
                <span className="text-[#569cd6]">subi</span> <span className="text-[#9cdcfe]">$t2</span><span className="text-[#d4d4d4] Anthony">,</span> <span className="text-[#9cdcfe]">$t2</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#b5cea8]">65</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]"># ASCII 'A' -&gt; 0</span><br />
                <span className="text-[#569cd6]">subi</span> <span className="text-[#9cdcfe]">$t3</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">$t3</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#b5cea8]">49</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]"># ASCII '1' -&gt; 0</span><br /><br />
                <span className="text-[#569cd6]">li</span>&nbsp;&nbsp;&nbsp;<span className="text-[#9cdcfe]">$t4</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#b5cea8]">4</span><br />
                <span className="text-[#569cd6]">mul</span>&nbsp;&nbsp;<span className="text-[#9cdcfe]">$t2</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">$t2</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">$t4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]"># Row * 4</span><br />
                <span className="text-[#569cd6]">add</span>&nbsp;&nbsp;<span className="text-[#9cdcfe]">$t2</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">$t2</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">$t3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]"># + Column</span><br />
                <span className="text-[#569cd6]">sll</span>&nbsp;&nbsp;<span className="text-[#9cdcfe]">$t2</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">$t2</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#b5cea8]">2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]"># Word Alignment (Index * 4)</span>
              </code>
            </pre>
          </div>
        </section>

        {/* Real-Time Timer Logic */}
        <section id="timer" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">Real-Time Timer System</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            The game includes a 120-second time limit. I used <strong className="text-zinc-200">Syscall 30</strong> to fetch the 64-bit system time in milliseconds at the start and end of every loop, calculating the remaining time to enforce a "Game Over" state.
          </p>

          <div className="bg-[#1e1e1e] border border-zinc-800 rounded-lg p-6 font-mono text-[13px] shadow-2xl overflow-hidden">
            <div className="text-[#6a9955] mb-4 text-xs italic">// Time Difference Calculation</div>
            <pre className="leading-relaxed">
              <code>
                <span className="text-[#569cd6]">li</span>&nbsp;&nbsp;<span className="text-[#v0]">$v0</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#b5cea8]">30</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]"># Get System Time</span><br />
                <span className="text-[#569cd6]">syscall</span><br />
                <span className="text-[#569cd6]">lw</span>&nbsp;&nbsp;<span className="text-[#9cdcfe]">$t4</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">start_time</span><br />
                <span className="text-[#569cd6]">sub</span> <span className="text-[#9cdcfe]">$t5</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#a0]">$a0</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">$t4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6a9955]"># Elapsed = Now - Start</span>
              </code>
            </pre>
          </div>
        </section>

        {/* Project Statistics */}
        <section id="stats" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">Game Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#111] border border-zinc-800 p-4 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2">Dynamic Logic</h4>
              <p className="text-[11px] text-zinc-500">Evaluates equations like "4x6" vs numeric values "24" in real-time.</p>
            </div>
            <div className="bg-[#111] border border-zinc-800 p-4 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2">Flags System</h4>
              <p className="text-[11px] text-zinc-500">Uses a 64-byte matched_flags space to track revealed pairs.</p>
            </div>
            <div className="bg-[#111] border border-zinc-800 p-4 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2">I/O Handling</h4>
              <p className="text-[11px] text-zinc-500">Directly manages Syscalls for string printing and integer input.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MathMatch;