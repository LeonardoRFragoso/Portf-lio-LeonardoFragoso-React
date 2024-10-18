import React from 'react';
import './Projects.css'; // Mantenha o mesmo arquivo CSS
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

const projectsData = [
  {
    title: 'Projeto 1',
    description: 'Uma aplicação web full stack utilizando React e Django.',
    technologies: ['React', 'Django', 'JavaScript'],
    image: project1Img,
    video: video1,
  },
  {
    title: 'Projeto 2',
    description: 'Um sistema de gerenciamento de usuários com Node.js e React.',
    technologies: ['Node.js', 'React', 'Express'],
    image: project2Img,
    video: video2,
  },
  {
    title: 'Projeto 3',
    description: 'Aplicativo de automação utilizando Flask e Selenium.',
    technologies: ['Flask', 'Selenium', 'Python'],
    image: project3Img,
    video: video3,
  },
  {
    title: 'Projeto 4',
    description: 'Plataforma de blog com Django e React.',
    technologies: ['Django', 'React', 'PostgreSQL'],
    image: project4Img,
    video: video4,
  },
  {
    title: 'Projeto 5',
    description: 'Sistema de autenticação e autorização usando Node.js.',
    technologies: ['Node.js', 'MongoDB', 'React'],
    image: project5Img,
    video: video5,
  },
  {
    title: 'Projeto 6',
    description: 'E-commerce completo com integração de APIs de pagamento.',
    technologies: ['React', 'Stripe', 'Node.js'],
    image: project6Img,
    video: video6,
  }
];

function Projects() {
  return (
    <div className="projectPage">
      <h1 className="projectsTitle">Meus Projetos</h1>
      <div className="projectsContainer">
        {projectsData.map((project, index) => (
          <div key={index} className="projectItem">
            <img src={project.image} alt={`Projeto ${index + 1}`} className="projectImage" />
            <div className="projectDescription">
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectText">{project.description}</p>
              <div className="projectTechnologies">
                <h3>Tecnologias Utilizadas:</h3>
                <ul>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="projectVideo">
                <h3>Veja o vídeo:</h3>
                <video controls>
                  <source src={project.video} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
