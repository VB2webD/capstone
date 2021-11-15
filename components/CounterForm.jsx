import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/ItemsInCart";

const CounterForm = ({ slug, name, isTiny }) => {
  const { itemsInCart, setItemsInCart, addItem } = useCart();
  const [amount, setAmount] = useState(0);

  const decAmount = (int) => {
    setAmount((amount) => amount - int);
  };

  const incAmount = (int) => {
    setAmount((amount) => amount + int);
  };

  const handleSubmit = (event) => {
    addItem({ name, slug, amount: amount });
    event.preventDefault();
    setAmount(() => 0);
  };

  const amountHandlerInputChange = (event) => {
    setAmount(parseInt(event.target.value, 10));
    console.log(typeof amount);
  };

  /* 
    - Input + 
    Submit
    
    */

  return (
    <StyledForm onSubmit={handleSubmit} isTiny>
      <fieldset>
        <input type="button" onClick={() => decAmount(1)} value="-" />
        <input
          type="number"
          min="0"
          max="99"
          step="1"
          id="amount"
          name="amount"
          value={`${amount}`}
          onChange={amountHandlerInputChange}
        />
        <input type="button" onClick={() => incAmount(1)} value="+" />
      </fieldset>
      <input type="submit" value={isTiny ? "Hinzufügen" : "In den Warenkorb"} />
    </StyledForm>
  );
};

export default CounterForm;

/* -------
 Styles:
------- */

const StyledForm = styled.form`
  border: 1px solid salmon;

  input {
    background-color: ${(props) =>
      props.isTiny ? "var(--cta-color-main)" : "var(--cta-color-main-active)"};
    
  }

  fieldset {
    border: none;
    display: flex;
    gap: 0.5rem;
    input {
      border: none;
      text-align: center;
      background-color: var(--bg-color-main-white);
    }

    :hover {
      background-color: var(--cta-color-main);
    }
  }
`;
