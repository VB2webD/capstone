import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

export function Footer({ isVisible }) {
  const show = isVisible;
  return (
    <StyledFooter>
      <Link href="/specials">
        <a>Specials</a>
      </Link>
      <Link href="/shop">
        <a>Shop</a>
      </Link>
      <Link href="/favourites">
        <a>Favourites</a>
      </Link>
      <Link href="/checkout">
        <a>Checkout</a>
      </Link>
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
  a {
    width: var(--footer-link-width);
    border: 1px solid white;
    text-align:center;
    line-height: calc(var(--footer-height) * 0.9);
    height: calc(var(--footer-height) * 0.95);
  }
`;
