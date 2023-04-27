import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  // return products.reduce((a, b) => (a.stock + b.stock));
  let total = 0;
  products.forEach((item) => {
    total = total + item.stock;
  });

  return total;
};
