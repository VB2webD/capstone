import { MongoGridFSChunkError } from "mongodb";
import React from "react";
import Layout from "../components/layout/Layout";

const Shop = () => {
  const mockA = [
    { slug: "zuckerstangen", name: "Zuckerstangen", price: 1.5 },
    { slug: "saure-gurken", name: "Saure Gurken", price: 0.1 },
    { slug: "weingummi", name: "Weingummi", price: 0.05 },
  ];
  return (
    <Layout title="Shop" hasFooter hasCart>
      <h1>Hello World</h1>
      {mockA.map(({ slug, name, price }) => (
        <Item name={name} price={price} key={slug} />
      ))}
    </Layout>
  );
};

export default Shop;
