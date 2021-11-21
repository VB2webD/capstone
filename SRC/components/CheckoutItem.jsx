import React from "react";

const CheckoutItem = ({ name, variants }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{variants}</span>
    </li>
  );
};

export default CheckoutItem;
