(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJsonV1(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes,
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product1 = createProductToJsonV1('Camisa de playa', new Date(), 12, 'M');

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product2 = createProductToJsonV2('Pantalón de pana', new Date(), 6, 'XL');
  const product3 = createProductToJsonV2('Media canillera', new Date(), 24);

  console.log('Imprimiendo el producto 1', product1);
  console.log('Imprimiendo el producto 2', product2);
  console.log('Imprimiendo el producto 3', product3);

})();
