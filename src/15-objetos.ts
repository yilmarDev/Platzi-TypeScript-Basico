(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?:Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Camisa guayabera',
    createAt: new Date(2015, 5, 3),
    stock: 35,
  });

  addProduct({
    title: 'Pantalón Jeans',
    createAt: new Date(2020, 6, 17),
    stock: 12,
    size: 'M'
  });

  console.log(products);
})();
