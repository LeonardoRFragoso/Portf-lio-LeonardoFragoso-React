// components/About.js
import React from 'react';
import './About.css'; // Importando o CSS para a página About
import profilePic from '../assets/Img/profile.png';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={profilePic} alt="Leonardo Fragoso" className="about-img" />
        <h1 className="about-title">Sobre Mim</h1>
      </div>
      <p className="about-bio">
        Sou Leonardo Fragoso, Desenvolvedor Full Stack com foco em back-end usando Python, Django e Flask. 
        Tenho uma forte base em infraestrutura de TI e especialização em soluções seguras e escaláveis. 
        Além disso, tenho experiência com front-end utilizando React e frameworks modernos.
      </p>
      <h1 className="about-title">Competências</h1>
      <ul className="skills-list">
        <li className="skill-item">
          <span>Python (Django, Flask)</span>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '90%' }}></div></div>
        </li>
        <li className="skill-item">
          <span>React & Node.js</span>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '85%' }}></div></div>
        </li>
        <li className="skill-item">
          <span>Criação e integração de APIs RESTful</span>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '80%' }}></div></div>
        </li>
        <li className="skill-item">
          <span>Automação com Selenium e Puppeteer</span>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '70%' }}></div></div>
        </li>
        <li className="skill-item">
          <span>Testes automatizados e desenvolvimento ágil</span>
          <div className="progress-bar"><div className="progress-fill" style={{ width: '75%' }}></div></div>
        </li>
      </ul>
      {/* Botões de Ação */}
      <div className="cta-buttons">
        <a href="https://linkedin.com/in/leonardofragoso" className="cta-button">Ver LinkedIn</a>
        <a href="mailto:contato@leonardofragoso.com" className="cta-button">Entre em Contato</a>
        <a href="/CV%20Leonardo.pdf" className="cta-button download" download>
          Baixar Currículo
        </a>
      </div>
    </div>
  );
}

export default About;
