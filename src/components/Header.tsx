import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">Leonardo Fragoso</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2">Sobre</a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2">Projetos</a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2">Contato</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/LeonardoRFragoso" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/leonardorfragoso" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
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