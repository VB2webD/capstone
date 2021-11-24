import React from "react";
import Layout from "../SRC/components/layouts/layout/Layout";
import { useCart } from "../context/CartContext";
import CheckoutItem from "../SRC/components/CheckoutItem";
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
          {/* checkoutItems */}
          {itemsInCart.map(({ name, slug, variants }) => (
            <CheckoutItem key={slug} name={name} variants={variants} />
          ))}
          <div className="total">Total {numberFormat.format(total)}</div>
        </ul>
        <Link href="/submit" prefetch>
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
`;
