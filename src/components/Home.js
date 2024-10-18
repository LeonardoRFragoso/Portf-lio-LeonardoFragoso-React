import React from 'react';
import { FaLinkedin, FaGithub, FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import profilePic from '../assets/Img/profile.png';
import './Home.css';

// Componente reutilizável para Backend e Frontend
function InfoColumn({ title, text }) {
  return (
    <article className="column">
      <h3 className="column-title">{title}</h3>
      <p className="column-text">{text}</p>
    </article>
  );
}

function Home() {
  return (
    <div className="home-container">
      {/* Cabeçalho com a imagem de perfil e informações */}
      <header className="profile-header">
        <div className="profile-image-wrapper">
          <img src={profilePic} alt="Leonardo Fragoso" className="profile-image" />
          <div className="overlay-text">Full Stack</div>
        </div>
        <h1 className="title">Leonardo Fragoso</h1>
        <h2 className="subtitle">Desenvolvedor Full Stack | Python | Django | React</h2>
      </header>

      {/* Seção de Habilidades */}
      <section className="skills-section">
        <div className="skills">
          <div>
            <FaPython aria-label="Python" />
            <p>Python</p>
          </div>
          <div>
            <FaReact aria-label="React" />
            <p>React</p>
          </div>
          <div>
            <FaNodeJs aria-label="Node.js" />
            <p>Node.js</p>
          </div>
        </div>
      </section>

      {/* Seção das Informações de Backend e Frontend usando o componente InfoColumn */}
      <section className="two-column">
        <InfoColumn
          title="Backend"
          text="Desenvolvedor back-end com ampla experiência em Python e frameworks como Django e Flask. Focado na criação de soluções escaláveis, otimizadas e seguras, com integração de APIs e automação de processos."
        />
        <InfoColumn
          title="Frontend"
          text="Desenvolvedor front-end com sólida experiência em React, especializado na criação de interfaces de usuário dinâmicas e altamente responsivas. Foco em detalhes, usabilidade e performance, com ênfase na criação de experiências interativas."
        />
      </section>

      {/* Seção dos Botões de Ação */}
      <div className="cta-buttons">
        <a href="https://www.linkedin.com/in/leonardo-fragoso-921b166a" target="_blank" className="cta-button linkedin" aria-label="LinkedIn de Leonardo Fragoso">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/leonardo-fragoso" target="_blank" className="cta-button github" aria-label="GitHub de Leonardo Fragoso">
          <FaGithub /> GitHub
        </a>
        <a href="/contact" className="cta-button contact" aria-label="Página de Contato">Contato</a>
      </div>
    </div>
  );
}

export default Home;
