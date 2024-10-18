// styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Arial', sans-serif;
    background-color: #1e1e2f; /* Ajuste para o fundo escuro, similar ao usado na home */
    color: #e0e0e0; /* Ajuste para um tom de texto claro, para bom contraste com o fundo */
    line-height: 1.6; /* Melhor espaçamento para legibilidade */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #fff; /* Mantendo títulos em branco */
  }
  p {
    color: #e0e0e0; /* Mantendo o texto legível com fundo escuro */
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
