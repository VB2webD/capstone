import React from "react";
import styled from "styled-components";
import ActiveLink from "./ActiveLink";

export function Footer() {
  return (
    <StyledFooter>
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

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  width: 100vw;
  bottom: 0;
  height: var(--footer-height);
  justify-content: space-around;
  align-items: center;
  background-color: var(--bg-color-main-white);
  padding: 0;
  margin: 0;
  z-index: 1;

  .active {
    background-color: var(--bg-color-main-white);
    color: var(--cta-color-main-active);
  }

  a {
    width: var(--footer-link-width);
    height: var(--footer-height);
    text-align: center;
    padding-top: 1.3rem;

    &:hover {
      background-color: var(--cta-color-main);
      color: var(--bg-color-main-white);
    }
  }
`;
