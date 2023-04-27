(() => {
  const login = (email: string, password: string) => {
    console.log(email, password);
  };

  // login('yilmar@micorreo.com', 'mypass');

  const loginObj = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }

  loginObj({email: 'ospina.yilmar@micorreo.com', password: 'mypassObj'});

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?:Sizes
  }) => {
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
