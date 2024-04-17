"use client";
import { createContext, useState } from "react";
import React from "react";

export const Context = createContext({
  cart: [],
});

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeProductFromCart(id) {
    setCart((cart) => cart.filter((product) => product.id !== id));
  }

  const value = {
    cart,
    addToCart,
    removeProductFromCart,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
