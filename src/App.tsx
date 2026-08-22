import { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { EngineeringLab } from './components/EngineeringLab';
import { ProjectModal } from './components/ProjectModal';
import { HireMeModal } from './components/HireMeModal';
import { TechStack } from './components/TechStack';
import { Engineering } from './components/Engineering';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Project } from './data/projects';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans antialiased selection:bg-blue-600 selection:text-white relative">
      {/* Living System Interconnected Canvas & Mouse Spotlight */}
      <AmbientBackground />

      {/* Floating Dark Glass Taskbar */}
      <Navbar onOpenHireMe={() => setIsHireMeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        
        {/* Horizontal Scrolling Awwwards-style Section */}
        <EngineeringLab />

        <TechStack />
        <Engineering />
        <Experience />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>

      {/* Interactive Project Detail Overlay Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Hire Me Modal Popup */}
      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />
    </div>
  );
}

export default App;
