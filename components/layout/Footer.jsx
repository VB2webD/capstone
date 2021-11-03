import React from "react";
import styled from "styled-components";
import ActiveLink from "./ActiveLink";

export function Footer() {
  return (
    <StyledFooter >
      <ActiveLink href="/specials" activeClassName="active">
        <a>Specials</a>
      </ActiveLink>
      <ActiveLink href="/shop" activeClassName="active">
        <a>Shop</a>
      </ActiveLink>
      <ActiveLink href="/favourites" activeClassName="active">
        <a>Favourites</a>
      </ActiveLink>
      <ActiveLink href="/checkout" activeClassName="active">
        <a>Checkout</a>
      </ActiveLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.ul`
  position: fixed;
  display: flex;
  width: 100vw;
  bottom: 0;
  height: var(--footer-height);
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
  background-color: var(--bg-color-white);
  padding: 0;
  margin: 0;
  z-index: 1;

  .active {
    background-color: var(--bg-color-main-white);
    border: 3px solid var(--cta-color-main);
  }

  a {
    width: var(--footer-link-width);
    text-align: center;
    line-height: calc(var(--footer-height) * 0.9);
    height: calc(var(--footer-height) * 0.95);

    &:hover {
      background-color: var(--cta-color-main-active);
    }
  }
`;
