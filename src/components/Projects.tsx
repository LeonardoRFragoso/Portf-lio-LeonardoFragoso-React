import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Análise de Dados com Python",
      description: "Projeto pessoal de análise de dados utilizando Pandas e Matplotlib para visualização.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Pandas", "Data Analysis"],
      github: "https://github.com/LeonardoRFragoso"
    },
    {
      title: "Blog com Django",
      description: "Blog desenvolvido com Django, demonstrando conhecimentos em desenvolvimento web.",
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800",
      tags: ["Django", "Python", "Web"],
      github: "https://github.com/LeonardoRFragoso"
    },
    {
      title: "API REST com Flask",
      description: "API REST simples desenvolvida com Flask e SQLite para gerenciamento de tarefas.",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&q=80&w=800",
      tags: ["Flask", "REST API", "SQLite"],
      github: "https://github.com/LeonardoRFragoso"
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