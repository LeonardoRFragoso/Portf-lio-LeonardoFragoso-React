// components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Skills = styled.ul`
  list-style: none;
  padding: 0;
`;

const Skill = styled.li`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

function About() {
  return (
    <AboutContainer>
      <Title>Sobre Mim</Title>
      <Bio>
        Sou Leonardo Fragoso, Desenvolvedor Full Stack com foco em backend usando Python, Django e Flask. 
        Tenho uma forte base em infraestrutura de TI e especialização em soluções seguras e escaláveis. 
        Além disso, tenho experiência com front-end utilizando React e frameworks modernos.
      </Bio>
      <Title>Competências</Title>
      <Skills>
        <Skill>✔ Python (Django, Flask)</Skill>
        <Skill>✔ React & Node.js</Skill>
        <Skill>✔ Criação e integração de APIs RESTful</Skill>
        <Skill>✔ Automação com Selenium e Puppeteer</Skill>
        <Skill>✔ Testes automatizados e desenvolvimento ágil</Skill>
      </Skills>
    </AboutContainer>
  );
}

export default About;
