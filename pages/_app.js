import "../styles/globalStyles.js";
import GlobalStyles from "../styles/globalStyles.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
