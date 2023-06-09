import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }
  
  body {
    background: #FFFEED;
    font-size: 16px;

    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
`; 