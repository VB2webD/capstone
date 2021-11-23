import React from "react";
import styled from "styled-components";
import ShoppingCart from "../../ShoppingCart";

const Header = ({ title, hasCart }) => {
  return (
    <StyledHeader>
      <StyledFlex>
        <StyledTitle>{title}</StyledTitle>
        {hasCart ? <ShoppingCart /> : null}
      </StyledFlex>
    </StyledHeader>
  );
};
export default Header;

const StyledFlex = styled.div`
  display: flex;
`;

const StyledTitle = styled.div`
  position: relative;
  left: 5%;
  top: 1.3rem;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 1;
  background-color: var(--bg-color-main-white);
`;
