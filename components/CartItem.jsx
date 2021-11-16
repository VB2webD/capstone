import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";

const CartItem = ({ name, variants, index }) => {
  const { removeItem } = useCart();

  let total = 0;
  variants.map((item) => {
    return (total += item.amount);
  });

  return (
    <StyledLi>
      <p>
        {total} x {name}
      </p>
      <button onClick={() => removeItem(index)}>🗑</button>
    </StyledLi>
  );
};

export default CartItem;

/* -------
 Styles:
------- */

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1%;
  padding: 1%;
  :nth-child(odd) {
    background-color: var(--bg-color-main-light);
  }

  button {
    background-color: var(--bg-color-main-light);
    height: 85%;
    border-radius: 5px;
    align-self: center;
    :hover {
      background-color: var(--bg-color-main);
    }
  }
`;
