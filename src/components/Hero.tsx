import React from "react";
import { ArrowRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 pt-16 overflow-hidden"
    >
      {/* Background Animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]"></div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-opacity-10 backdrop-blur-md bg-blue-500/10 mb-4 shadow-lg"
          >
            <Code2 className="h-5 w-5 text-blue-400 mr-2" />
            <span className="text-sm text-blue-300 tracking-wide">Python Developer</span>
          </motion.div>

          {/* Nome */}
          <motion.h1
            className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 drop-shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Leonardo Fragoso
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Transformando ideias em soluções tecnológicas inovadoras. Apaixonado por{" "}
            <span className="text-blue-400 font-medium">Python</span> e desenvolvimento de software que impacta pessoas
            e empresas.
          </motion.p>

          {/* Botões de Call-to-Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-green-400/50"
              aria-label="Ver projetos"
            >
              <span className="font-semibold text-white">Ver Projetos</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gray-800/80 hover:bg-gray-700/90 transition-all duration-300 shadow-md hover:shadow-blue-500/20 font-semibold text-white"
              aria-label="Entrar em contato"
            >
              Entrar em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
