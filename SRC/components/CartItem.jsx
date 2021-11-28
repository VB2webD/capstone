import React from "react";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";
import Delete from "./images/delete.svg";

const CartItem = ({ name, variants, index }) => {
  const { removeItem } = useCart();

  let total = 0;
  variants.forEach((item) => {
    total += item.amount;
  });

  return (
    <StyledLi>
      <p>
        {total} × {name}
      </p>
      <button onClick={() => removeItem(index)}>
        <Delete width={20} height={20} />
      </button>
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
