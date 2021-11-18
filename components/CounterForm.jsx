import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";

const CounterForm = ({ _id, slug, name, isTiny, variant, minimum }) => {
  const { addItem } = useCart();
  const [amount, setAmount] = useState(minimum);
  const [open, setOpen] = useState(false);

  const decrementAmount = (by) => {
    if (amount < minimum) {
    } else setAmount((amount) => amount - by);
  };

  const incrementAmount = (by) => {
    setAmount((amount) => amount + by);
  };

  const handleSubmit = (event) => {
    addItem({ _id, name, slug, amount: amount, variant: variant.value });
    event.preventDefault();
    setAmount(() => 0);
  };

  const amountHandlerInputChange = (event) => {
    // sanitise Input, dunno why this stopped working, it used 2 and the cases still trigger!
    if (event.target.value === "") {
      setAmount(() => 0);
      console.log("not a valid input");
    }
    if (event.target.value > 99) {
      console.log("amount to high");
      setAmount(() => 99);
    }
    if (event.target.input > minimum) {
      setAmount(() => minimum);
    } else {
      setAmount(parseInt(event.target.value, 10));
    }
  };

  /* 
      Submit
    - Input + 
  */

  return (
    <StyledForm onSubmit={handleSubmit} isTiny={isTiny}>
      <input
        onClick={() => {
          setOpen(!open);
        }}
        type={open ? "button" : "submit"}
        value={isTiny ? "Hinzufügen" : "In den Warenkorb"}
        aria-label="add to shopping Cart"
      />
      {open ? (
        <fieldset>
          <input
            type="button"
            onClick={() => decrementAmount(1)}
            value="-"
            aria-label="decrement amount by 1"
          />
          <input
            type="number"
            min="1"
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
      ) : null}
    </StyledForm>
  );
};

export default CounterForm;

/* -------
 Styles:
------- */

const StyledForm = styled.form`
  input {
    background-color: var(--cta-color-main);
  }

  fieldset {
    border: none;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
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
