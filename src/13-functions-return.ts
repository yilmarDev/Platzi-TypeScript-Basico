(() => {
  const calcTotal = (prices: number[]): string => {
    return prices.reduce((a, b) => a + b ).toString();
  }
  console.log('Probando el return ', calcTotal([1,45,67,23,67]) );

  const calcTotalV2 = (prices: number[]): void => {
    console.log(prices.reduce((a, b) => a + b ).toString());
  }
  calcTotalV2([1,45,67,23,58,89,43]);
})();
