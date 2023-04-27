# Primeros pasos con TypeScript
TypeScript nos permite crear una capa de compilación de código estático a nuestros proyectos de JS.
Esto nos permite enterarnos sobre errores en el código antes de ejecutarlo, incluso en el momento
en que estamos escribiendo el código, esta es una gran ventaja.

Sin embargo, ni node ni los navegadores reconocen TypeScript, así que es necesario hacer un proceso de 
trasnpilación para poder enviar los archivos a ejecutar.

En la sección de comandos se muestran los comandos necesarios.

## Para transpilar los archivos
Transpilación sencilla de un archivo ts
<pre>
  <code>
    npx tsc src/myFle.ts
  </code>
</pre>

Transpilación de un archivo ts especificando la versión de JS a la que se quiere llegar
<pre>
  <code>
    npx tsc src/myFle.ts --target es6
  </code>
</pre>

Transpilación de un archivo ts especificando la versión de JS a la que se quiere llegar
y la carpeta donde se guardará el nuevo archivo js

<pre>
  <code>
    npx tsc src/demo.ts --target es6 --outDir distFolder
  </code>
</pre>

# Archivo TSConfig.json
Es un archivo json que nos permite automatizar la transpilación de los archivos .ts. Para crearlo solo
solo debemos ejecutar el siguiente comando.
<pre>
  <code>
    tsc --init
  </code>
</pre>

Una vez configuramos este archivo solo necesitamos ejecutar el comando base para hacer la transpilación.
<pre>
  <code>
    npx tsc
  </code>
</pre>

Y si queremos que la traspilación se ejecute automáticamente cada vez que guardamos, usamos:
<pre>
  <code>
    npx tsc --watch
  </code>
</pre>

# Tipos de variables en JS y TS
JS tiene un tipado de variables debil, lo que significa que aunque maneja diferentes tipos de variables no es muy estricto con la signación de estas e incluso permite cambiarlas de tipo a lo largo del código. TypeScript ayuda a manejar un tipado más fuerte:

<pre>
  <code>
    // Con JS nativo
    const myVar = 20;

    // Con TypeScript
    const myVar: number = 20;
  </code>
</pre>

> Es muy importante que la asignación de tipo se haga con la palabra completamente en minúsculas, nunca en mayúsculas: number, string, boolean, nunca String, Number o Boolean.

## Motor de inferencia
Este se encarga de interpretar el tipo de las variables la primera vez que son asignadas, aunque no se les establezca un tipo con la sintaxis :tipoDeVariable. Ejemplo:

<pre>
  <code>
    // El motor de inferencia le va a asignar un tipo numérico a la variable myNumber.
    const myNumber = 20;
  </code>
</pre>

# Uso de strings
TS permite usar strings con comillas dobles (""), comillas simples ('') o back tick's (``), aunque cada una tiene particularidades:

- Las comillas dobles permiten añadir comillas simples en su interior sin cerrar la cadena, esto es muy útil para escribir en inglés por el uso del apóstrofe.
- Las comillas simples permiten usar comillas dobles en su interior, esto también puede ser útil en algunos momentos. Muchos equipos de trabajo usan estas comillas por convención.
- Las back tick's permiten hacer interpolación de variables y esto resulta muy útil, aunque fueron incluidas en versiones recientes de JS.

# Arreglos en TS
Los arreglos también pueden ser tipados para almacenar elementos de un solo tipo. Aunque si se le permite asignar el tipo al motor de inferencia y se le asignan varios tipos de valores, el va a permitir que se sigan usando los mismos tipos asignados desde el inicio.

<pre>
  <code>
    // Este arreglo va a permitir números, cadenas y booleanos.
    let prices = [1, 5, 77, 34, 764, 12, 'string', false];
  </code>
</pre>

Esto también se puede hacer de manera explícita:

<pre>
  <code>
    // Este arreglo va a permitir números, cadenas y booleanos.
    let mixedArray: (string | number | boolean ) = [1, 'hola'];
  </code>
</pre>

Aunque inicialmente no se le incluyan booleanos el lo va a permitir en el futuro ya que se expecificó que asi debe ser.

También se pueden agregar elementos de tipo Object si lo declaramos, pero debido a que internamente la mayoria de los datos en JS son de tipo Object, esto disminuye la veracidad del tipado.

# Tipo de datos Any
Es un tipo de datos de TypeScript que permite que una variable contenga cualquier tipo de dato.

La recomendación es que no se debe usar. En muchos proyectos o equipos de trabajo se establece como política el NO USO del tipo de datos any.

Otra opinión es que se puede usar en procesos de migración de JS a TS.

## Cast
Es una forma de establecer de alguna forma las ayudas para el manejo de una variable declarada como any.

<pre>
  <code>
    let myDinamicVar:any = 100;
    myDinamicVar = 'Hola';

    const rta = (myDinamicVar as string).toLowerCase();
  </code>
</pre>

Otra sintaxis para lograr el mismo resultado con el cast sería:

