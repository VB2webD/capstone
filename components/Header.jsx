import React from "react";
import styled from "styled-components";

export const Header = ({ title }) => {
  return (
    <StyledHeader>
      <span>{title}</span>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
`;
