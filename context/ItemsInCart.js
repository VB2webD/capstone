import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../utils/useLocalStorage";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useLocalStorageState("shoppingCart", [
    { name: "Brot" },
    { name: "Salami" },
    { name: "Eier" },
  ]);

  // add item++ decrement item --, if (item =+ item)

  const removeItem = (index) => {
    const front = itemsInCart.slice(0, index);
    const back = itemsInCart.slice(index + 1, itemsInCart.length - index + 1);
    setItemsInCart([...front, ...back]);
  };

  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used inside a `CartProvider`");

  return context;
}
