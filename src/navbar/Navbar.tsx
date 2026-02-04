import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { Search, ChevronDown } from 'lucide-react';
import Me from '../images/me.jpg';

interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  subItems?: string[];
}

const Navbar: React.FC = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: 'Overview', path: '/' },
    { 
      name: 'Projects', 
      path: '/projects', 
      hasDropdown: true,
      subItems: [
        'HackUTD Toyota', 
        'Sky Bloom', 
        'Pipeline Automation', 
        'Alzheimers Interface', 
        'Computer Architecture Project',
        'Networks Project',
        'Portfolio v1'
      ]
    },
    { 
      name: 'Background', 
      path: '/background', 
      hasDropdown: true,
      subItems: ['Experience'] 
    },
    { name: 'roadmap', path: '/roadmap', hasDropdown: false },
  
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .trim();
  };

  return (
    <nav className="w-64 h-screen bg-[#0a0a0a] border-r border-zinc-800 flex flex-col p-6 fixed left-0 top-0 z-50 bg-dot-pattern antialiased">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-zinc-700 rounded-full overflow-hidden border border-zinc-800">
          <img src={Me} alt="Profile" className="w-full h-full object-cover scale-[1.2]" />
        </div>
        <div>
          <h1 className="text-zinc-100 text-[15px] font-bold tracking-tight">Nick Ackley</h1>
          <p className="text-zinc-600 font-mono text-[10px] italic leading-tight">{"{4.0.1}"}</p>
          <p className="text-zinc-500 font-mono text-[11px] cursor-pointer hover:text-emerald-500 transition-colors mt-0.5">
            API Docs <span className="text-[10px]">↗</span>
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-2.5 text-zinc-600" size={14} />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full bg-[#111]/50 border border-zinc-800/80 rounded-md py-2 pl-9 text-[13px] text-zinc-400 focus:outline-none focus:border-emerald-500/40 transition-all font-sans"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const isOpen = openDropdown === item.name;
          
          return (
            <div key={item.name} className="flex flex-col">
              <div 
                className={`flex items-center justify-between py-2 px-1 rounded transition-all ${
                  isActive ? 'text-emerald-500' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {!item.hasDropdown ? (
                  <Link to={item.path} className="text-[11px] font-bold uppercase tracking-[0.2em] no-underline text-inherit flex-1">
                    {item.name}
                  </Link>
                ) : (
                  <div 
                    onClick={() => toggleDropdown(item.name)}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] cursor-pointer flex-1"
                  >
                    {item.name}
                  </div>
                )}

                {item.hasDropdown && (
                  <div onClick={() => toggleDropdown(item.name)} className="cursor-pointer">
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : 'text-zinc-600'}`} 
                    />
                  </div>
                )}
              </div>

              {/* Sub-items (Now with slightly more indent since icons are gone) */}
              {item.hasDropdown && isOpen && item.subItems && (
                <div className="ml-2 mt-2 mb-4 flex flex-col space-y-3 border-l border-zinc-800/60">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub}
                      to={`/${item.name.toLowerCase()}/${slugify(sub)}`}
                      className="pl-5 text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors no-underline block font-medium"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Status Footer */}
      <div className="mt-auto pt-4 border-t border-zinc-900">
        <div className="flex items-center gap-2 text-zinc-600 text-[11px] font-mono cursor-pointer hover:text-zinc-400 tracking-tighter">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
          <span>stable</span>
          <ChevronDown size={10} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;