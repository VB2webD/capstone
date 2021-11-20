import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import CounterForm from "./CounterForm";
import BagDetailsItem from "./BagDetailsItem";
import Vegan from "./images/vegan.svg";
import SoldOut from "./images/soldOut.svg";

const BagDetails = ({
  _id,
  slug,
  name,
  image,
  isVegan,
  contains,
  variants,
  isInStock,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = variant[selectedVariantIndex];

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
        <Image src={image} width={275} height={350} />
      </div>
      <div>
        <Link href="/specials">
          <button>╳</button>
        </Link>
        <h2>{name} </h2>
        {isVegan ? <Vegan width={100} height={100} /> : ""}
        <p>{numberFormat.format(selectedOption.price)}</p>
        <p>
          {selectedOption.weight
            ? numberFormat.format(
                ((selectedOption.price / selectedOption.weight) * 100).toFixed(
                  2
                )
              ) + " / 100g"
            : null}
        </p>
        <hr />
        <h3>Größe</h3>
        {variants ? (
          <Select
            value={selectedVariantIndex}
            options={options}
            placeholder={selectedVariant.weight + "g"}
            onChange={handleVariantChange}
          />
        ) : (
          ""
        )}
        <h3>Menge</h3>
        {isInStock ? (
          <CounterForm
            key={name}
            _id={_id}
            name={name}
            slug={slug}
            variant={{ value: `${selectedVariant.weight}g` }}
            minimum={1}
          />
        ) : (
          <SoldOut width={255} height={255} />
        )}
        <hr />
        <div>
          <h3>Inhalt</h3>
          <ul>
            {contains.map((item, index) => (
              <BagDetailsItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
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
  align-items: center;
  text-align: center;
  padding: 1rem;
  gap: 1rem;

  h2 {
    color: var(--cta-color-main-active);
  }

  h3 {
    text-align: left;
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
  ul {
    text-align: left;
    list-style-type: none;
    padding-left: 0.5rem;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  left: 22rem;
  top: 0;
`;
