import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function getProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((error) => console.log("Can't fetch the Product: ", error.message));
}
