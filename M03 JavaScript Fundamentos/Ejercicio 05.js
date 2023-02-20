/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if(num === 0)return false;
   if(num > 0)return "Es positivo";
   if(num < 0)return "Es negativo";
}
// console.log(esPositivo(23))//.toBe('Es positivo');
// console.log(esPositivo(-2))//.toBe('Es negativo');
// console.log(esPositivo(0))//.toBe(false);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:concat(string ) 
    return str + '!';
   
}
// console.log(agregarSimboloExclamacion('hello world'))//.toBe('hello world!');
// console.log(agregarSimboloExclamacion('Soy Henry'))//.toBe('Soy Henry!');

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código://propiedad + ' ' + propiedad
   return nombre + ' ' + apellido;
}
// console.log(combinarNombres('hello', 'world'))//.toBe('hello world');
// console.log(combinarNombres('Soy', 'Henry'))//.toBe('Soy Henry');

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:"string" + " " + nombre + "!"
   return 'Hola ' + nombre + '!';
}
// console.log(obtenerSaludo('Martin'))//.toBe('Hola Martin!');
// console.log(obtenerSaludo('Antonio'))//.toBe('Hola Antonio!');

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:propiedad * propiedad
   return alto * ancho;
}
// console.log(obtenerAreaRectangulo(2, 2))//.toBe(4);
// console.log(obtenerAreaRectangulo(3, 6))//.toBe(18);
// console.log(obtenerAreaRectangulo(0, 2))//.toBe(0);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:propiedad * 4
   return lado * 4;
}
// console.log(retornarPerimetro(2))//toBe(8);
// console.log(retornarPerimetro(8))//.toBe(32);
// console.log(retornarPerimetro(0))//.toBe(0);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:(propiedad * propiedad)/2;
   return (base * altura)/2;
}
// console.log(areaDelTriangulo(10, 5))//.toBe(25);
// console.log(areaDelTriangulo(20, 10))//.toBe(100);
// console.log(areaDelTriangulo(0, 10))//.toBe(0);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:propiedad * 1.2
   return euro * 1.2;
}
// console.log(deEuroAdolar(100))//.toBe(120);
// console.log(deEuroAdolar(200))//.toBe(240);
// console.log(deEuroAdolar(50))//.toBe(60);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal".
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:con while ó if => es igual
   if(letra.length > 1)return "Dato incorrecto";
   if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
      return "Es vocal"
   }
   return "Dato incorrecto";
};
// console.log(esVocal('l'))//.toBe('Dato incorrecto');
// console.log(esVocal('p'))//.toBe('Dato incorrecto');
// console.log(esVocal('a'))//.toBe('Es vocal');
// console.log(esVocal('e'))//.toBe('Es vocal');
// console.log(esVocal('i'))//.toBe('Es vocal');
// console.log(esVocal('o'))//.toBe('Es vocal');
// console.log(esVocal('u'))//.toBe('Es vocal');      
   
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
