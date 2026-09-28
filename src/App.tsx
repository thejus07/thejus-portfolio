import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CategoryProjectsPage } from './components/CategoryProjectsPage';
import { ProjectModal } from './components/ProjectModal';
import { HireMeModal } from './components/HireMeModal';
import { TechStack } from './components/TechStack';
import { Engineering } from './components/Engineering';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Project, ProjectCategoryType } from './data/projects';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [categoryPageView, setCategoryPageView] = useState<ProjectCategoryType | null>(null);

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

  // Listen to hash changes for deep linking to category pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('/category/web')) {
        setCategoryPageView('web');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('/category/ai')) {
        setCategoryPageView('ai');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCategoryPageView(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCategory = (cat: ProjectCategoryType) => {
    setCategoryPageView(cat);
    window.location.hash = cat === 'web' ? '/category/web-applications' : '/category/ai-models';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromCategory = () => {
    setCategoryPageView(null);
    window.location.hash = 'work';
    setTimeout(() => {
      const workEl = document.getElementById('work');
      if (workEl) {
        workEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans antialiased selection:bg-blue-600 selection:text-white relative">
      {/* Living System Interconnected Canvas & Mouse Spotlight */}
      <AmbientBackground />

      {categoryPageView ? (
        /* Dedicated Category Projects Page (Web Applications or AI Models) */
        <CategoryProjectsPage
          category={categoryPageView}
          onSelectCategory={(cat) => handleOpenCategory(cat)}
          onBack={handleBackFromCategory}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      ) : (
        /* Main Portfolio View */
        <>
          {/* Floating Dark Glass Taskbar */}
          <Navbar onOpenHireMe={() => setIsHireMeOpen(true)} />

          {/* Main Content Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects
              onOpenCategory={handleOpenCategory}
              onSelectProject={(project) => setSelectedProject(project)}
            />

            <TechStack />
            <Engineering />
            <Experience />
            <Certifications />
            <GitHubSection />
            <Contact />
          </main>
        </>
      )}

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

