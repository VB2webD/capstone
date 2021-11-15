import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../utils/useLocalStorage";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useLocalStorageState("shoppingCart", [
    { name: "Brot", amount: 1 },
    { name: "Salami", amount: 1 },
    { name: "Eier", amount: 3 },
  ]);

  // add item++ decrement item --, if (item =+ item)

  const removeItem = (index) => {
    const front = itemsInCart.slice(0, index);
    const back = itemsInCart.slice(index + 1, itemsInCart.length - index + 1);
    setItemsInCart([...front, ...back]);
  };

  const addItem = (item) => {
    if (itemsInCart.find((cart) => cart.slug === item.slug)) {
      const index = itemsInCart.findIndex((cart) => cart.slug === item.slug);

      const front = itemsInCart.slice(0, index);

      const back = itemsInCart.slice(index + 1, itemsInCart.length - index + 1);
      setItemsInCart([
        ...front,
        {
          ...itemsInCart[index],
          amount: itemsInCart[index].amount + item.amount,
        },
        ...back,
      ]);
    } else {
      setItemsInCart([...itemsInCart, item]);
    }
  };

  return (
    <CartContext.Provider
      value={{ itemsInCart, setItemsInCart, removeItem, addItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used inside a `CartProvider`");

  return context;
}
