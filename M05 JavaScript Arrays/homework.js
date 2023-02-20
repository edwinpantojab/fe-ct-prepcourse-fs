/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
// console.log(devolverPrimerElemento([10, 10, 16, 12]))//.toBe(10)
// console.log(devolverPrimerElemento([97, 100, 80, 55, 72, 94]))//.toBe(97);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1]
}
// console.log(devolverUltimoElemento([10, 10, 16, 12]))//.toBe(12);
// console.log(devolverUltimoElemento([97, 100, 80, 55, 72, 94]))//.toBe(94);
// console.log(devolverUltimoElemento(['hi','there','how','are','you','doing?']))//.toBe('doing?');

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
// console.log(obtenerLargoDelArray([10, 10, 16, 12]))//.toBe(4);
// console.log(obtenerLargoDelArray([97, 100, 80, 55, 72, 94]))//.toBe(6);
// console.log(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?']))//.toBe(6);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for(let i = 0; i < array.length; i++){
      array[i] = array[i] * 5;
   }
   return array;
}
// console.log(incrementarPorUno([10, 10, 16, 12]))//.toEqual([11, 11, 17, 13]);
// console.log(incrementarPorUno([97, 100, 80, 55, 72, 94]))//.toEqual([98, 101, 81, 56, 73, 95,]);
// console.log(incrementarPorUno([]))//.toEqual([]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
// console.log(agregarItemAlFinalDelArray([10, 10, 16, 12], 10))//.toEqual([10, 10, 16, 12, 10,]);
// console.log(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola'))//.toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
// console.log(agregarItemAlFinalDelArray([], true))//.toEqual([true]);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
// console.log(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10))//.toEqual([10, 10, 16, 12, 10,]);
// console.log(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], 'Hola'))//.toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
// console.log(agregarItemAlComienzoDelArray([], true))//.toEqual([true]);

 function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
}
// console.log(dePalabrasAFrase(['Henry', 'JavaScript', 'Class']))//.toBe('Henry JavaScript Class');
// console.log(dePalabrasAFrase(['Henry']))//.toBe('Henry');


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for(let i = 0;i < array.length; i++){
      if(array[i] === elemento)return true;
   }
   return false;
}
// console.log(arrayContiene([10, 10, 16, 12], 10))//.toBe(true);
// console.log(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola'))//.toBe(false);
// console.log(arrayContiene([], true))//.toBe(false);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;//si cambio el valor de cero s elo aumenta a la suma de numeros del array
   for(var i = 0; i < arrayOfNums.length; i++){
   suma = suma + arrayOfNums[i];
   }
   return suma;
}
// console.log(agregarNumeros([10, 10, 16]))//.toBe(36);
// console.log(agregarNumeros([97, 100]))//.toBe(197);
// console.log(agregarNumeros([0, 0, 0]))//.toBe(0);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   for(var i = 0; i < resultadosTest.length; i++){//no es necesario usar
   return agregarNumeros(resultadosTest) / resultadosTest.length;

   }
}
// console.log(promedioResultadosTest([10, 10, 16, 12]))//.toBe(12);
// console.log(promedioResultadosTest([97, 100, 80, 55, 72, 94]))//.toBe(83);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var grande = arrayOfNums[0];
   for(var i = 0; i < arrayOfNums.length; i++){
   if(arrayOfNums[i] > grande)
   grande = arrayOfNums[i];
}
return grande;
}
// console.log(numeroMasGrande([10, 10, 16, 12]))//.toBe(16);
// console.log(numeroMasGrande([97, 100, 80, 55, 72, 94]))//.toBe(100);
// console.log(numeroMasGrande([97, 10000, 80, 55, 7.2, -94]))//.toBe(10000);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length < 1)return 0;
   var total = 1;
   for(var i = 0; i <arguments.length; i++){
      total = total * arguments[i];
   }
   return total;
}
// console.log(multiplicarArgumentos(5, 5));// expect(product).toBe(25);
// console.log(multiplicarArgumentos());//expect(product2).toBe(0);
// console.log(multiplicarArgumentos(3, 3, 3, 3));//expect(product3).toBe(81);
// console.log(multiplicarArgumentos(1));//expect(product4).toBe(1);
// console.log(multiplicarArgumentos(10, 0, 10));//expect(product5).toBe(0);//cuando salen los puntos debajo de las letras es porque esta mal escrito 

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
   for(var i = 0; i < array.length; i++){
      if(array[i] > 18)
      contador ++;
   }
   return contador;
}
// console.log(cuentoElementos([10, 10, 18, 21]))//.toBe(1);
// console.log(cuentoElementos([97, 100, 190, 5, 7, 9]))//.toBe(3);
// console.log(cuentoElementos([97, 20, 90, 50, 7, 709]))//.toBe(5);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7)return "Es fin de semana";
   return "Es dia laboral";
}
// console.log(diaDeLaSemana(3))//.toBe('Es dia laboral');
// console.log(diaDeLaSemana(2))//.toBe('Es dia laboral');
// console.log(diaDeLaSemana(1))//.toBe('Es fin de semana');
// console.log(diaDeLaSemana(7))//.toBe('Es fin de semana');

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numero = num.toString()
  if(numero.charAt(0) === "9"){
    return true
  }
  return false
}
// console.log(empiezaConNueve(98))//.toBe(true);
// console.log(empiezaConNueve(9))//.toBe(true);
// console.log(empiezaConNueve(2))//.toBe(false);
// console.log(empiezaConNueve(7))//.toBe(false);
// console.log(empiezaConNueve(-5))//.toBe(false); 

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (var i =0 ; i < array.length - 1; i++) {
      if(array[i] !== array[i+1]){
        return false
      }
    }
    return true
}
// console.log(todosIguales([20, 20, 20, 20]))//.toBe(true);
// console.log(todosIguales([230, 230, 230, 230]))//.toBe(true);
// console.log(todosIguales([97, 100, 190, 9]))//.toBe(false);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArray = [];
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return nuevoArray;
  }
}
// console.log(mesesDelAño(['Marzo', 'Noviembre', 'Enero']))//.toEqual(['Marzo', 'Noviembre', 'Enero']);
// console.log(mesesDelAño('No se encontraron los meses pedidos'))//.toEqual('No se encontraron los meses pedidos');

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let arrayTablaDelSeis = [];
      for (let i = 0; i < 11; i++){
        arrayTablaDelSeis.push (6 * i);
      }
      return arrayTablaDelSeis;
}
//console.log(tablaDelSeis())//.toEqual([0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60,]);



function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var integers = [];
   for (let i = 0; i < array.length; i++){
      if(array[i] > 100){
         integers.push(array[i])
   }
   
   }
   return integers;
}
// var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
// console.log(mayorACien(integers))//.toEqual([200, 120, 160, 148]);
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [];
   var suma = num;
   for(var i= 0; i<10; i++) {
     suma = suma + 2;
     if(suma === i) break;
     else {
       array.push(suma);
     }
   }
   if(i < 10) {
     return 'Se interrumpió la ejecución';
   }
   else {
       return array;
   }
}
// console.log(breakStatement(50))//.toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70,]);
// console.log(breakStatement(-4))//.toEqual('Se interrumpió la ejecución');
      
function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
  var suma = num;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}
// console.log(continueStatement(50))//.toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68,]);
// console.log(continueStatement(-4))//.toEqual([-2, 0, 2, 4, 6, 8, 10, 12, 14]);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
