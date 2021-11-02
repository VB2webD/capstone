import styled from "styled-components";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

const Layout = ({ isVisible, title, children }) => {
  return (
    <>
      <Header title={title} />
      <StyledMain>{children}</StyledMain>
      <Footer isVisible={isVisible} />
    </>
  );
};
export default Layout;
const StyledMain = styled.main`
  position: absolute;
  top: 3.8rem;
  bottom: 3.8rem;
  width: 100vw;
  margin: 1vw, 0;
  padding: 0 1vw;
  line-break: normal;
  z-index: 1;
  background-color: green;
`;
