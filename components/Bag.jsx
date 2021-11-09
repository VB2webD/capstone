import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Bag = ({ name, image, isVegan, variants }) => {
  var numberFormat = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <StyledBag>
      <Image
        src={image}
        width={250}
        height={375}
        alt={`Prepackaged sweet mix: ${name}`}
      />
      <p>
        {name} {isVegan ? "🌱" : null}
      </p>
      <p>Ab: {numberFormat.format(variants[1].price)}</p>
      <p>
        {numberFormat.format(
          ((variants[1].price / variants[1].weight) * 100).toFixed(2)
        )}
        &nbsp;/ 100g
      </p>
    </StyledBag>
  );
};

export default Bag;

const StyledBag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  text-align: center;
`;
