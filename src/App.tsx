import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-center py-6">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Leonardo Fragoso. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;