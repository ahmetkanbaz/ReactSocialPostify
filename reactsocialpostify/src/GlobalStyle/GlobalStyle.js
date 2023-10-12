import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    transition: all .3s ease-in-out;
    background-color: ${({theme}) => theme == 'light' ? '#F5F5F5' : '#333333'};
    color: ${({theme}) => theme == 'light' ? '#000000' : '#FFFFFF'};
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`;