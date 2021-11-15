import React from "react";

const ItemDetails = ({
  name,
  description,
  image,
  weight,
  price,
  isVegan,
  isInStock,
  minimum,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{image}</p>
      <p>{weight}</p>
      <p>{price}</p>
      <p>{isVegan}</p>
      <p>{isInStock}</p>
      <p>{minimum}</p>
    </div>
  );
};

export default ItemDetails;
