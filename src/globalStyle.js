import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
::placeholder{
  color:"#c083fc" !important;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: rgba(198, 198, 198, 0.445);
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

* {
  font-family: 'Nunito', sans-serif;
}

body {
  background-color: #f9fafe;
  overflow-x: hidden;
}

.text-grow {
  text-shadow: 0 0 60px rgb(192 219 255 / 75%), 0 0 32px rgb(65 120 255 / 24%);
}

.cardGlass {
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(230, 230, 230, 0.125);
}

.cover-image {
  background-position: center;
  background-attachment: fixed;
  background-clip: border-box;
  background-repeat: no-repeat;
  background-size: cover;
}
`;

export default GlobalStyle;
