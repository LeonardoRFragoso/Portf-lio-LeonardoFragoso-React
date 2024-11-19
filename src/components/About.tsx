import React from 'react';
import { Code2, Database, Globe, Server, BookOpen } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Code2 className="h-6 w-6" />, name: 'Python', description: 'Django, Flask, Pandas' },
    { icon: <Database className="h-6 w-6" />, name: 'Databases', description: 'PostgreSQL, SQLite' },
    { icon: <Globe className="h-6 w-6" />, name: 'Web', description: 'HTML, CSS, JavaScript' },
    { icon: <Server className="h-6 w-6" />, name: 'Tools', description: 'Git, Docker Basics' },
  ];

  const education = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "FIAP",
      year: "2018"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor Python entusiasta, com sólida formação acadêmica e forte interesse em desenvolvimento web
            e análise de dados. Busco minha primeira oportunidade profissional para aplicar e expandir meus conhecimentos.
          </p>
        </div>

        <div className="space-y-16">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Habilidades Técnicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                  <div className="text-blue-400 mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Formação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="p-6 bg-slate-700 rounded-lg">
                  <div className="text-blue-400 mb-4">{edu.icon}</div>
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <p className="text-blue-400">{edu.institution}</p>
                  <p className="text-gray-400">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}