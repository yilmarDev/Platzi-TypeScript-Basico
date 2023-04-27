(() => {
  let isEnable = true;
  isEnable = false;

  const random = Math.random();
  console.log('Random es ', random);

  const isBigger = random > 0.5 ? true : false;
  console.log('Is bigger: ', isBigger);


})();
