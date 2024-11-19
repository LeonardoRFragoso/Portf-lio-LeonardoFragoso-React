import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Adiciona scroll suave
  React.useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault();
        const targetId = event.target.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

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
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Leonardo Fragoso. Todos os direitos reservados.
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://github.com/LeonardoRFragoso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-fragoso-921b166a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:leonardorfragoso@gmail.com"
            className="text-gray-400 hover:text-white transition"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
