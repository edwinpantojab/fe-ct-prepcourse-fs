/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
//console.log(devolverString('Henry'))//.toBe('Henry');

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return x + y;
}
// console.log(suma(5, 5))//.toBe(10);
// console.log(suma(-1, 5))//.toBe(4);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y;
}
// console.log(resta(5, 5))//.toBe(0);
// console.log(resta(-1, 5))//.toBe(-6);
// console.log(resta(5, -5))//.toBe(10);
// console.log(resta(0, 0))//.toBe(0);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y;
}
// console.log(divide(5, 5))//.toBe(1);
// console.log(divide(10, 5))//.toBe(2);
// console.log(divide(11, 2))//.toBe(5.5);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
// console.log(multiplica(5, 5))//.toBe(25);
// console.log(multiplica(10, -5))//.toBe(-50);
// console.log(multiplica(11, 0))//.toBe(0);

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   
   return x % y;
}
// console.log(obtenerResto(15, 5))//.toBe(0);
// console.log(obtenerResto(21, 5))//.toBe(1);
// console.log(obtenerResto(22, 5))//.toBe(2);
   
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
