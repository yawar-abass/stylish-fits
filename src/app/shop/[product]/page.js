import { Cart } from "@/components/Shop/Cart";
import { getProduct } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ProductPage = async ({ params }) => {
  const { product: id } = params;

  const product = await getProduct(id);
  const { title, description, price, image } = product;

  return (
    <div className="container flex pt-20 gap-6">
      <div className="m-5">
        <Image src={image} alt={title} height={200} width={400} />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl py-2">{title}</h1>
        <p className="">{description}</p>
        <p>
          Rs: <strong>{price}</strong>
        </p>
        <Cart product={product} />
        {/* <button>Buy Now</button> */}
      </div>
    </div>
  );
};

export default ProductPage;
