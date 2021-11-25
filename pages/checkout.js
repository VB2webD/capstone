import React from "react";
import Layout from "../src/components/layouts/layout/Layout";
import { useCart } from "../context/CartContext";
import CheckoutItem from "../src/components/CheckoutItem";
import styled from "styled-components";
import Link from "next/link";

const Checkout = () => {
  const { itemsInCart, addItem, removeItem } = useCart();

  let total = itemsInCart.reduce(
    (total, { variants }) =>
      total +
      variants.reduce((total, item) => total + item.amount * item.price, 0),
    0
  );
  return (
    <Layout title="Checkout" hasFooter>
      <StyledCheckout>
        <h2>Deine Bestellung</h2>
        <ul>
          {" "}
          {itemsInCart.map(({ name, slug, variants }) => (
            <CheckoutItem key={slug} name={name} variants={variants} />
          ))}
          <div className="total">
            <span>Total</span> <span>{numberFormat.format(total)}</span>
          </div>
        </ul>
        <Link href="/submit">
          <a className="confirm">Passt alles</a>
        </Link>
      </StyledCheckout>
    </Layout>
  );
};

export default Checkout;

var numberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

/* -------
 Styles:
------- */

const StyledCheckout = styled.div`
  ul {
    background-color: white;
    padding: 0;
    vertical-align: middle;
    margin-bottom: 10%;

    .total {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      font-size: 1.2rem;
      background-color: var(--bg-color-main-white);
    }
  }

  .confirm {
    border: none;
    background-color: var(--cta-color-main-active);
    color: var(--bg-color-main-white);
    width: 50%;
    height: 4rem;
    margin-left: 25%;
  }
  a {
    align-self: center;
    padding: 1rem 2rem;
    width: 80%;
    border-radius: 3px;
    background-color: var(--cta-color-bag);
    margin: 10%;
  }
`;
