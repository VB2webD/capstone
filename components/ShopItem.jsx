import React from "react";
import styled from "styled-components";
import CounterForm from "./CounterForm";

const ShopItem = ({ slug, name, price }) => {
  return (
    <ItemContainer>
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <CounterForm key={slug} slug={slug} name={name}/>
    </ItemContainer>
  );
};

export default ShopItem;

/* -------
 Styles:
------- */

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border: 1px solid black;
`;
