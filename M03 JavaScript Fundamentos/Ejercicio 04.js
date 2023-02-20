/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código://uso el metodo  Math.pow(propiedad, 2)
  return Math.pow(num,2) 
}
// console.log(elevarAlCuadrado(6))//.toBe(36);
// console.log(elevarAlCuadrado(7))//.toBe(49);
// console.log(elevarAlCuadrado(0))//.toBe(0);
// console.log(elevarAlCuadrado(-5))//.toBe(25);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código://uso el metodo  Math.pow(propiedad, 3)
   return  Math.pow(num, 3);
}
// console.log(elevarAlCubo(3))//.toBe(27);
// console.log(elevarAlCubo(0))//.toBe(0);
// console.log(elevarAlCubo(-5))//.toBe(-125);

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código://uso el metodo  Math.pow(propiedad, exponent)
   return  Math.pow(num, exponent);
}
// console.log(elevar(2, 2))//.toBe(4);
// console.log(elevar(2, 3))//.toBe(8);
// console.log(elevar(0, 5))//.toBe(0);
// console.log(elevar(10, 1))//.toBe(10);

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código://uso el metodo  Math.round(propiedad)
   return Math.round(num);
}
// console.log(redondearNumero(1.5))//.toBe(2);
// console.log(redondearNumero(2))//.toBe(2);
// console.log(redondearNumero(0.1))//.toBe(0);

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código://uso el metodo  Math.ceil(propiedad)
   return Math.ceil(num)
}
// console.log(redondearHaciaArriba(1.5))//.toBe(2);
// console.log(redondearHaciaArriba(2))//.toBe(2);
// console.log(redondearHaciaArriba(0.1))//.toBe(1);

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código://uso el metodo  Math.random()
   return Math.random();
}
// console.log(typeof numeroRandom())//.toBe('number');
// console.log(numeroRandom())//.toBeGreaterThanOrEqual(0);
// console.log(numeroRandom())//.toBeLessThan(1);
// console.log(numeroRandom())//.not.toBe(numeroRandom());

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
