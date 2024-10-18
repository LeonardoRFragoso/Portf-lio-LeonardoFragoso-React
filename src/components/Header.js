// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
`;

function Header() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre Mim</NavLink>
      <NavLink to="/projects">Projetos</NavLink>
      <NavLink to="/contact">Contato</NavLink>
    </Nav>
  );
}

export default Header;
