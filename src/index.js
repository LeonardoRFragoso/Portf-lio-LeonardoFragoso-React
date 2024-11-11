import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Arquivo CSS global
import App from "./App"; // Componente principal
import reportWebVitals from "./reportWebVitals"; // Monitoramento de performance (opcional)

// Inicializa o React e renderiza o componente raiz
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Configuração opcional para monitorar o desempenho da aplicação
// Passar uma função para logar os resultados, por exemplo:
// reportWebVitals(console.log)
// Ou enviar para um endpoint de analytics.
reportWebVitals();
