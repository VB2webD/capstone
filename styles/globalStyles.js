import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
:root{
  // Layout sizing
  --header-height: 4rem;
  --footer-height: 4rem;
  --footer-link-width: calc(25vw * 0.95);
  // Colors:
  --bg-color-nav: rgb(250,250,250);
  --bg-color-nav-current: rgb(220,220,250);
  --bg-main-color: rgb(248, 240, 252);
}
html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
