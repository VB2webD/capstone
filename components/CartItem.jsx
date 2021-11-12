import React from "react";

const CartItem = ({ name, index, removeItem }) => {

  return (
    <li>
      {name} <button onClick={() => removeItem(index)}>🗑</button>
    </li>
  );
};

export default CartItem;
