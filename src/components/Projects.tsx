import React from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Projeto React para Lions Seminovos",
      description: "Projeto feito para a empresa Lions Seminovos utilizando React e Material-UI.",
      image: "/images/project1.png",
      tags: ["React", "Javascript", "Material-UI"],
      github: "https://github.com/LeonardoRFragoso/DesafioLionsReact",
    },
    {
      title: "Projeto React para PyScriptTech",
      description: "Projeto feito para a empresa PyScriptTech utilizando React e Material-UI.",
      image: "/images/project2.png",
      tags: ["React", "Javascript", "Material-UI"],
      github: "https://github.com/LeonardoRFragoso/PyScriptTech_React",
    },
    {
      title: "API REST com Flask",
      description: "API REST simples desenvolvida com Flask e PostgreSQL para gerenciamento de tickets de TI.",
      image: "/images/project3.png",
      tags: ["Flask", "REST API", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/TicketsTI-Flask",
    },
    {
      title: "Site Flask e React",
      description: "Site para conversão de arquivos utilizando Flask e React.",
      image: "/images/project4.png",
      tags: ["Flask", "React", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/SiteConvert",
    },
    {
      title: "Sistema para Andaimes Pini",
      description: "Sistema feito sob medida para locações, controle de estoque e outras funcionalidades.",
      image: "/images/project5.png",
      tags: ["Flask", "React", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/AndaimesPini_Project",
    },
    {
      title: "API com Flask e Streamlit",
      description: "API com Flask e Streamlit para análise de ações e FIIs.",
      image: "/images/project6.png",
      tags: ["Flask", "Streamlit", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/API_Analyze",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            Projetos
          </h2>
          <p className="text-gray-300 text-lg">Explorando ideias através do código</p>
        </div>

        {/* Cards dos Projetos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-slate-800 hover:bg-slate-700 border border-gray-700 hover:shadow-blue-500/25"
            >
              {/* Imagem do Projeto */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              {/* Conteúdo do Projeto */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link para o GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  aria-label={`Repositório no GitHub para ${project.title}`}
                >
                  <Github className="h-5 w-5 mr-2" />
                  <span className="text-sm">Código</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
