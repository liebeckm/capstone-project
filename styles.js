import { createGlobalStyle } from "styled-components";
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

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  :root {
    --yellow: #f1d9a6;
    --white: #ffffff;
  }
`;
