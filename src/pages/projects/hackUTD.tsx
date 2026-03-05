import React from 'react';

const HackUTD: React.FC = () => {
  const techStack = ['React', 'TypeScript', 'Node.js', 'Python', 'Flask', 'PostgreSQL', 'Scikit-Learn'];

  return (
    <main className="ml-64 flex-1 p-12 text-zinc-300 bg-dot-pattern min-h-screen antialiased">
      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-emerald-500 font-mono text-[10px] px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/5 rounded uppercase tracking-wider">HackUTD 2026</span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">Toyota Financial Services Track</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-4 tracking-tight">Toyota Vehicle Matchmaker</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
           A full stack web application that leverages AI to assist users to skip the rigourous car buying process by recommending cars more personalized to your needs. The website prompts
           a user a series of quesitons about their preferences and uses a multinomial logistic regression model to suggest the best vehicle options from Toyota's lineup. Certain questions have
           more weight in the decision making of the car model. 
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

        {/* The Logic Section */}
{/* The Scoring System */}
        <section id="scoring" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">The Scoring Engine</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            The application calculates a <strong className="text-zinc-200">Utility Score</strong> for every vehicle in the Toyota fleet. 
            By iterating through the dataset, the engine applies weighted heuristics to determine the "Best Fit" based on the user's specific lifestyle vector.
          </p>

          {/* VS CODE THEMED BOX (Python Backend Logic) */}
          <div className="bg-[#1e1e1e] border border-zinc-800 rounded-lg p-6 font-mono text-[13px] shadow-2xl overflow-hidden mb-8">
            <div className="text-[#6a9955] mb-4 text-xs italic">// FastAPI Recommendation Logic</div>
            <pre className="leading-relaxed">
              <code>
                <span className="text-[#c586c0]">for</span> <span className="text-[#9cdcfe]">car</span> <span className="text-[#c586c0]">in</span> <span className="text-[#9cdcfe]">car_data</span><span className="text-[#d4d4d4]">:</span><br />
                &nbsp;&nbsp;<span className="text-[#9cdcfe]">score</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#b5cea8]">0</span><br /><br />
                &nbsp;&nbsp;<span className="text-[#6a9955]"># 1. Price Proximity (Inverse Linear Scaling)</span><br />
                &nbsp;&nbsp;<span className="text-[#c586c0]">if</span> <span className="text-[#ce9178]">"price"</span> <span className="text-[#c586c0]">in</span> <span className="text-[#9cdcfe]">car</span><span className="text-[#d4d4d4]">:</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9cdcfe]">diff</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#dcdcaa]">abs</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">car</span><span className="text-[#d4d4d4]">[</span><span className="text-[#ce9178]">"price"</span><span className="text-[#d4d4d4]">] - </span><span className="text-[#9cdcfe]">max_price</span><span className="text-[#d4d4d4]">)</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9cdcfe]">score</span> <span className="text-[#d4d4d4]">+=</span> <span className="text-[#dcdcaa]">max</span><span className="text-[#d4d4d4]">(</span><span className="text-[#b5cea8]">0</span><span className="text-[#d4d4d4]">, </span><span className="text-[#b5cea8]">100</span><span className="text-[#d4d4d4]"> - </span><span className="text-[#9cdcfe]">diff</span><span className="text-[#d4d4d4]"> / </span><span className="text-[#b5cea8]">1000</span><span className="text-[#d4d4d4]">)</span><br /><br />
                &nbsp;&nbsp;<span className="text-[#6a9955]"># 2. Heuristic Categorization</span><br />
                &nbsp;&nbsp;<span className="text-[#c586c0]">if</span> <span className="text-[#9cdcfe]">answers</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">get</span><span className="text-[#d4d4d4]">(</span><span className="text-[#ce9178]">"householdSize"</span><span className="text-[#d4d4d4]">) == </span><span className="text-[#ce9178]">"Yes"</span><span className="text-[#d4d4d4]">:</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">if</span> <span className="text-[#9cdcfe]">car</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">get</span><span className="text-[#d4d4d4]">(</span><span className="text-[#ce9178]">"sizeCategory"</span><span className="text-[#d4d4d4]">) </span><span className="text-[#c586c0]">in</span> <span className="text-[#d4d4d4]">[</span><span className="text-[#ce9178]">"SUV"</span><span className="text-[#d4d4d4]">, </span><span className="text-[#ce9178]">"Truck"</span><span className="text-[#d4d4d4]">]:</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9cdcfe]">score</span> <span className="text-[#d4d4d4]">+=</span> <span className="text-[#b5cea8]">20</span>
              </code>
            </pre>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111] border border-zinc-800 p-5 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2 tracking-widest">Similarity Scoring</h4>
              <p className="text-[11px] text-zinc-500 leading-tight">
                Calculates the delta between MSRP and User Budget, rewarding cars that fall within the financial threshold.
              </p>
            </div>
            <div className="bg-[#111] border border-zinc-800 p-5 rounded">
              <h4 className="text-emerald-500 text-[10px] font-bold uppercase mb-2 tracking-widest">Logic Weighting</h4>
              <p className="text-[11px] text-zinc-500 leading-tight">
                Assigns hard weights (e.g., +40 for Fuel Match) to ensure primary requirements are prioritized over aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* AI Support Infrastructure */}
        <section id="support" className="mb-16">
          <h3 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] border-b border-zinc-800/50 pb-2 mb-6">AI Support Infrastructure</h3>
          
          {/* VS CODE THEMED BOX 2 */}
          <div className="bg-[#1e1e1e] border border-zinc-800 rounded-lg p-6 font-mono text-[13px] shadow-2xl overflow-hidden">
            <div className="text-[#6a9955] mb-4 text-xs italic">// System Prompt Engineering</div>
            <pre className="leading-relaxed">
              <code>
                <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">systemPrompt</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ce9178]">"You are a Toyota assistant..."</span><span className="text-[#d4d4d4]">;</span><br /><br />
                <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">response</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#569cd6]">await</span> <span className="text-[#4fc1ff]">openai</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">chat</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">completions</span><span className="text-[#d4d4d4]">.</span><span className="text-[#dcdcaa]">create</span><span className="text-[#d4d4d4]">({'{'}</span><br />
                &nbsp;&nbsp;<span className="text-[#9cdcfe]">model</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">"gpt-3.5-turbo"</span><span className="text-[#d4d4d4]">,</span><br />
                &nbsp;&nbsp;<span className="text-[#9cdcfe]">messages</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#d4d4d4]">[</span>{'{'} <span className="text-[#9cdcfe]">role</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#ce9178]">"system"</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">content</span><span className="text-[#d4d4d4]">:</span> <span className="text-[#4fc1ff]">systemPrompt</span> {'}'}<span className="text-[#d4d4d4]">],</span><br />
                <span className="text-[#d4d4d4]">{'}'})</span><span className="text-[#d4d4d4]">;</span>
              </code>
            </pre>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HackUTD;