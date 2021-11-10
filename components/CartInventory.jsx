import React from "react";
import styled from "styled-components";

const CartInventory = () => {
  return (
    <StyledUl>
      <li>my items here</li>
      <li>more items here</li>
      <li>more items here</li>
      <li>more items here</li>
      <li>more items here</li>
      <li>more items here</li>
      <li>more items here</li>
      <li>more items here</li>
      <li>more items here</li>
      <li>more items here</li>
      <li>more items here</li>
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
