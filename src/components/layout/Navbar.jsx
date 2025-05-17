// FILE: /src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { navLinks } from '../../constants/navLinks';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // --- Modern Color Palette ---
  const designTokens = {
    primary: {
      base: 'bg-indigo-600',
      hover: 'hover:bg-indigo-700',
      text: 'text-indigo-600',
      light: 'bg-indigo-50',
      border: 'border-indigo-200'
    },
    neutral: {
      text: 'text-slate-800',
      muted: 'text-slate-600',
      border: 'border-slate-100'
    },
    effects: {
      shadow: 'shadow-[0_8px_24px_-6px_rgba(79,70,229,0.15)]',
      backdrop: 'bg-white/95 backdrop-blur-xl',
      transition: 'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = 'home';
      const scrollOffset = 100;

      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section && window.scrollY >= section.offsetTop - scrollOffset) {
          currentSectionId = link.id;
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 md:pt-5">
      <nav className={`
        w-11/12 max-w-6xl
        ${designTokens.backdrop}
        rounded-3xl
        border ${designTokens.primary.border}
        ${designTokens.effects.shadow}
        ${designTokens.effects.transition}
        py-3 px-5
      `}>
        <div className="flex items-center justify-between">
          {/* Modern Circular Logo */}
          <a 
            href="#home"
            className={`
              flex items-center justify-center
              w-12 h-12 rounded-full
              ${designTokens.primary.base}
              hover:scale-105 ${designTokens.effects.transition}
              shadow-sm
            `}
            onClick={() => setActiveSection('home')}
          >
            <span className="text-xl font-black text-white">M</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`
                  px-4 py-2.5 rounded-2xl text-sm font-medium
                  ${designTokens.neutral.muted}
                  ${designTokens.effects.transition}
                  hover:${designTokens.primary.text}
                  hover:bg-indigo-50
                  ${activeSection === link.id ? `
                    ${designTokens.primary.text}
                    bg-indigo-50 font-semibold
                  ` : ''}
                `}
                onClick={() => setActiveSection(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className={`
                ${designTokens.primary.base} text-white
                px-6 py-2.5 rounded-2xl text-sm font-semibold
                ${designTokens.effects.transition}
                hover:scale-105 hover:shadow-md
                flex items-center gap-2
              `}
            >
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${designTokens.neutral.muted} hover:${designTokens.primary.text}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden overflow-hidden
          ${designTokens.effects.transition}
          ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}>
          <div className="flex flex-col space-y-2 py-4 border-t ${designTokens.neutral.border} mt-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`
                  px-4 py-3 rounded-xl text-base
                  ${activeSection === link.id ? `
                    ${designTokens.primary.text} bg-indigo-50 font-semibold
                  ` : designTokens.neutral.muted}
                  ${designTokens.effects.transition}
                  hover:bg-indigo-50
                `}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`
                ${designTokens.primary.base} text-white
                mt-2 py-3 rounded-xl text-center font-semibold
                ${designTokens.effects.transition}
                hover:scale-[1.02]
              `}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;