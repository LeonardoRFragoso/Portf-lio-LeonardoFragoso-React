import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Projeto React para Lions Seminovos",
      description: "Projeto Feitos para empresa Lions Seminovos utilizando React e Material-UI",
      image: "src/assets/Img/project1.png",
      tags: ["React", "Javascript", "Material-UI"],
      github: "https://github.com/LeonardoRFragoso/DesafioLionsReact"
    },
    {
      title: "Projeto React para PyScriptTech",
      description: "Projeto Feitos para empresa PyScriptTech utilizando React e Material-UI",
      image: "src/assets/Img/project2.png",
      tags: ["React", "Javascript", "Material-UI"],
      github: "https://github.com/LeonardoRFragoso/PyScriptTech_React"
    },
    {
      title: "API REST com Flask",
      description: "API REST simples desenvolvida com Flask e PostgreSQL para gerenciamento de tickets de TI.",
      image: "src/assets/Img/project3.png",
      tags: ["Flask", "REST API", "PostgreSQL"],
      github: "https://github.com/LeonardoRFragoso/TicketsTI-Flask"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Projetos</h2>
          <p className="text-gray-300 text-lg">Explorando ideias através do código</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden card-hover">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 rounded-full text-xs font-mono bg-primary-500/10 text-primary-300 border border-primary-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <Github className="h-5 w-5 mr-2" />
                    <span className="text-sm">Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}