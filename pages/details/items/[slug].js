import React from "react";
import { useRouter } from "next/router";
import { getItem, getItems } from "../../../utils/data/getData";
import ItemDetails from "../../../components/ItemDetails";
import Layout from "../../../components/layout/Layout";

const Details = ({ data }) => {
  return (
    <Layout title={data.name.de} hasFooter={false}>
      <ItemDetails
        key={data._id}
        name={data.name.de}
        description={data.description}
        image={data.image.big}
        weight={data.weight}
        price={data.price}
        isVegan={data.isVegan}
        isInStock={data.isInStock}
        minimum={data.minimum}
      />
    </Layout>
  );
};

export default Details;

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
