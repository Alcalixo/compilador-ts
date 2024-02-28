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

enum contratos{
    Permanente,
    Parcial,
    Prueba
}

let estadoContrato:contratos=contratos.Parcial;
console.log(estadoContrato);