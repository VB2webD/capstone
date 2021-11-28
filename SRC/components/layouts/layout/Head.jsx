import React from "react";
import Head from "next/head";

const HtmlHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/candyHeader.ico"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Source+Code+Pro:ital,wght@0,400;0,500;1,500&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default HtmlHead;
