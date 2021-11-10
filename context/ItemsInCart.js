import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([
    { name: "Brot" },
    { name: "Salami" },
    { name: "Eier" },
  ]);

  return (
    <CartContext.Provider
      value={[
        itemsInCart,
        setItemsInCart,
      ]}
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
