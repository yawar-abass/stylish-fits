"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Context } from "@/store/context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Product = ({ product }) => {
  const ctx = useContext(Context);

  function handleAddToCart(product) {
    // const count = ctx.cart.filter(
    //   (cartProduct) => cartProduct.id === product.id
    // );
    ctx.addToCart(product);
  }

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
      <Sheet className="overflow-y-auto-auto">
        <SheetTrigger asChild>
          <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {ctx.cart?.length <= 0 ? (
              <div>Your cart is currently empty.</div>
            ) : (
              ctx.cart.map((product, id) => {
                return (
                  <div key={product.id} className="flex gap-4">
                    <Image
                      src={product?.image}
                      height={200}
                      width={200}
                      alt={product.title}
                      className="w-32 h-28"
                    />

                    <div>
                      <h5>{product.title}</h5>
                      <p>Price : {product.price}</p>
                      <p>{product.count}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Product;
