import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
:root{
  // Layout sizing
  --header-height: 4rem;
  --footer-height: 4rem;
  --footer-link-width: calc(25vw * 0.95);
  // Colors:
  --bg-color: hotpink;
  --bg-main-color: lightgrey;
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
