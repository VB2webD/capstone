import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/ItemsInCart";
import CartItem from "./CartItem";
import Link from "next/link";

const CartInventory = () => {
  const { itemsInCart, setItemsInCart, removeItem } = useCart();
  return (
    <StyledDiv>
      <ul>
        {itemsInCart.map(({ name }, index) => (
          <CartItem
            key={index}
            name={name}
            index={index}
            removeItem={removeItem}
          />
        ))}
      </ul>
      <Link href="/checkout">
        <StyledButton>Buy</StyledButton>
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
  margin: 0;
  overflow-y: scroll;

  ul {
    margin: 0;
    padding: 0;
  }
`;

const StyledButton = styled.button`
  color: white;
  background-color: var(--cta-color-main-active);
  border: 0;
  width: 90%;
  height: 2rem;
  margin: 4%;

  :hover {
    background-color: var(--cta-color-main);
  }
`;
