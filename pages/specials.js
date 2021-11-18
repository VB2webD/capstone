import React, { useState } from "react";
import Layout from "../components/layouts/layout/Layout";
import Bag from "../components/Bag";
import styled from "styled-components";
import { getBags } from "../utils/data/getData";

const Specials = ({ bags }) => {
  return (
    <>
      <Layout title="Specials" hasFooter hasCart>
        <h1>Vertige Mischungen</h1>
        <StyledList>
          {bags.map(({ slug, image, isVegan, name, variants }) => (
            <Bag
              key={slug}
              name={name.de}
              image={image}
              isVegan={isVegan}
              variants={variants}
            />
          ))}
        </StyledList>
      </Layout>
    </>
  );
};

export default Specials;

/* -------
 Styles:
------- */

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;

  h1 {
    text-align: center;
  }
`;

/* --------------------------
  provide Server side props:
-------------------------- */

export async function getStaticProps() {
  const res = await getBags();
  const bags = await JSON.parse(JSON.stringify(res));
  if (!bags) {
    console.log("failed to fetch Bag Data");
    return {
      notFound: true,
    };
  }

  return {
    props: { bags },
  };
}
