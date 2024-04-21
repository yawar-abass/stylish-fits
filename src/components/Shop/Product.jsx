// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Cart } from "./Cart";

const Product = ({ product }) => {
  return (
    <div
      key={product.id}
      className="shadow-lg rounded-lg flex items-center justify-center flex-col p-4 py-10 "
    >
      <Link href={`/shop/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={500}
          width={300}
          className="w-auto h-auto"
        />
        <h4 className="pt-4 text-lg">{product.title}</h4>
        <p className="text-green-600 font-bold text-start text-xl">
          ${product.price}
        </p>
      </Link>
      <Cart product={product} />
    </div>
  );
};

export default Product;
