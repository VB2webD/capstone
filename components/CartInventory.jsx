import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/ItemsInCart";
import CartItem from "./CartItem";

const CartInventory = () => {
  const [itemsInCart, setItemsInCart] = useCart();
  return (
    <StyledUl>
      {itemsInCart.map(({ name }) => (
        <CartItem name={name} />
      ))}
    </StyledUl>
  );
};

export default CartInventory;

/*
-------
Styles:
-------
*/

const StyledUl = styled.ul`
  position: fixed;
  top: var(--header-height);
  right: 5px;
  height: 15vh;
  width: 15vw;
  background-color: var(--bg-color-main-dark);
  list-style-type: none;
  padding: 1%;
  margin: 0;
  overflow-y: scroll;
`;
