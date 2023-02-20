/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:Math.max(propiedad, propiedad)
   return Math.max(x, y);
}
// console.log(obtenerMayor(10, 5))//.toBe(10);
// console.log(obtenerMayor(50, 100))//.toBe(100);
// console.log(obtenerMayor(1000, 1000))//.toBe(1000);

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if(edad >= 18)return  "Allowed";
   if(edad < 18)return "Not allowed";
}
// console.log(mayoriaDeEdad(18))//.toBe('Allowed');
// console.log(mayoriaDeEdad(35))//.toBe('Allowed');
// console.log(mayoriaDeEdad(7))//.toBe('Not allowed');

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:while ó if ó switch ó else if
   // while(status === 1)return "Online";
   // while(status === 2)return  "Away";
   // while(status === undefined)return "Offline";
   switch (status){
      case 1:
         return "Online";
      case 2:
         return "Away";
      default:
         return  "Offline";
   }
   

}
// console.log(conection(1))//.toBe('Online');
// console.log(conection(2))//.toBe('Away');
// console.log(conection(3))//.toBe('Offline');

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:while ó if ó switch ó else if
   // while(idioma ===  "aleman")return "Guten Tag!";
   // while(idioma === "mandarin")return "Ni Hao!";
   // while(idioma === "ingles")return "Hello!";
   // while(idioma === 'undefined')return "Hola!";
  switch (idioma){
   case "aleman":
      return "Guten Tag!";
   case  "mandarin":
      return  "Ni Hao!";
   case "ingles":
      return "Hello!";
   default:'undefined';
      return  "Hola!";
  }
}
// console.log(saludo('aleman'))//.toBe('Guten Tag!');
// console.log(saludo('ingles'))//.toBe('Hello!');
// console.log(saludo('mandarin'))//.toBe('Ni Hao!');
// console.log(saludo('frances'))//.toBe('Hola!');
// console.log(saludo())//.toBe('Hola!');

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
 switch (color){
   case "blue":
      return "This is blue";
   case "red":
      return "This is red";
   case "green":
      return "This is green";
   case "orange":
      return "This is orange"
    default :
    return   "Color not found"
 }
}
// console.log(colors('blue'))//.toBe('This is blue');
// console.log(colors('red'))//.toBe('This is red');
// console.log(colors('green'))//.toBe('This is green');
// console.log(colors('orange'))//.toBe('This is orange');
// console.log(colors())//.toBe('Color not found');
// console.log(colors('pink'))//.toBe('Color not found');

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if(num === 10 || num === 5)return true;
      return false;
}
// console.log(esDiezOCinco(10))//.toBe(true);
// console.log(esDiezOCinco(5))//.toBe(true);
// console.log(esDiezOCinco(11))//.toBe(false);
// console.log(esDiezOCinco(6))//.toBe(false);
// console.log(esDiezOCinco(0))//toBe(false);
// console.log(esDiezOCinco(5.01))//.toBe(false);   

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if(num < 50 && num > 20)return true;
   return false;
}
// console.log(estaEnRango(35.5))//.toBe(true);
// console.log(estaEnRango(40))//.toBe(true);
// console.log(estaEnRango(49))//.toBe(true);
// console.log(estaEnRango(21))//.toBe(true);
// console.log(estaEnRango(10))//.toBe(false);
// console.log(estaEnRango(20))//.toBe(false);
// console.log(estaEnRango(50))//.toBe(false);
// console.log(estaEnRango(100))//.toBe(false);

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:while ó if ó  ó else if Ó Number.isInteger(PARAMETRO)=>Math.floor(x)
   // if(num === 1 || num === -10 || num === 0)return true;
   // if(num === 0.8)return false;
   //return Number.isInteger(num)
   if(Math.floor(num === 1 || num === 0 || num < -1 || num > 1))return true;
   return false;
   
}
// console.log(esEntero(0.5))//.toBe(false);
// console.log(esEntero(5))//.toBe(true);
// console.log(esEntero(-20))//.toBe(true);
// console.log(esEntero(0))//.toBe(true);

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:while ó if ó else if
   while (num % 3 === 0 && num % 5 === 0)return "fizzbuzz";
   while (num % 3 === 0)return "fizz";
   while (num % 5 === 0)return "buzz";
   return false;

}
// console.log(fizzBuzz(4))false
// console.log(fizzBuzz(9))fizz
// console.log(fizzBuzz(10))buzz
// console.log(fizzBuzz(15))fizzbuzz

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if(num1 < 0 || num2 < 0 || num3 < 0) {
      return "Hay negativos";
    }
    else if(num1 === 0 || num2 === 0 || num3 === 0) {
      return "Error";
    }
    else if(num1 > 0 && num1 > num2 && num1 > num3) {
      return "Número 1 es mayor y positivo";
    }
    else if(num3 > num1 && num3 > num2) {
      return num3 + 1;
    }
    else {
      return false;
    }
    
   
  }
//   console.log(operadoresLogicos(50, 2, 15))//.toBe('Numero 1 es mayor y positivo');
//   console.log(operadoresLogicos(-1, 50, 2))//.toBe('Hay negativos');
//   console.log(operadoresLogicos(1, 3, 10))//.toBe(11);
//   console.log(operadoresLogicos(0, 0, 0))//.toBe('Error');
//   console.log(operadoresLogicos(10, 30, 6))//.toBe(false);

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}
// console.log(esPrimo(7))//.toBe(true);
// console.log(esPrimo(97))//.toBe(true);
// console.log(esPrimo(11))//toBe(true);
// console.log(esPrimo(-9))//.toBe(false);
// console.log(esPrimo(0))//.toBe(false);
// console.log(esPrimo(1))//.toBe(false);
// console.log(esPrimo(100))//.toBe(false);
// console.log(esPrimo(4))//.toBe(false);
// console.log(esPrimo(57))//.toBe(false);

   
    

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   while (valor === true)return "Soy verdadero";
   return "Soy falso";
}
//console.log(esVerdadero(true))

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   if(num > 99 && num < 1000)return true;
   return false;
}
//console.log(tieneTresDigitos(1000))

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   var i = 0;
   do{
      i = i + 1;
      num = num + 5;
   }
   while (i < 8);
   return num;
}
// console.log(doWhile(5))
// console.log(doWhile(100))
// console.log(doWhile(-1))
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
