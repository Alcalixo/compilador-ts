let message: string = "Hello World";
console.log(message);

/*tipo de variable*/
let cantidad: any = 4;
let dec: any[] = [1, true, "verde"];

/*string*/
let saludo: string = "hola, mundo";
let nombre: string = "Gonzalo";
let mensaje: string = `Hola, soy ${nombre}, y soy nuevo en TypeScript`;
console.log(mensaje);

/*number*/
let codigoProducto: number = 6;
let ivaProducto: number = 10.5;

/*boolean*/
let estadoProducto: boolean = true;

/*void*/
function mensajeUsuario(): void {
  console.log("Este es un mensaje para tí, usuario");
}

/*enum*/
enum color {
  Blanco,
  Rojo,
  Azul,
  Amarillo,
}

let colorAuto: color = color.Azul;
console.log(colorAuto);

enum contratos {
  Permanente,
  Parcial,
  Prueba,
}

let estadoContrato: contratos = contratos.Parcial;
console.log(estadoContrato);

/*objetos*/
/*Arreglos/array*/
let list: string[] = ["pimiento", "papas", "tomate"];
let rocosos: boolean[] = [true, false, true];
let perdidos: any[] = [9, true, "asteroide"];
let diametro: [string, number] = ["saturno", 116460];

/*Genéricos/generics*/
/*Si necesitamos que una función reciba mas de un tipo de variable, pero no cualquier tipo (any) podemos usar genèricos
estos obligan al compilador a respetar el tipo de dato de entrada y de salida (argumento/retorno) */
function identity<T>(arg: T): T {
  return arg;
}

/**object; engloba la mayoría de tipos no primitivos */
let persona: object = { nombre: "Ana", edad: 28 };

/**Desestructuración: nos permite acceder a los valores de un array o un object */
var obj = { a: 1, b: 2, c: 3 };
console.log(obj.c);
/**Retorno esperado : 3 */
var array = [1, 2, 3];
console.log(array[2]);
/**Retorno esperado : 3 */

/**Desestructuración con Estructuración */
var array2 = [1, 2, 3, 4, 5];
var [x, y, ...rest] = array2;
console.log(array2);
/**Retorno esperado : [4,5] */

/**Estructuración, permite a una variable array recibir muchos parámetros */
function rest2(first: number, second: number, ...allOthers: number[]) {
  console.log(allOthers);
}
