import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
:root{
  // Layout sizing
  --header-height: 4rem;
  --footer-height: 4rem;
  --footer-link-width: calc(25vw * 0.95);
  // Colors: Theme main
  --cta-color-main: rgb(121, 194, 178);
  --cta-color-main-active: #408978;
  --bg-color-main-dark: rgb(220,220,250);
  --bg-color-main-light: rgb(248, 240, 252);
  --bg-color-main-white: rgb(250,250,250);
}
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: var(--bg-color-main-light);
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: black;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default globalStyles;
