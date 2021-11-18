import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Select from "react-select";
import CounterForm from "./CounterForm";

var numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

const ItemDetails = ({
  name,
  slug,
  description,
  image,
  weight,
  price,
  isVegan,
  isInStock,
  minimum,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState({
    value: "🌈",
    label: "🌈",
  });

  const option = options
    ? options.map((option) => {
        return { value: option, label: option };
      })
    : null;
  return (
    <StyledCard>
      <Link href="/shop">
        <button>╳</button>
      </Link>
      <h2>{name} </h2>
      {isVegan ? (
        <StyledImage
          src="/../public/vegan.svg"
          width={100}
          height={100}
        ></StyledImage>
      ) : (
        ""
      )}
      <Image src={image} width={355} height={355} />
      <p>{description}</p>
      <p>{weight} g</p>
      <p>{numberFormat.format(price)}</p>

      {option ? (
        <Select
          value={selectedOption}
          options={option}
          placeholder={options[0]}
          onChange={setSelectedOption}
        ></Select>
      ) : (
        ""
      )}
      {isInStock ? (
        <CounterForm
          key={name}
          name={name}
          slug={slug}
          weight={weight}
          variant={selectedOption}
          minimum={minimum}
        />
      ) : (
        <Image src={"/../public/soldOut.svg"} width={200} height={150}></Image>
      )}
    </StyledCard>
  );
};

export default ItemDetails;

/* -------
 Styles:
------- */

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  gap: 1rem;

  h2 {
    color: var(--cta-color-main-active);
  }

  button {
    position: absolute;
    top: 2rem;
    right: 2rem;
    height: 2rem;
    width: 2rem;
    border: none;
    background-color: unset;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  left: 22rem;
  top: 0;
`;
