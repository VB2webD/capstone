import React from "react";
import Layout from "../SRC/components/layouts/layout/Layout";

export default function Home() {
  return (
    <Layout title="Bestellung" hasFooter hasCart>
      <h1>Deine Angaben</h1>
      <button>Kaufen</button>
    </Layout>
  );
}