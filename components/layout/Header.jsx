import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <span>{title}</span>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 4rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: var(--bg-color);
`;
