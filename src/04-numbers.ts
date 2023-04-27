(() => {
  let productPrice = 1000;
  productPrice  = 1400;

  let productInStock: number;
  productInStock = 4;
  console.log('Products in stock: ', productInStock);

  if(productInStock > 10) {

  };

  let discount1 = parseInt('1234');
  console.log('Printing discount 1: ', discount1);

  let discount2 = parseFloat('dfgd');
  if(discount2 >= 200) {
    console.log("Apply ");
  }
  else {
    console.log("Not apply");
  }

  // Usando Hexadecimales
  let hex = 0xfff;
  console.log('hex: ', hex);

  // Usando binarios
  let bin = 0b1010;
  console.log('bin: ', bin);

})();
