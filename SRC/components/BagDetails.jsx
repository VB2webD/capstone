import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import CounterForm from "./CounterForm";
import BagDetailsItem from "./BagDetailsItem";
import SoldOut from "./images/soldOut.svg";

const BagDetails = ({
  _id,
  slug,
  name,
  image,
  contains,
  variants,
  isInStock,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = variants[selectedVariantIndex];

  const options = variants
    ? variants.map((item, index) => {
        return {
          value: index,
          label: `${item.weight}g ${item.name}`,
        };
      })
    : null;

  const handleVariantChange = ({ value }) => {
    setSelectedVariantIndex(value); // value -> index of selected variant
  };

  return (
    <StyledCard>
      <div>
        <Link href="/specials">
          <a>╳</a>
        </Link>
      </div>
      <h2>{name} </h2>
      <StyledWrapper>
        <div>
          <Image src={image} width={200} height={300} />
        </div>
        <div>
          <h3>Größe</h3>
          <div>
            <span>{numberFormat.format(selectedVariant.price)}</span>
            <br />
            <span>
              {selectedVariant.weight
                ? numberFormat.format(
                    (
                      (selectedVariant.price / selectedVariant.weight) *
                      100
                    ).toFixed(2)
                  ) + " / 100g"
                : null}
            </span>
          </div>
          {variants ? (
            <Select
              value={selectedVariantIndex}
              options={options}
              placeholder={selectedVariant.weight + "g"}
              onChange={handleVariantChange}
            />
          ) : null}
          <h3>Menge</h3>
          {isInStock ? (
            <CounterForm
              key={name}
              _id={_id}
              name={name}
              slug={slug}
              variant={{ value: `${selectedVariant.weight}g` }}
              price={selectedVariant.price}
              minimum={1}
            />
          ) : (
            <SoldOut width={255} height={255} />
          )}
        </div>
      </StyledWrapper>
      <StyledContent>
        <h3>Inhalt</h3>
        <ul>
          {contains.map((item, index) => (
            <BagDetailsItem key={index} item={item} />
          ))}
        </ul>
      </StyledContent>
    </StyledCard>
  );
};

export default BagDetails;

var numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

/* -------
 Styles:
------- */

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    color: var(--cta-color-main-active);
    font-size: 36;
  }

  a {
    position: absolute;
    top: 1rem;
    right: 0;
    height: 2rem;
    width: 2rem;
    border: none;
    background-color: unset;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-grow: inherit;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  h3 {
    text-align: left;
    margin: 0;
  }

  ul {
    text-align: left;
    list-style-type: none;
    padding-left: 0.5rem;
  }
`;
