import React from "react";
import styled from "styled-components";

const CheckoutItemVariant = ({ variant, amount, price }) => {
  return (
    <StyledItemVariant>
      <div>
        <span>{amount} x </span>
        <span>{variant}</span>
      </div>
      <span>{numberFormat.format(price)}</span>
    </StyledItemVariant>
  );
};

export default CheckoutItemVariant;

const numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

/* -------
 Styles:
------- */

const StyledItemVariant = styled.div`
  display: flex;
  justify-content: space-between;
  font: 0.8rem;
  padding: 0 0.5rem;
`;
