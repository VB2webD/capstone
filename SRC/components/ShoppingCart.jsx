import React, { useState } from "react";
import styled from "styled-components";
import CartInventory from "./CartInventory";
import { useCart } from "../../context/CartContext";
import Tute from "./images/tute.svg";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const { itemsInCart, setItemsInCart } = useCart();

  return (
    <>
      <StyledDiv
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>Tüte</span>
        <Tute height={30} width={30} />
        {itemsInCart.length ? (
          <StyledCounter>{itemsInCart.length}</StyledCounter>
        ) : null}
      </StyledDiv>
      {open ? <CartInventory /> : null}
    </>
  );
};

export default ShoppingCart;

/* -------
  Styles:
------- */

const StyledDiv = styled.div`
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 1vw;
  top: 1rem;
`;

const StyledCounter = styled.p`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: auto;
  top: 0;
  right: 0.4rem;
  color: white;
  background-color: #727272;
  border-radius: 45px;
  text-align: center;
  vertical-align: middle;
`;
