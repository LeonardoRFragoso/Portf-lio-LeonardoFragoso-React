import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4 relative">
            Contato
            <span className="absolute bottom-0 left-1/2 w-12 h-1 bg-blue-500 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Entre em contato e <span className="text-blue-400 font-bold">vamos criar algo incrível juntos!</span>
          </p>
        </div>

        {/* Cartões de contato */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              href="mailto:leonardorfragoso@gmail.com"
              className="flex flex-col items-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-transform transform hover:scale-105 border border-gray-700 shadow-lg hover:shadow-blue-500/25"
              aria-label="Enviar email"
            >
              <Mail className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-center">Envie uma mensagem</p>
            </motion.a>

            {/* GitHub */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              href="https://github.com/LeonardoRFragoso"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-transform transform hover:scale-105 border border-gray-700 shadow-lg hover:shadow-blue-500/25"
              aria-label="Visitar perfil no GitHub"
            >
              <Github className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-300 text-center">Veja meus projetos</p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              href="https://www.linkedin.com/in/leonardo-fragoso-921b166a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-transform transform hover:scale-105 border border-gray-700 shadow-lg hover:shadow-blue-500/25"
              aria-label="Conectar no LinkedIn"
            >
              <Linkedin className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-center">Vamos nos conectar</p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
