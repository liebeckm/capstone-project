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
    --yellow: #F8DDA4;
    --white: #ffffff;
    --green: #7FB069;
    ---darkgrey: #29282A;
    --red: #E6664E;
  }
`;
