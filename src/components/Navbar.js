import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Para verificar a rota atual

  // Função para detectar a rolagem e alterar o estado de scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Página inicial">
          Meu Portfólio
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`} aria-label="Ir para a página inicial">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-links ${location.pathname === '/about' ? 'active' : ''}`} aria-label="Ir para a página Sobre Mim">
              Sobre Mim
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-links ${location.pathname === '/projects' ? 'active' : ''}`} aria-label="Ir para a página Projetos">
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-links ${location.pathname === '/contact' ? 'active' : ''}`} aria-label="Ir para a página de Contato">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
