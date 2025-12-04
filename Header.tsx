import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="bg-white p-1.5 rounded text-brand-dark">
            <BarChart3 size={24} strokeWidth={3} />
          </div>
          <span className={`font-heading font-bold text-xl md:text-2xl ${isScrolled ? 'text-white' : 'text-white'}`}>
            LEGALIZE
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Serviços', 'Diferenciais', 'Processo', 'Depoimentos'].map((item, idx) => {
             const ids = ['services', 'features', 'process', 'testimonials'];
             return (
               <button 
                 key={item}
                 onClick={() => scrollToSection(ids[idx])}
                 className="text-white hover:text-brand-light font-medium transition-colors text-sm uppercase tracking-wide"
               >
                 {item}
               </button>
             )
          })}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-brand-light hover:bg-white hover:text-brand-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Fale Conosco
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-brand-medium shadow-xl">
          <div className="flex flex-col p-6 gap-4">
             {['Serviços', 'Diferenciais', 'Processo', 'Depoimentos'].map((item, idx) => {
                 const ids = ['services', 'features', 'process', 'testimonials'];
                 return (
                   <button 
                     key={item}
                     onClick={() => scrollToSection(ids[idx])}
                     className="text-white text-left text-lg font-medium border-b border-brand-medium pb-2"
                   >
                     {item}
                   </button>
                 )
              })}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-light text-white font-bold py-3 rounded text-center mt-2"
              >
                Solicitar Orçamento
              </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;