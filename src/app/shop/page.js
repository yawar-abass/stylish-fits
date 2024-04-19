"use client";

import FilterSiderBar from "@/components/Shop/FilterSiderBar";
import Product from "@/components/Shop/Product";
import { Button } from "@/components/ui/button";
import { getAllProducts, getProductsByCategory } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let temp = true;

    async function getProducts() {
      if (temp) {
        const products = await getAllProducts();
        setProducts(products);
      }
    }

    getProducts();

    // cleanup
    return () => (temp = false);
  }, []);

  async function getCatagoryProducts(category) {
    const products = await getProductsByCategory(category);
    setProducts(products);
  }

  return (
    <div className="flex container flex-col py-20">
      <h1 className="text-4xl text-center pb-10">Our Shop</h1>
      <div className="flex gap-5">
        <div className="w-1/6 p-2">
          <FilterSiderBar updateProducts={getCatagoryProducts} />
        </div>

        <div className="grid grid-cols-3 gap-5 w-3/4 ">
          {products?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
