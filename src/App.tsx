import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar'; 
import Home from './pages/Home';
import HackUTD from './pages/projects/hackUTD';
import SkyBloom from './pages/projects/Skybloom';
import NetworksProject from './pages/projects/NetworksProject';
import Experience from './pages/experience/Experience';
import MathMatch from './pages/projects/MathMatch';
import Roadmap from './pages/Roadmap/Roadmap';
import PortfolioV1 from './pages/projects/Portfolio'; 
// 1. Add this import
import AlzheimersInterface from './pages/projects/Alzheimers';

function App() {
  return (
    <Router>
      <div className="flex bg-[#0a0a0a] min-h-screen w-full selection:bg-emerald-500/30">
        <Navbar />
        
        <div className="flex-1"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/projects/hackutd-toyota" element={<HackUTD />} />
            <Route path="/projects/sky-bloom" element={<SkyBloom />} /> 
            <Route path="/projects/computer-architecture-project" element={<MathMatch />} />
            <Route path="/projects/networks-project" element={<NetworksProject />} />
            <Route path="/projects/portfolio-v1" element={<PortfolioV1 />} />
            
            {/* 2. Add the route for Alzheimers Interface */}
            <Route path="/projects/alzheimers-interface" element={<AlzheimersInterface />} />
            
            <Route path="/background/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;