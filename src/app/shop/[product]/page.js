import React from "react";

const ProductPage = ({ params }) => {
  const { product } = params;

  return <div>{product}</div>;
};

export default ProductPage;
