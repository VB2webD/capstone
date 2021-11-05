import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Bag = ({ name, image, isVegan }) => {
  return (
    <StyledBag>
      <Image
        src={image}
        width={250}
        height={375}
        alt={`Prepackaged sweet mix: ${name}`}
      ></Image>
      <span>{name}</span>
      <checkbox checked={isVegan} />
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
  border: 1px solid black;
`;
