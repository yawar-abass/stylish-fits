import Product from "@/components/Shop/Product";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Shop = async () => {
  const products = await getProducts();
  return (
    <div className="flex container flex-col py-20">
      <h1 className="text-4xl text-center pb-10">Our Shop</h1>
      <div className="grid grid-cols-3 gap-5 ">
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
