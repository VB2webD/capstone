import styled from "styled-components";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import HtmlHead from "./Head";

const Layout = ({ hasCart, hasFooter, title, children }) => {
  return (
    <>
      <HtmlHead title={title} />
      <Header title={title} hasCart={hasCart} />
      <StyledMain hasFooter>{children}</StyledMain>
      {hasFooter ? <Footer /> : null}
    </>
  );
};

export default Layout;

/* -------
  Styles:
------- */

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: var(--header-height);
  margin-bottom: ${(props) => (props.hasFooter ? "var(--footer-height)" : 0)};
  padding: 0 5%;

  line-break: normal;
  z-index: 0;
  background-color: var(--bg-color-main-light);
`;
