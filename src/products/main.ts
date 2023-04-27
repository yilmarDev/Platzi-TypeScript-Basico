import { products, addProduct, calcStock } from "./product.service";

addProduct({
  title: 'Camisa guayabera',
  createAt: new Date(2015, 5, 3),
  stock: 5,
});

addProduct({
  title: 'Pantalón Jeans',
  createAt: new Date(2020, 6, 17),
  stock: 10,
  size: 'M'
});

let currentStock = calcStock();

console.log(products);
console.log(currentStock);

