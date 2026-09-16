import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

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
