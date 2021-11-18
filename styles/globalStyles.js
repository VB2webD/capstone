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
  --bg-color-main-dark: rgb(206,153,233);
  --bg-color-main-light: rgb(248, 240, 252);
  --bg-color-main-white: rgb(252,252,252);
}
h1,h2 {
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
    color: var(--bg-color-main-dark);
    font-family: "Amatic SC", cursive;
    text-align: center;
  }
html,
body {
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,500&display=swap');
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: var(--bg-color-main-light);
  font-family: "Source Code Pro";
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
