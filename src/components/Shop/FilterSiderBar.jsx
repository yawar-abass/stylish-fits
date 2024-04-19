"use client";

import React, { useState } from "react";
import PriceRange from "./PriceRange";

const FilterSiderBar = ({ updateProducts }) => {
  const [selectedCategory, setSelectedCatagory] = useState("");

  const handleSelection = (e) => {
    setSelectedCatagory(e.target.value);
    // lifting state up
    updateProducts(e.target.value);
  };

  console.log(selectedCategory);

  return (
    <>
      <h2 className="text-2xl font-semibold">Filter:</h2>
      <div className=" w-auto p-2  ">
        <h3 className="pb-2 text-lg ">By Category</h3>
        <div className="space-y-2 font-light">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="mens"
              name="category"
              value="men's clothing"
              className=""
              checked={selectedCategory == "men's clothing"}
              onChange={handleSelection}
            />
            <label htmlFor="mens" className="text-sm font-medium leading-none">
              Men&apos;s
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="womens"
              name="category"
              value="women's clothing"
              checked={selectedCategory === "women's clothing"}
              onChange={handleSelection}
            />
            <label
              htmlFor="womens"
              className="text-sm font-medium leading-none"
            >
              Women&apos;s
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="jewelery"
              name="category"
              value="jewelery"
              checked={selectedCategory === "jewelery"}
              onChange={handleSelection}
            />
            <label
              htmlFor="jewelery"
              className="text-sm font-medium leading-none"
            >
              Jewelry&apos;s
            </label>
          </div>
        </div>
      </div>
      <PriceRange />
    </>
  );
};

export default FilterSiderBar;
