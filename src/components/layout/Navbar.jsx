import React, {useState, useEffect} from 'react'
import {Code, Menu, X} from 'lucide-react'
import {NAV_LINKS, PERSONAL_INFO  } from '../../utils/constants'
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy'

const Navbar = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const handleNavLinkClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
      };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300' ${isScrolled 
      ? 'bg-black/30 backdrop-blur-lg' 
      : 'bg-transparent'
    }`}
      style ={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Code className='w-6 h-6 text-primary' />

              <button
                onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-2xl font-bold bg-linear-to-r from-primary via-secondary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
                aria-label="home"
                > {PERSONAL_INFO.name.split(' ')[0]}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)}
                  className={`text-base font-medium transition-all duration-300 ${activeSection === link.id 
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
              
            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-primary hover:bg-primary/80 text-black/80 font-medium rounded-md transition-colors duration-300"
                > Hire Me
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        
        {isMenuOpen && (
  <div className="md:hidden bg-black/30 backdrop-blur-lg py-4">
    <div className="flex flex-col gap-4 px-5">
      
      {NAV_LINKS.map((link) => (
        <button
          key={link.id}
          onClick={() => {
            handleNavLinkClick(link.id);
            setIsMenuOpen(false);
          }}
          className={`text-base font-medium transition-all duration-300 ${
            activeSection === link.id
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {link.label}
        </button>
      ))}

      {/* ✅ ADD THIS */}
      <button
        onClick={() => {
          scrollToSection('contact');
          setIsMenuOpen(false);
        }}
        className="mt-2 px-4 py-2 bg-primary hover:bg-primary/80 text-black font-medium rounded-md transition-colors duration-300"
      >
        Hire Me
      </button>

    </div>
  </div>
)}
      </nav>
    )
  }

export default Navbar
