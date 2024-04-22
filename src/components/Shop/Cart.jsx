"use client";

import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Context } from "@/store/context";
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
import Image from "next/image";

export function Cart({ product, showCart, className }) {
  const ctx = useContext(Context);
  return (
    <Sheet className={`overflow-y-auto-auto ${className}`}>
      <SheetTrigger asChild>
        {showCart ? (
          <Button>{showCart}</Button>
        ) : (
          <Button onClick={() => ctx.addToCart(product)}>Add to Cart</Button>
        )}
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
  );
}
