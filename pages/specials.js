import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Bag from "../components/Bag";
import styled from "styled-components";

const Specials = ({ bags }) => {
  return (
    <>
      <Layout title="Specials" hasFooter>
        <h1>Hello World</h1>
        <StyledList>
          {bags.map(({ slug, image, isVegan, name }) => (
            <Bag key={slug} name={name.de} image={image} isVegan={isVegan} />
          ))}
        </StyledList>
      </Layout>
    </>
  );
};

export default Specials;

/*
-------
Styles:
-------
*/
const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(240px, 1fr));
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`;
/*
--------------------------
provide Server side props:
--------------------------
*/

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3333/bags`);
  const bags = await res.json();

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