<pre>
  <code>
    let myDinamicVar:any = 100;
    myDinamicVar = 'Hola';

    const rta = (<string>myDinamicVar).toUpperCase();
  </code>
</pre>

# Union types
Permiten unir o combinar 2 o más tipos de datos dentro de la misma variable, esto significa que una varibale puede tomar valores de 2 o más tipos que especifiquemos.

<pre>
  <code>
    
    let myVar: string | number;
    myVar = 'hola';
    myVar = 455;
  </code>
</pre>

# Alias type
Permiten crear tipos de datos personalizados con la unión de varios tipos de datos.

Se recomienda nombrarlos en PascalCase, es decir que la primera letra va en mayúsculas.
<pre>
  <code>
    type UserID = string | number;
    let userID: UserID;

    function greeting(myName: UserID) {
      if(typeof myName === 'string')
        console.log('Hola ', myName.toUpperCase());
      else
        console.log('Ingresa un nombre válido');
    }

    greeting('Santiago');
    greeting(909090);
  </code>
</pre>

# Literal types
Permiten crear un conjunto acotado de opciones de un tipo de dato en particulad, es decir un subconjunto del conjunto completo de opciones que comprende un tipo de datos.

<pre>
  <code>
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'S';
    shirtSize = 'M';
  </code>
</pre>

# Null y Undefined
Null y undefined son tipos de datos, del mismo modo que number o string lo son, además son diferentes entre si, una varibale de tipo undefined es distinta de una variable de tipo null.

Sería muy extraño declarar una variable como null o undefined ya que esto no permitiría que en el futuro guarde un valor diferente y le quitaría todo el sentido, sin embargo, puedene existir situaciones en las que queramos declarar null dentro de un union type, como en el ejemplo:

<pre>
  <code>
    let myVar: number | null;
    myVar = null;
    myVar = 1500;
  </code>
</pre>

También podemos usarlos dentro de los Union types para hacer validaciones, sobre todo en el front, donde es más probable que recibamos variables con valor null mientras se cargan las páginas.

<pre>
  <code>
    function greetingv1(name: string | undefined) {
      let hello = 'hola ';

      if (name) {
        hello += name.toLowerCase();
      }
      else {
        hello += 'nobody';
      }
      console.log(hello);

      console.log('Llamando a la v1 de greeting');
      greetingv1('Yilmar');
      greetingv1(undefined);
    }
  </code>
</pre>

## Optional chaining
Esta misma función podría reescribirse usando optional chaining
<pre>
  <code>
    function greetingv2(name: string | undefined) {
      let hello = 'hola ';
      hello += name?.toLowerCase() || 'nobody';
      console.log(hello);
    }

    console.log('Llamando a la v2 de greeting');
    greetingv2('Yilmar');
    greetingv2(undefined);
  </code>
</pre>

Más información sobre Optional Chaining en la [documentación de Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).

# Funciones
Las funcionas en TS se comportan del mismo modo que en JS, solo que usan las bondades de TS para validar y optimizar el manejo de las variables y los parámetos.

Se recomienda usar array functions ya que tienen mejor compatibilidad con los entornos actuales.
<pre>
  <code>
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
  </code>
</pre>

El signo de interrogación al final del nombre del parámtero "size?: Sizes," permite establecerlo como opcional. Si no se recibe en el llamado a la función este será undefined.

## Retorno de las funciones
A las funciones tambien es posible especificarle el tipo de valor que van a retornar, eso es logra especificando dicho tipo despues de los paréntesis que reciben los parámetros.

<pre>
  <code>
    const calcTotalV1 = (prices: number[]): string => {
      return prices.reduce((a, b) => a + b ).toString();
    }
  </code>
</pre>

Para el caso de las funciones que no tienen un return, es decir que no retornan nada, el tipo de dato por defecto será void.

<pre>
  <code>
    const calcTotalV2 = (prices: number[]): void => {
      console.log(prices.reduce((a, b) => a + b ).toString());
    }
  </code>
</pre>

# Objetos como parámetros
Cuando tenemos muchos valores que pasar dentro de una función puede volverse muy difícil manejarlas como variables independientes, por eso es muy útil pasar objetos como parámetros.

<pre>
  <code>
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
  </code>
</pre>

# Módulos
Los módulos son una excelente forma de distribuir el código por funcionalidad para hacerlo más eficiente y ordenado.

<pre>
  <code>
    // modelo
    export type Sizes = 'S' | 'M' | 'L' | 'XL';

    export type Product = {
      title: string,
      createAt: Date,
      stock: number,
      size?:Sizes
    }
  </code>
</pre>

<pre>
  <code>
    //Servicio
    import { Product } from "./product.model";

    export const products: Product[] = [];

    export const addProduct = (data: Product) => {
      products.push(data);
    };

    export const calcStock = (): number => {
      // return products.reduce((a, b) => (a.stock + b.stock));
      let total = 0;
      products.forEach((item) => {
        total = total + item.stock;
      });

      return total;
    };
  </code>
</pre>

<pre>
  <code>
    // Main
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
  </code>
</pre>
