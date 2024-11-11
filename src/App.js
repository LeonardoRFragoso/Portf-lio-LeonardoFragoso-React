import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar no lugar de Header
import Footer from "./components/Footer"; // Importando o Footer.js
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop"; // Importando o ScrollToTop

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Garante que a página rola para o topo ao navegar */}
      <Navbar /> {/* Barra de navegação */}
      <main style={{ minHeight: "80vh" }}>
        {" "}
        {/* Define uma altura mínima para o conteúdo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> {/* Rodapé da aplicação */}
    </Router>
  );
};

export default App;
