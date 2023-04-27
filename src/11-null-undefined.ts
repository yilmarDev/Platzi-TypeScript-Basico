(() => {
  let myNumber: number | null;
  myNumber = null;
  myNumber = 1500;
  console.log('Imprimiendo myNumber: ', myNumber);

  let myString: string | undefined;
  myString = undefined;
  myString = "Saludos viajero";
  console.log('Imprimiendo myString: ', myString);

  function greetingv1(name: string | undefined) {
    let hello = 'hola ';

    if (name) {
      hello += name.toLowerCase();
    }
    else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function greetingv2(name: string | undefined) {
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  console.log('Llamando a la v1 de greeting');
  greetingv1('Yilmar');
  greetingv1(undefined);

  console.log('Llamando a la v2 de greeting');
  greetingv2('Yilmar');
  greetingv2(undefined);
})();
