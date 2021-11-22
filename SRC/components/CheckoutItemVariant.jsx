import React from "react";
import styled from "styled-components";

const CheckoutItemVariant = ({ variant, amount }) => {
  return (
    <StyledItemVariant>
      <span>{amount} x </span>
      <span>{variant}</span>
    </StyledItemVariant>
  );
};

export default CheckoutItemVariant;

/* -------
 Styles:
------- */

const StyledItemVariant = styled.span`
  padding-left: 1rem;
`;
