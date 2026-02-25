import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Services } from './components/Services';
import { Contact } from './components/Contact';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    if (selectedProject) {
      setSelectedProject(null);
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setTimeout(() => {
      handleNavigate('projects');
    }, 100);
  };

  if (selectedProject) {
    return (
      <>
        <Header onNavigate={handleNavigate} currentSection="projects" />
        <ProjectDetail projectId={selectedProject} onBack={handleBackToProjects} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      <Header onNavigate={handleNavigate} currentSection={currentSection} />
      <Hero onNavigate={handleNavigate} />
      <About />
      <Projects onProjectSelect={handleProjectSelect} />
      <Services />
      <Contact />
    </div>
  );
}
