import styled from "styled-components";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

const Layout = ({ hasCart, hasFooter, title, children }) => {
  return (
    <>
      <Header title={title} hasCart={hasCart} />
      <StyledMain hasFooter>{children}</StyledMain>
      {hasFooter ? <Footer /> : null}
    </>
  );
};

export default Layout;

const StyledMain = styled.main`
  position: absolute;
  top: var(--header-height);
  bottom: ${(props) => (props.hasFooter ? "var(--footer-height)" : 0)};
  width: 100vw;
  margin: 1vw, 0;
  padding: 0 1vw;
  line-break: normal;
  z-index: 0;
  background-color: var(--bg-color-main-light);
`;
