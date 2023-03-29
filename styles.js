import { createGlobalStyle } from "styled-components"; // component-driven CSS methodology used in React; Styled Components is a library for React

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }

  :root {
    --yellow: #f1d9a6;
    --white: #ffffff;
  }
`;
