import { CartProvider } from "../context/CartContext";
import "../styles/globalStyles.js";
import GlobalStyles from "../styles/globalStyles.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
