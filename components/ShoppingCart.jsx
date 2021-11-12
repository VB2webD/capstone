import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import CartInventory from "./CartInventory";
import { useCart } from "../context/ItemsInCart";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const { itemsInCart, setItemsInCart } = useCart();

  return (
    <>
      <StyledDiv
        onClick={() => {
          setOpen(!open);
          console.log("shoppingCard open " + open);
        }}
      >
        <span>Tüte</span>
        <Image
          open={open}
          src="/../public/shoppingCart.svg"
          height={30}
          width={30}
          alt="Access your shopping card here"
        />
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
  color: var();
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
