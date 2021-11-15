import React from "react";
import Head from "next/head";

const HtmlHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="Fav icon" href="/candyHeader.ico"></link>
    </Head>
  );
};

export default HtmlHead;
