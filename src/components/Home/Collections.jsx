import Image from "next/image";
import React from "react";

const Collections = () => {
  return (
    <div className="container py-10 px-1">
      <h2 className="text-3xl text-center pb-4">SHOP OUR COLLECTIONS</h2>
      <div className="flex  gap-4 ">
        <div
          className="h-[500px] w-1/4 flex items-center justify-center"
          style={{ backgroundImage: "url(/assets/images/collections/c2.jpg)" }}
        >
          <span className="text-white text-xl uppercase">Women&apso;s</span>
        </div>
        <div
          className="h-[500px] w-1/4 flex items-center justify-center"
          style={{
            backgroundImage: "url(/assets/images/collections/mens.jpg)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <span className="text-white text-xl uppercase">Men&apos;s</span>
        </div>
        <div
          className="h-[500px] w-1/4 flex items-center justify-center"
          style={{
            backgroundImage: "url(/assets/images/collections/electronics.jpg)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <span className="text-white text-xl uppercase">Electronics</span>
        </div>
        <div
          className="h-[500px] w-1/4 flex items-center justify-center"
          style={{
            backgroundImage: "url(/assets/images/collections/jewelery.jpg)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <span className="text-white text-xl uppercase">Jewelery</span>
        </div>
      </div>
    </div>
  );
};

export default Collections;
