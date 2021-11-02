import React from "react";
import Link from "next/link";
import styled from "styled-components";

function Footer() {
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

export default Footer;

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
