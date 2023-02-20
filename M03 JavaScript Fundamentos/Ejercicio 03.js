/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x === y)return true;
   return false;
}
// console.log(sonIguales(15, 15))//.toBe(true);
// console.log(sonIguales('test', 'test'))//.toBe(true);
// console.log(sonIguales(90, 50))//.toBe(false);

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código://length =>longitud 
   if(str1.length === str2.length)return true;
   return false 
}
// console.log(tienenMismaLongitud('javascript', 'bumfuzzled'))//.toBe(true);
// console.log(tienenMismaLongitud('hi', 'there'))//.toBe(false);

function menosQueNoventa(num) {//ok
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num < 90 )return true;
   return false;
}
// console.log(menosQueNoventa(15))//.toBe(true);
// console.log(menosQueNoventa(90))//.toBe(false);
// console.log(menosQueNoventa(100))//.toBe(false);

function mayorQueCincuenta(num) {//ok
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num > 50)return true;
   return false 
}
// console.log(mayorQueCincuenta(15))//.toBe(false);
// console.log(mayorQueCincuenta(50))//.toBe(false);
// console.log(mayorQueCincuenta(60))//.toBe(true);
// console.log(mayorQueCincuenta(15))//.toBe(false);
// console.log(mayorQueCincuenta(50))//.toBe(false);
// console.log(mayorQueCincuenta(60))//.toBe(true);

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 === 1){
      return false;
   }else { 
       return true;
   }
}
// console.log(esPar(6))//.toBe(true);
// console.log(esPar(0))//.toBe(true);
// console.log(esPar(7))//toBe(false);

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 === 1){
      return true;
   }else{
      return false;
   }
}
// console.log(esImpar(6))//.toBe(false);
// console.log(esImpar(7))//.toBe(true);
// console.log(esImpar(0))//.toBe(false);
// console.log(esImpar(6))//.toBe(false);
// console.log(esImpar(7))//.toBe(true);
// console.log(esImpar(0))//.toBe(false);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
