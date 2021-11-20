import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Bag = ({ name, slug, image, isVegan, variants }) => {
  return (
    <Link href={`/details/bags/${slug}`}>
      <StyledBag>
        <Image
          src={image}
          width={250}
          height={375}
          alt={`Prepackaged sweet mix: ${name}`}
        />
        <StyledName>
          {name} <StyledVegan>{isVegan ? "🌱" : null}</StyledVegan>
        </StyledName>
        <div>
          <p>Ab: {numberFormat.format(variants[1].price)}</p>
          <p>
            {variants[1].weight
              ? numberFormat.format(
                  ((variants[1].price / variants[1].weight) * 100).toFixed(2)
                ) + " / 100g"
              : null}
          </p>
        </div>
      </StyledBag>
    </Link>
  );
};

export default Bag;

var numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

/* -------
  Styles:
------- */

const StyledBag = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;

  p {
    margin: 0.2rem;
    align-items: baseline;
  }
`;

const StyledVegan = styled.p`
  height: 25px;
`;

const StyledName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
