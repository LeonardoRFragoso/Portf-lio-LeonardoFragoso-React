import React from "react";
import { Code2, Database, Globe, Server, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  { icon: <Code2 />, name: "Python", description: "Django, Flask, Selenium, Puppeteer, Streamlit, NumPy, Pandas" },
  { icon: <Database />, name: "Databases", description: "PostgreSQL, SQLite, Firebase (NoSQL)" },
  { icon: <Globe />, name: "Web", description: "HTML, CSS, JavaScript, React, Node.js" },
  { icon: <Server />, name: "Tools", description: "Git, Docker, Power BI, Zabbix" },
  { icon: <Code2 />, name: "Testing & Automation", description: "Selenium, Puppeteer, Testes Automatizados" },
  { icon: <Server />, name: "Infrastructure", description: "Windows Server, VPN, Active Directory" },
];

const educationData = [
  {
    degree: "Gestão de Tecnologia da Informação",
    institution: "Estácio de Sá",
    link: "https://portal.estacio.br",
    year: "2016 - 2019",
  },
  {
    degree: "Formação Python",
    institution: "Rocketseat",
    link: "https://www.rocketseat.com.br",
    year: "abr 2024 - ago 2024",
  },
  {
    degree: "Formação Full Stack",
    institution: "Rocketseat",
    link: "https://www.rocketseat.com.br",
    year: "jun 2024 - set 2024",
  },
  {
    degree: "Django Master",
    institution: "PyCode",
    link: "https://pycode.com.br",
    year: "abr 2024 - set 2024",
  },
  {
    degree: "Formação Explorer",
    institution: "Rocketseat",
    link: "https://www.rocketseat.com.br",
    year: "abr 2024 - jul 2024",
  },
  {
    degree: "Analista de Dados",
    institution: "Cubos Academy",
    link: "https://cubos.academy",
    year: "jan 2024 - set 2024",
  },
];

const SkillCard = ({ icon, name, description }: { icon: JSX.Element; name: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-transform transform hover:scale-105 border border-gray-700 shadow-lg hover:shadow-blue-500/25"
  >
    <div className="text-blue-400 mb-4">
      {React.cloneElement(icon, { className: "h-8 w-8 text-gradient-to-r from-blue-400 to-green-400" })}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const EducationCard = ({
  degree,
  institution,
  link,
  year,
}: {
  degree: string;
  institution: string;
  link: string;
  year: string;
}) => (
  <motion.a
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-transform transform hover:scale-105 block border border-gray-700 shadow-lg hover:shadow-blue-500/25"
  >
    <div className="text-blue-400 mb-4">
      <BookOpen className="h-8 w-8 text-gradient-to-r from-blue-400 to-green-400" />
    </div>
    <h4 className="text-xl font-semibold text-white">{degree}</h4>
    <p className="text-blue-400">{institution}</p>
    <p className="text-gray-400">{year}</p>
  </motion.a>
);

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4 relative">
            Sobre Mim
            <span className="absolute bottom-0 left-1/2 w-12 h-1 bg-blue-500 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sou um Desenvolvedor <span className="text-blue-400 font-bold">Full Stack</span> com especialização no back-end utilizando{" "}
            <span className="text-blue-400 font-bold">Python, Django e Flask</span>, além de sólida experiência no front-end com{" "}
            <span className="text-blue-400 font-bold">React</span>. Minha trajetória inclui experiência em gestão de TI, governança, automação de processos e criação de aplicações web robustas e escaláveis.
          </p>
        </div>

        <div className="space-y-16">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-8 text-center">
              Habilidades Técnicas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {skillsData.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-8 text-center">
              Formação
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationData.map((edu, index) => (
                <EducationCard key={index} {...edu} />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700 w-3/4 mx-auto"></div>
      </div>
    </section>
  );
}
