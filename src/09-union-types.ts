(() => {
  let myVar: string | number;
    myVar = 'hola';
    // myVar = 455;
    console.log(myVar);


    function greeting(myName: string | number) {
      if(typeof myName === 'string')
        console.log('Hola ', myName.toUpperCase());
      else
        console.log('Ingresa un nombre válido');
    }

    greeting('Santiago');
    greeting(8498394839);

})();
