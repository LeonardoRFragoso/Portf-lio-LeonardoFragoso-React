import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 pt-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Tagline */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4">
            <Code2 className="h-5 w-5 text-primary-400 mr-2" />
            <span className="text-sm text-primary-300">Python Developer</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl font-bold gradient-text text-shadow">
            Leonardo Fragoso
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Transformando ideias em soluções tecnológicas inovadoras. Apaixonado por Python e desenvolvimento de software que impacta pessoas e empresas.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary-600 to-blue-700 hover:from-primary-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              aria-label="Ver projetos"
            >
              <span className="font-semibold">Ver Projetos</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg glass hover:bg-primary-500/10 transition-all duration-300 font-semibold"
              aria-label="Entrar em contato"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
