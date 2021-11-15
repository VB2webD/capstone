import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/ItemsInCart";

const CounterForm = ({ slug, name }) => {
  const { itemsInCart, setItemsInCart, addItem } = useCart();
  const [amount, setAmount] = useState(0);

  const decAmount = (int) => {
    setAmount((amount) => amount - int);
    console.log(name + " amount:" + amount);
  };

  const incAmount = (int) => {
    setAmount((amount) => amount + int);
    console.log(name + " amount:" + amount);
  };

  const handleSubmit = (event) => {
    addItem({ name, slug, amount: amount });
    event.preventDefault();
    alert("submitted " + amount + "x " + name);
    setAmount(() => 0);
  };

  const amountHandlerInputChange = (event) => {
    setAmount(event.target.value);
    console.log(amount);
  };

  /* 
    - Input + 
    Submit
    
    */

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <input type="button" onClick={() => decAmount(1)} value="-" />
        <input
          type="text"
          id="amount"
          name="amount"
          value={`${amount}`}
          onChange={() => amountHandlerInputChange()}
        />
        <input type="button" onClick={() => incAmount(1)} value="+" />
      </fieldset>
      <input type="submit" value="Submit" />
    </StyledForm>
  );
};

export default CounterForm;

/* -------
 Styles:
------- */

const StyledForm = styled.form`
  border: 1px solid salmon;
`;
