(() => {
  /** Alias */
  type UserID = string | number;
  let userID: UserID;
  userID = 'camiladorado';
  userID = 1110458789;

  /** Literal types */
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  // shirtSize = 'llklsd';


  function greeting(myName: UserID, size: Sizes) {
    if(typeof myName === 'string')
      console.log('Hola ', myName.toUpperCase());
    else
      console.log('Ingresa un nombre válido');
  }

  greeting('Santiago', 'S');
  greeting(909090, 'M');
})();
