import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md bg-gradient-to-b from-slate-900/90 to-slate-800/80 backdrop-blur-md" : "bg-transparent"
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-white font-bold text-2xl tracking-wide hover:text-blue-400 transition-colors"
              aria-label="Ir para Home"
            >
              Leonardo Fragoso
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-10 space-x-6">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "Sobre" },
              { href: "#projects", label: "Projetos" },
              { href: "#contact", label: "Contato" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-blue-400 px-3 py-2 text-lg transition-colors group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/LeonardoRFragoso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/leonardorfragoso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 transition-transform transform">
          <nav className="px-4 py-4 space-y-2">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "Sobre" },
              { href: "#projects", label: "Projetos" },
              { href: "#contact", label: "Contato" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-blue-400 px-4 py-2 text-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)} // Fechar o menu ao clicar em um link
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
