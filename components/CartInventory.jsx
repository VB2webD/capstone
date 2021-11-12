import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/ItemsInCart";
import CartItem from "./CartItem";
import Link from "next/link";

const CartInventory = () => {
  const [itemsInCart, setItemsInCart] = useCart();
  return (
    <StyledDiv>
      <ul>
        {itemsInCart.map(({ name }) => (
          <CartItem name={name} />
        ))}
      </ul>
      <Link href="/checkout">
        <a>Buy</a>
      </Link>
    </StyledDiv>
  );
};

export default CartInventory;

/* -------
 Styles:
------- */

const StyledDiv = styled.div`
  position: fixed;
  top: var(--header-height);
  right: 0;
  height: 15vh;
  width: 15vw;
  background-color: var(--bg-color-main-dark);
  list-style-type: none;
  padding: 1%;
  margin: 0;
  overflow-y: scroll;
  Link {
    bottom: 0;
    width: 100%;
    background-color: whitesmoke;
  }
`;
