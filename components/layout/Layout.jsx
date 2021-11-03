import styled from "styled-components";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

const Layout = ({ isVisible, isCurrent, title, children }) => {
  return (
    <>
      <Header title={title} />
      <StyledMain>{children}</StyledMain>
      <Footer isVisible={isVisible} isCurrent={isCurrent} />
    </>
  );
};
export default Layout;
const StyledMain = styled.main`
  position: absolute;
  top: var(--header-height);
  bottom: var(--footer-height);
  width: 100vw;
  margin: 1vw, 0;
  padding: 0 1vw;
  line-break: normal;
  z-index: 1;
  background-color: var(--bg-main-color);
`;
