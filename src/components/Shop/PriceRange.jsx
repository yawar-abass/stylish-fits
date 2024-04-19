"use client";
import React, { useState } from "react";

const PriceRange = () => {
  const [value, setValue] = useState(30);
  const handleRangeChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className=" flex space-y-2 flex-col p-2 ">
      <h3 className=" text-lg ">By Price</h3>
      <div>
        {/* <Slider
      defaultValue={[value]}
      min={10}
      max={100}
      step={10}
      onChange={handleRangeChange}
    /> */}

        <input
          type="range"
          min="10"
          max="100"
          step="10"
          value={value}
          onChange={handleRangeChange}
          className="w-full  bg-gradient-to-r from-slate-500 to-slate-700 rounded-full outline-none"
          style={{ color: "black" }}
        />
        <p>Price: {value}</p>
      </div>
    </div>
  );
};

export default PriceRange;
