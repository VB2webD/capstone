import React, { useState } from "react";
import styled from "styled-components";
import CheckoutItemVariant from "./CheckoutItemVariant";

const CheckoutItem = ({ name, variants }) => {
  const [showDetails, setShowDetails] = useState(false);

  let total = 0;
  let totalPrice = 0;

  variants.forEach((item) => {
    total += item.amount;
    totalPrice += item.amount * item.price;
  });
  const filteredVariants = variants.filter((item) => item.variant !== "🌈");

  return (
    <StyledLi>
      <div className="item">
        <span>
          {total} x {name}
        </span>
        <span>{numberFormat.format(totalPrice)}</span>
      </div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "⬇" : "➡"}
      </button>
      {showDetails ? (
        <span>
          {variants.map(({ variant, amount, price }) => (
            <CheckoutItemVariant
              key={variant}
              variant={variant}
              amount={amount}
              price={price}
            />
          ))}
        </span>
      ) : null}
    </StyledLi>
  );
};

export default CheckoutItem;

var numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

/* -------
 Styles:
------- */

const StyledLi = styled.li`
  list-style-type: none;
  padding: 0 1rem 0 1rem;
  margin-left: 0;

  :nth-child(odd) {
    background-color: var(--bg-color-main-white);
  }

  .item {
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: inherit;
    border: none;
    display: inline-block;
  }
`;
