import React from "react";
import styled from "styled-components";
import ActiveLink from "./ActiveLink";

export function Footer({ isVisible }) {
  const show = isVisible;
  return (
    <StyledFooter>
      <ActiveLink href="/specials" activeClassName="current">
        <a>Specials</a>
      </ActiveLink>
      <ActiveLink href="/shop" activeClassName="current">
        <a>Shop</a>
      </ActiveLink>
      <ActiveLink href="/favourites" activeClassName="current">
        <a>Favourites</a>
      </ActiveLink>
      <ActiveLink href="/checkout" activeClassName="current">
        <a>Checkout</a>
      </ActiveLink>
    </StyledFooter>
  );
}

const StyledFooter = styled.ul`
  position: fixed;
  width: 100vw;
  bottom: 0;
  height: var(--footer-height);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
  background-color: var(--bg-color);
  padding: 0;
  margin: 0;
  z-index: 1;

  .current {
    background-color: var(--bg-color-nav-current);
    border: 1px solid white;
  }

  a {
    width: var(--footer-link-width);
    text-align: center;
    line-height: calc(var(--footer-height) * 0.9);
    height: calc(var(--footer-height) * 0.95);
  }
`;
