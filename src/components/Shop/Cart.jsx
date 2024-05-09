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
import { MdOutlineShoppingBag } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementProduct } from "@/lib/features/cart";

export function Cart({ product, showCart, className }) {
  // const ctx = useContext(Context);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const router = useRouter();

  return (
    <Sheet className={`overflow-y-auto-auto ${className}`}>
      <SheetTrigger asChild>
        {showCart ? (
          showCart === "icon" ? (
            <MdOutlineShoppingBag className="cursor-pointer" size="26px" />
          ) : (
            <Button>showCart</Button>
          )
        ) : (
          <Button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {cartItems?.length <= 0 ? (
            <div>Your cart is currently empty.</div>
          ) : (
            cartItems.map((product, id) => {
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
                        onClick={() => dispatch(decrementProduct(product))}
                        className="cursor-pointer hover:text-slate-900 text-xl font-semibold"
                      >
                        {" "}
                        -{" "}
                      </span>
                      {product.count}{" "}
                      <span
                        onClick={() => dispatch(addToCart(product))}
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
            <Button disabled={cartItems.length <= 0 ? true : false}>
              Checkout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
