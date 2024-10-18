// components/Projects.js
import React from 'react';
import styled from 'styled-components';
import project1Img from '../assets/Img/project1.png';
import project2Img from '../assets/Img/project2.png';
import project3Img from '../assets/Img/project3.png';
import project4Img from '../assets/Img/project4.png';
import project5Img from '../assets/Img/project5.png';
import project6Img from '../assets/Img/project6.png';

import video1 from '../assets/Videos/video1.mp4';
import video2 from '../assets/Videos/video2.mp4';
import video3 from '../assets/Videos/video3.mp4';
import video4 from '../assets/Videos/video4.mp4';
import video5 from '../assets/Videos/video5.mp4';
import video6 from '../assets/Videos/video6.mp4';

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: left;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProjectVideo = styled.video`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
  controls: true;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
`;

function Projects() {
  return (
    <ProjectsContainer>
      <Title>Meus Projetos</Title>
      <ProjectGrid>
        <ProjectCard>
          <ProjectImage src={project1Img} alt="Projeto 1" />
          <ProjectVideo src={video1} alt="Vídeo do Projeto 1" controls />
          <ProjectTitle>Projeto 1</ProjectTitle>
          <ProjectDescription>
            Descrição do Projeto 1: Uma aplicação web full stack utilizando React e Django.
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={project2Img} alt="Projeto 2" />
          <ProjectVideo src={video2} alt="Vídeo do Projeto 2" controls />
          <ProjectTitle>Projeto 2</ProjectTitle>
          <ProjectDescription>
            Descrição do Projeto 2: Um sistema de gerenciamento de usuários com Node.js e React.
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={project3Img} alt="Projeto 3" />
          <ProjectVideo src={video3} alt="Vídeo do Projeto 3" controls />
          <ProjectTitle>Projeto 3</ProjectTitle>
          <ProjectDescription>
            Descrição do Projeto 3: Aplicativo de automação utilizando Flask e Selenium.
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={project4Img} alt="Projeto 4" />
          <ProjectVideo src={video4} alt="Vídeo do Projeto 4" controls />
          <ProjectTitle>Projeto 4</ProjectTitle>
          <ProjectDescription>
            Descrição do Projeto 4: Plataforma de blog com Django e React.
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={project5Img} alt="Projeto 5" />
          <ProjectVideo src={video5} alt="Vídeo do Projeto 5" controls />
          <ProjectTitle>Projeto 5</ProjectTitle>
          <ProjectDescription>
            Descrição do Projeto 5: Sistema de autenticação e autorização usando Node.js.
          </ProjectDescription>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={project6Img} alt="Projeto 6" />
          <ProjectVideo src={video6} alt="Vídeo do Projeto 6" controls />
          <ProjectTitle>Projeto 6</ProjectTitle>
          <ProjectDescription>
            Descrição do Projeto 6: E-commerce completo com integração de APIs de pagamento.
          </ProjectDescription>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsContainer>
  );
}

export default Projects;
