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
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let fetchProducts = true;
    async function getProducts() {
      if (fetchProducts) {
        const products = await getAllProducts();
        setProducts(products);
        setFilteredProducts(products);
      }
    }

    getProducts();

    // cleanup
    return () => (fetchProducts = false);
  }, []);

  async function filterProductsByCategory(category) {
    const products = await getProductsByCategory(category);
    setProducts(products);
    setFilteredProducts(products);
  }

  function filterProductsByPrice(price) {
    const filteredProducts = products.filter(
      (product) => Math.floor(product.price) <= price
    );
    setFilteredProducts(filteredProducts);
  }

  console.log(products);

  return (
    <div className="flex container flex-col py-20">
      <h1 className="text-4xl text-center pb-10">Our Shop</h1>
      <div className="flex gap-5">
        <div className="w-1/6 p-2">
          <FilterSiderBar
            filterProductsByCategory={filterProductsByCategory}
            filterProductsByPrice={filterProductsByPrice}
          />
        </div>

        <div className="grid grid-cols-3 gap-5 w-3/4 ">
          {products?.length <= 0 ? (
            <p>Loading Products...</p>
          ) : filteredProducts.length <= 0 ? (
            <p>No Products in Stock</p>
          ) : (
            filteredProducts?.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
