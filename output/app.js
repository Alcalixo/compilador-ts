"use strict";
let message = "Hello World";
console.log(message);
/*tipo de variable*/
let cantidad = 4;
let dec = [1, true, "verde"];
/*string*/
let saludo = "hola, mundo";
let nombre = "Gonzalo";
let mensaje = `Hola, soy ${nombre}, y soy nuevo en TypeScript`;
console.log(mensaje);
/*number*/
let codigoProducto = 6;
let ivaProducto = 10.5;
/*boolean*/
let estadoProducto = true;
/*void*/
function mensajeUsuario() {
    console.log("Este es un mensaje para tí, usuario");
}
/*enum*/
var color;
(function (color) {
    color[color["Blanco"] = 0] = "Blanco";
    color[color["Rojo"] = 1] = "Rojo";
    color[color["Azul"] = 2] = "Azul";
    color[color["Amarillo"] = 3] = "Amarillo";
})(color || (color = {}));
let colorAuto = color.Azul;
console.log(colorAuto);
var contratos;
(function (contratos) {
    contratos[contratos["Permanente"] = 0] = "Permanente";
    contratos[contratos["Parcial"] = 1] = "Parcial";
    contratos[contratos["Prueba"] = 2] = "Prueba";
})(contratos || (contratos = {}));
let estadoContrato = contratos.Parcial;
console.log(estadoContrato);
/*objetos*/
/*Arreglos/array*/
let list = ["pimiento", "papas", "tomate"];
let rocosos = [true, false, true];
let perdidos = [9, true, "asteroide"];
let diametro = ["saturno", 116460];
/*Genéricos/generics*/
/*Si necesitamos que una función reciba mas de un tipo de variable, pero no cualquier tipo (any) podemos usar genèricos
estos obligan al compilador a respetar el tipo de dato de entrada y de salida (argumento/retorno) */
function identity(arg) {
    return arg;
}
/**object; engloba la mayoría de tipos no primitivos */
let persona = { nombre: "Ana", edad: 28 };
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
function rest2(first, second, ...allOthers) {
    console.log(allOthers);
}
rest2(1, 2, 3, 4, 5);
/**Retorno esperado : 3, 4, 5 */
/**Aserción de Tipo */
let username;
username = "Alcalixo";
let message2 = username.length > 5
    ? `Welcome ${username}`
    : `username is too short`;
console.log("Message ->", message2);
/**Funciones */
/*function calcularIva(productos: Producto[]): [number, number] {
  let total = 0;
  productos.forEach(({ precio }) => {
    total += precio;
  });
  return [total, total * 0.21];
}

class Producto {
  precio: number;
}*/
