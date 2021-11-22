import React, { useState } from "react";
import styled from "styled-components";
import CheckoutItemVariant from "./CheckoutItemVariant";

const CheckoutItem = ({ name, variants }) => {
  const price = 0.06;
  const [showDetails, setShowDetails] = useState(false);

  let total = 0;
  variants.forEach((item) => {
    total += item.amount;
  });

  const [itemTotal, setItemTotal] = useState(total);
  const filteredVariants = variants.filter((item) => item.variant !== "🌈");

  return (
    <StyledLi>
      <div className="item">
        <span>
          {total} x {name} {numberFormat.format(price)}
        </span>
        <span>{numberFormat.format(price * itemTotal)}</span>
      </div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "⬇" : "➡"}
      </button>
      {showDetails ? (
        <span>
          {variants.map(({ variant, amount }) => (
            <CheckoutItemVariant
              key={variant}
              variant={variant}
              amount={amount}
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
