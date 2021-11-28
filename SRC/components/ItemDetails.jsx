import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Select from "react-select";
import CounterForm from "./CounterForm";
import Delete from "./images/delete.svg";
import SoldOut from "./images/soldOut.svg";

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
    value: "Farbe Egal",
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
        <button>
          <Delete height={36} width={36}/>
        </button>
      </Link>
      <h1>{name} </h1>
      <Image src={image} width={255} height={255} />
      <p>{description}</p>
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
          price={price}
        />
      ) : (
        <SoldOut width={255} height={255} />
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

  h1 {
    font-size: 3rem;
    color: var(--cta-color-main-active);
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 2rem;
    width: 2rem;
    font-size: 1.5rem;
    border: none;
    background-color: unset;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  left: 22rem;
  top: 0;
`;
