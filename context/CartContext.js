import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../utils/useLocalStorage";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useLocalStorageState("shoppingCart", [
    {
      name: "Brot",
      slug: "brot",
      variants: [{ variant: "weissbrot", amount: 1 }],
    },
    {
      name: "Salami",
      slug: "salami",
      variants: [{ variant: "saftigeSalami", amount: 3 }],
    },
    {
      name: "Eier",
      slug: "eier",
      variants: [{ variant: "frischeEier", amount: 2 }],
    },
  ]);



  const removeItem = (index) => {
    const front = itemsInCart.slice(0, index);
    const back = itemsInCart.slice(index + 1, itemsInCart.length - index + 1);
    setItemsInCart([...front, ...back]);
  };

  const addItem = (item) => {
    const cartHasItem = checkCartHasItem(item);

    if (cartHasItem) {
      const index = itemsInCart.findIndex((cart) => cart.name === item.name);

      const front = itemsInCart.slice(0, index);

      const back = itemsInCart.slice(index + 1, itemsInCart.length - index + 1);

      const current = itemsInCart[index];

      const hasVariant = getHasVariants(current);

      console.log(hasVariant);
      if (hasVariant) {
        const hasTheSameVariant = getHasSameVariant(current, item);

        if (hasTheSameVariant) {
          const indexOfVariant = getIndexOfVariant(current, item);

          current.variants[indexOfVariant].amount += item.amount;
        } else {
          current.variants.push({ variant: item.variant, amount: item.amount });
        }
      } else {
        current.variants = [{ variant: item.variant, amount: item.amount }];
      }

      setItemsInCart([...front, current, ...back]);
    } else {
      const newItem = {
        name: item.name,
        slug: item.slug,
        variants: [{ variant: item.variant, amount: item.amount }],
      };
      setItemsInCart([...itemsInCart, newItem]);
    }
  };

  return (
    <CartContext.Provider
      value={{ itemsInCart, setItemsInCart, removeItem, addItem }}
    >
      {children}
    </CartContext.Provider>
  );

  //helper functions
  function getHasVariants(current) {
    return current.variants.length > 0;
  }

  function getHasSameVariant(current, item) {
    return current.variants.some((variant) => {
      return variant.variant === item.variant;
    });
  }

  function getIndexOfVariant(current, item) {
    return current.variants.findIndex(
      (variant) => variant.variant === item.variant
    );
  }

  function checkCartHasItem(item) {
    return itemsInCart.some((cart) => cart.name === item.name);
  }
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used inside a `CartProvider`");

  return context;
}
