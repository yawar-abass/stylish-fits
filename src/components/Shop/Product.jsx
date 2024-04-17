"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
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
          className=""
        />
        <h4 className="pt-4 text-lg">{product.title}</h4>
        <p className="text-green-600 font-bold text-start text-xl">
          ${product.price}
        </p>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button onClick={() => ctx.addToCart(product)}>Add to Cart</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart Products</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
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
