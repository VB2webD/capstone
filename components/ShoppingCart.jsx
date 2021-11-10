import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import CartInventory from "./CartInventory";

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledDiv>
        <span>Tüte:</span>
        <Image
          open={open}
          onClick={() => {
            setOpen(!open);
            console.log("shoppingCard open " + open);
          }}
          src="/../public/shoppingCart.svg"
          height={30}
          width={30}
          alt="Access your shopping card here"
        />
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
