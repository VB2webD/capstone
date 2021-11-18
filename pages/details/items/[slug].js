import React from "react";
import { getItem, getItems } from "../../../utils/data/getData";
import ItemDetails from "../../../components/ItemDetails";
import Layout from "../../../components/layouts/layout/Layout";

const Details = ({
  data: {
    _id,
    name,
    description,
    image,
    weight,
    price,
    isVegan,
    isInStock,
    minimum,
    options,
  },
}) => {
  return (
    <Layout title={name.de} hasFooter={false} hasCart>
      <ItemDetails
        key={_id}
        name={name.de}
        description={description}
        image={image.big}
        weight={weight}
        price={price}
        isVegan={isVegan}
        isInStock={isInStock}
        minimum={minimum}
        options={options}
      />
    </Layout>
  );
};

export default Details;

/* --------------------------
  provide Server side props:
-------------------------- */

export async function getStaticProps({ params }) {
  const res = await getItem(params.slug);
  const item = await JSON.parse(JSON.stringify(res));
  return {
    props: { data: item },
  };
}

export async function getStaticPaths() {
  const res = await getItems();
  const paths = res.map((item) => {
    return { params: { slug: item.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}
