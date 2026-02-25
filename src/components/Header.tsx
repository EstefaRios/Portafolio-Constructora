import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export function Header({ onNavigate, currentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Estudio' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="relative group"
          >
            <div className="tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              VERRI
            </div>
            <div
              className="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300"
              style={{ backgroundColor: '#2C5F7C' }}
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative group transition-colors duration-300 ${
                  currentSection === item.id ? 'text-[#2C5F7C]' : 'text-[#0A0A0A] hover:text-[#2C5F7C]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-px bg-[#2C5F7C] transition-transform duration-300 ${
                    currentSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#0A0A0A] hover:text-[#2C5F7C] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4 bg-white/95 rounded-lg p-4 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left transition-colors duration-300 ${
                  currentSection === item.id ? 'text-[#2C5F7C]' : 'text-[#0A0A0A]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
