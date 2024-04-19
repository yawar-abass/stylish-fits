"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Context } from "@/store/context";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Product = ({ product }) => {
  const ctx = useContext(Context);

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
          <Button onClick={() => ctx.addToCart(product)}>Add to Cart</Button>
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
                  <div
                    key={product.id}
                    className="flex gap-4 border-b-2 border-dashed pb-2 border-gray-200"
                  >
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
                      <p>
                        <span
                          onClick={() => ctx.decrementProduct(product)}
                          className="cursor-pointer hover:text-slate-900 text-xl font-semibold"
                        >
                          {" "}
                          -{" "}
                        </span>
                        {product.count}{" "}
                        <span
                          onClick={() => ctx.addToCart(product)}
                          className="cursor-pointer hover:text-slate-900 text-xl font-semibold"
                        >
                          +
                        </span>
                      </p>
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
