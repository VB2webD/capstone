import React from "react";
import styled from "styled-components";
import CounterForm from "./CounterForm";
import SoldOut from "./images/soldOut.svg";
import Link from "next/link";
import Image from "next/image";

const ShopItem = ({ slug, name, price, image, isInStock, minimum }) => {
  return (
    <ItemContainer>
      <Image src={image} width={125} height={125} alt={`Image of ${name}`} />
      <div>
        <h2>{name}</h2>
        <Link href={`/details/items/${slug}`}>
          <a>Details</a>
        </Link>
        <p>{numberFormat.format(price)}</p>
      </div>

      {isInStock ? (
        <CounterForm
          name={name}
          slug={slug}
          price={price}
          isTiny={true}
          variant={{ value: "🌈" }}
          minimum={minimum}
        />
      ) : (
        <SoldOut width={100} height={75}></SoldOut>
      )}
    </ItemContainer>
  );
};

export default ShopItem;

var numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

/* -------
 Styles:
------- */

const ItemContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--bg-color-main-white);
  padding: 0.2rem;

  a {
    color: var(--cta-color-main-active);
    ::after {
      content: "";
      width: 25%;
      display: block;
      height: 2px;
      margin: 3px auto 0;
      background-color: var(--cta-color-main-active);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    min-height: fit-content;
    width: 100%;
    p {
      height: 2rem;
    }
  }
`;
