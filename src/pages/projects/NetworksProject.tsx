import React from 'react';

const NetworksProject: React.FC = () => {
  const techStack = ['Python', 'Sockets', 'Threading', 'TCP/IP', 'Colorama', 'OS Module'];

  return (
    <main className="ml-64 flex-1 p-12 text-zinc-300 bg-dot-pattern min-h-screen">
      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-emerald-500 font-mono text-xs px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/5 rounded">Systems & Networking</span>
            <span className="text-zinc-500 text-xs uppercase tracking-widest">Socket Programming</span>
          </div>
          <h1 className="text-4xl font-bold text-zinc-100 mb-4 tracking-tight">LAN Terminal Chat & File Transfer</h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            A robust, multi-threaded client-server architecture designed for local area networks, 
            featuring private messaging, user status tracking, and a custom binary file transfer protocol.
          </p>
        </header>

        {/* Tech Stack */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Multithreaded Architecture Section */}
        <section id="concurrency" className="mb-16">
          <h3 className="text-sm font-bold text-zinc-100 mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2">Concurrent Connection Handling</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            The server utilizes Python's <code className="text-emerald-500">threading</code> library to handle multiple clients simultaneously. 
            Each connection is isolated in its own thread, with a thread-safe <code className="text-emerald-500">Lock</code> mechanism used 
            to manage the shared client directory and prevent race conditions during message routing.
          </p>
          
          <div className="bg-[#0d0d0d] border border-zinc-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
            <div className="text-zinc-500 mb-4 text-xs">// Server-side threading logic</div>
            <pre className="text-zinc-300">
              <code>
{`def start_server():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((HOST, PORT))
    server.listen()
    while True:
        conn, addr = server.accept()
        # Spawning a daemon thread for each new user
        threading.Thread(target=handle_client, args=(conn, addr), daemon=True).start()`}
              </code>
            </pre>
          </div>
        </section>

        {/* File Transfer Protocol Section */}
        <section id="protocol" className="mb-16">
          <h3 className="text-sm font-bold text-zinc-100 mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2">Binary File Forwarding</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            I implemented a custom protocol for file transfers that uses a <strong>File Header</strong> to communicate 
            metadata (sender, target, filename, and size) before streaming the raw binary data. This allows the receiver 
            to pre-allocate space and track remaining bytes during transmission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111] border border-zinc-800 p-4 rounded">
              <h4 className="text-emerald-500 text-xs font-bold uppercase mb-2">Metadata Handling</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                The header <code className="text-zinc-300">FILE_HEADER sender target filename filesize</code> ensures 
                the server routes chunks correctly without corrupting the chat stream.
              </p>
            </div>
            <div className="bg-[#111] border border-zinc-800 p-4 rounded">
              <h4 className="text-emerald-500 text-xs font-bold uppercase mb-2">Stream Processing</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Binary data is transferred in 4096-byte chunks to optimize memory usage on both the server 
                and the client during high-volume transfers.
              </p>
            </div>
          </div>
        </section>

        {/* Command Routing Section */}
        <section id="routing" className="mb-16">
          <h3 className="text-sm font-bold text-zinc-100 mb-6 uppercase tracking-widest border-b border-zinc-800 pb-2">Command Routing Engine</h3>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            The system includes a command parser that interprets user inputs starting with a slash. 
            This enables features like <code className="text-zinc-300">/pm</code> for private messaging, 
            <code className="text-zinc-300">/list</code> for online users, and <code className="text-zinc-300">/nick</code> for 
            dynamic identity updates.
          </p>
        </section>
      </div>

      {/* Right Sidebar */}

    </main>
  );
};

export default NetworksProject;