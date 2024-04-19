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
    const existingProduct = cart.find(
      (prevProduct) => prevProduct.id === product.id
    );
    if (existingProduct) {
      setCart((prevProducts) =>
        prevProducts.map((prevProduct) => {
          if (prevProduct.id === existingProduct.id) {
            return { ...prevProduct, count: prevProduct.count + 1 };
          }
          return prevProduct;
        })
      );
    } else {
      // If the product doesn't exist in the cart, add it with count 1
      setCart((prevProducts) => [...prevProducts, { ...product, count: 1 }]);
    }
  }

  function removeProductFromCart(id) {
    setCart((cart) => cart.filter((product) => product.id !== id));
  }

  function decrementProduct(product) {
    if (cart.length <= 0) {
      return "Cart is Empty";
    }
    const existingProduct = cart.find(
      (prevProduct) => prevProduct.id === product.id
    );

    if (existingProduct) {
      if (existingProduct.count == 1) {
        removeProductFromCart(existingProduct.id);
      } else {
        setCart((prevProducts) =>
          prevProducts.map((prevProduct) => {
            if (prevProduct.id === existingProduct.id) {
              return { ...prevProduct, count: prevProduct.count - 1 };
            }
            return prevProduct;
          })
        );
      }
    }
  }

  function getCartProducts() {
    return cart;
  }

  const value = {
    cart,
    addToCart,
    removeProductFromCart,
    getCartProducts,
    decrementProduct,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
