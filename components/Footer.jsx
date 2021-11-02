import React from "react";
import Link from "next/link";
import styled from "styled-components";

export function Footer() {
  return (
    <StyledFooter>
      <Link href="/Specials">
        <a>Specials</a>
      </Link>
      <Link href="/Shop">
        <a>Shop</a>
      </Link>
      <Link href="/Favourites">
        <a>Favourites</a>
      </Link>
      <Link href="/Checkout">
        <a>Checkout</a>
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.ul`
  position: fixed;
  width: 100vw;
  bottom: 0;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
  background-color: var(--bg-color);
  padding: 0;
  margin: 0;
`;
