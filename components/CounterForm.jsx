import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/ItemsInCart";

const CounterForm = ({ slug, name, isTiny }) => {
  const { itemsInCart, setItemsInCart, addItem } = useCart();
  const [amount, setAmount] = useState(0);

  const decrementAmount = (by) => {
    setAmount((amount) => amount - by);
  };

  const incrementAmount = (by) => {
    setAmount((amount) => amount + by);
  };

  const handleSubmit = (event) => {
    addItem({ name, slug, amount: amount });
    event.preventDefault();
    setAmount(() => 0);
  };

  const amountHandlerInputChange = (event) => {
    if (event.target.value === "" || event.target.value > 99) {
      setAmount(() => 0);
    }
    if (event.target.value > 99) {
      setAmount(() => 99);
    } else {
      console.log("success");
      setAmount(parseInt(event.target.value, 10));
    }
  };

  /* 
    - Input + 
    Submit
    
    */

  return (
    <StyledForm onSubmit={handleSubmit} isTiny={isTiny}>
      <fieldset>
        <input
          type="button"
          onClick={() => decrementAmount(1)}
          value="-"
          aria-label="decrement amount by 1"
        />
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
        <input
          type="button"
          onClick={() => incrementAmount(1)}
          value="+"
          aria-label="increment amount by 1"
        />
      </fieldset>
      <input
        type="submit"
        value={isTiny ? "Hinzufügen" : "In den Warenkorb"}
        aria-label="add to shopping Cart"
      />
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
