import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MyCustomFont';
    src: url('./assets/PlayfairDisplay-VariableFont_wght.ttf') format('ttf'),
         url('./assets/PlayfairDisplay-VariableFont_wght.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    font-family: 'MyCustomFont', sans-serif;
  }
`;

export default GlobalStyle;