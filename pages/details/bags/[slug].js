import React from "react";
import { getBag, getBags } from "../../../utils/data/getData";
import BagDetails from "../../../components/BagDetails";
import Layout from "../../../components/layouts/layout/Layout";

const Details = ({
  data: { _id, name, image, isVegan, contains, variants, purchased, isInStock },
}) => {
  return (
    <Layout title={name.de} hasFooter={true} hasCart>
      <BagDetails
        key={_id}
        name={name.de}
        image={image}
        isVegan={isVegan}
        contains={contains}
        purchased={purchased}
        isInStock={isInStock}
        variants={variants}
      />
    </Layout>
  );
};

export default Details;

/* --------------------------
  provide Server side props:
-------------------------- */

export async function getStaticProps({ params }) {
  const res = await getBag(params.slug);
  const bag = await JSON.parse(JSON.stringify(res));
  return {
    props: { data: bag },
  };
}

export async function getStaticPaths() {
  const res = await getBags();
  const paths = res.map((bag) => {
    return { params: { slug: bag.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
