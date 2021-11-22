import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const CounterForm = ({ _id, slug, name, isTiny, variant, minimum, price }) => {
  const { addItem } = useCart();
  const [amount, setAmount] = useState(minimum);

  const decrementAmount = (by) => {
    if (amount >= minimum) setAmount((amount) => amount - by);
  };

  const incrementAmount = (by) => {
    setAmount((amount) => amount + by);
  };

  // const resetAmount = () => {
  //   setAmount(minimum);
  // };

  const handleSubmit = (event) => {
    addItem({
      _id,
      name,
      slug,
      amount: amount,
      variant: variant.value,
      price: price,
    });
    event.preventDefault();
    setAmount(() => 1);
  };

  const amountHandlerInputChange = (event) => {
    // sanitise Input
    if (event.target.value === "") {
      return setAmount(0);
    } else if (event.target.value > 99) {
      setAmount(99);
    } else if (event.target.value < 0) {
      setAmount(0);
    } else if (event.target.input > minimum) {
      setAmount(minimum);
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
          value={amount}
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
        value={isTiny ? "In die Tüte" : "In den Warenkorb"}
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
  input {
    background-color: var(--cta-color-bag-active);
    border: none;
    height: 2rem;
    width: 90%;
    margin-bottom: 1rem;
  }

  fieldset {
    border: none;
    display: flex;
    gap: 0.5rem;
    justify-content: center;

    input {
      text-align: center;
      background-color: var(--bg-color-main-dark);
      border-radius: 5px;
      height: 2rem;
      width: 2rem;
      margin: 0;
    }
  }
`;
