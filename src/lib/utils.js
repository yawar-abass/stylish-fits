import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function getAllProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((error) => console.log("Can't fetch the Products: ", error.message));
}

export async function getProduct(product) {
  return fetch(`https://fakestoreapi.com/products/${product}`)
    .then((res) => res.json())
    .catch((error) => console.log("Can't fetch the Product: ", error.message));
}

export async function getProductsByCategory(category) {
  if (category.length <= 0) {
    return await getAllProducts();
  }
  return fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .catch((error) =>
      console.log(`Can't fetch the ${category} Products: `, error.message)
    );
}
