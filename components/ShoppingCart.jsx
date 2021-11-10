import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import CartInventory from "./CartInventory";
import { useCart } from "../context/ItemsInCart";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useCart();

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
        <StyledCounter>{itemsInCart.length}</StyledCounter>
      </StyledDiv>
      {open ? <CartInventory /> : null}
    </>
  );
};

export default ShoppingCart;

/*
-------
Styles:
-------
*/

const StyledDiv = styled.div`
  span {
    vertical-align: middle;
    margin-right: 1vw;
  }
`;

const StyledCounter = styled.p`
  color: var();
  position: absolute;
  width: 20px;
  height: 20px;
  padding: auto;
  top: -5px;
  right: 0;
  color: white;
  background-color: #727272;
  border-radius: 45px;
  text-align: center;
  vertical-align: middle;
`;
