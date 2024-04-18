"use client";
import { createContext, useState } from "react";
import React from "react";

export const Context = createContext({
  cart: [],
});

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    //check if the product existed -> then update the count of that product
    const existedProduct = cart.filter(
      (prevProduct) => prevProduct.id === product.id
    );
    // console.log(cart, existedProduct + "test");
    if (existedProduct.length > 0) {
      const temp = existedProduct[0];
      const prevCount = temp.count;
      setCart((prev) =>
        prev.map((prevProduct) => {
          if (prevProduct.id === temp.id) {
            return { ...prevProduct, count: prevCount + 1 };
          }
          return prevProduct;
        })
      );
      return;
    }

    // if the product isn't in the cart
    const cartProduct = { ...product, count: 1 };
    setCart((prev) => [...prev, cartProduct]);
  }

  function removeProductFromCart(id) {
    setCart((cart) => cart.filter((product) => product.id !== id));
  }

  function getCartProducts() {
    return cart;
  }

  const value = {
    cart,
    addToCart,
    removeProductFromCart,
    getCartProducts,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
