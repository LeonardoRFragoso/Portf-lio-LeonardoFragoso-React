import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar no lugar de Header
import Footer from './components/Footer'; // Importando o Footer.js
import Home from './components/Home'; 
import About from './components/About'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import GlobalStyle from './styles/GlobalStyle'; 
import ScrollToTop from './components/ScrollToTop'; // Importando o ScrollToTop

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar /> {/* Navbar no topo da página */}
      
      {/* ScrollToTop adicionado para garantir que o scroll vá para o topo ao mudar de rota */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> {/* Footer adicionado após as Routes */}
    </Router>
  );
}

export default App;
