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
