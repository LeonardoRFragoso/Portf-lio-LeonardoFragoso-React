import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // Scroll suave para links de âncoras
  React.useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        event.preventDefault();
        const targetId = target.hash.slice(1); // Remove o '#' para capturar o ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerHeight = 80; // Altura fixa do cabeçalho
          const scrollPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 min-h-screen">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo Principal */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Rodapé */}
      <footer className="bg-slate-900 text-center py-8 border-t border-gray-700">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-bold">Leonardo Fragoso</span>. Todos os direitos reservados.
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://github.com/LeonardoRFragoso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
            aria-label="Visite o perfil de Leonardo no GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-fragoso-921b166a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
            aria-label="Visite o perfil de Leonardo no LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:leonardorfragoso@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition"
            aria-label="Envie um e-mail para Leonardo Fragoso"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
