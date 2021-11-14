import React, { useState } from "react";
import styled from "styled-components";

const CounterForm = ({ slug, name }) => {
  const [amount, setAmount] = useState(0);

  const decAmount = () => {
    setAmount((amount) => amount - 1);
    console.log(name + " amount:" + amount);
  };

  const incAmount = () => {
    setAmount((amount) => amount + 1);
    console.log(name + " amount:" + amount);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("submitted " + amount + "x " + name);
  };


  /* 
    - Input + 
    Submit
    
    */

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <input type="button" onClick={decAmount} value="-" />
        <input
          type="text"
          id="amount"
          name="amount"
          value={`${amount}`}
        />
        <input type="button" onClick={incAmount} value="+" />
      </fieldset>
      <button type="submit">Submit</button>
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
