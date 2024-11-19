import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contato</h2>
          <p className="text-gray-300">Entre em contato e vamos criar algo incrível juntos!</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <a
              href="mailto:leonardorfragoso@gmail.com"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-transform transform hover:scale-105"
              aria-label="Enviar email"
            >
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-center">Envie uma mensagem</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/LeonardoRFragoso"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-transform transform hover:scale-105"
              aria-label="Visitar perfil no GitHub"
            >
              <Github className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-300 text-center">Veja meus projetos</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leonardo-fragoso-921b166a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-transform transform hover:scale-105"
              aria-label="Conectar no LinkedIn"
            >
              <Linkedin className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-center">Vamos nos conectar</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
