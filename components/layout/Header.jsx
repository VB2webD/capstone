import React from "react";
import styled from "styled-components";
import ShoppingCart from "../ShoppingCart";

const Header = ({ title, hasCart }) => {
  console.log("hasCart:" + hasCart);
  return (
    <StyledHeader>
      <span>{title}</span>
      {hasCart ? <ShoppingCart /> : null}
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: var(--header-height);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: var(--bg-color-main-white);
`;
