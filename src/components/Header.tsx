import React, { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-white font-bold text-xl">
              Leonardo Fragoso
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2">Sobre</a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2">Projetos</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2">Contato</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/LeonardoRFragoso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-white"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/leonardorfragoso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden transition-transform transform">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2">Sobre</a>
            <a href="#projects" className="text-gray-300 hover:text-white block px-3 py-2">Projetos</a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
}
