import React from "react";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout title={"Index"} isVisible={true}>
      <h1>Hello World</h1>
    </Layout>
  );
}
