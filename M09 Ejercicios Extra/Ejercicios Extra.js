/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];
   for(prop in objeto){
    array.push([prop, objeto[prop]])
   };
   return array;
}
// console.log(deObjetoAarray({ x: 1, y: 2 }))//.toEqual([['x', 1],['y', 2],]);
// console.log(deObjetoAarray({ x: 10, y: 25 }))//.toEqual([['x', 10],['y', 25],]);

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let result={}; //Objeto que guardará el resultado

    for(let i=0; i<string.length; i++){
        if (result[string[i]]){ //Existe la propiedad???
            result[string[i]]++; //Si existe, le sumamos 1
        }
        else{ //No existe. La creamos con valor 1
            result[string[i]]=1; 
        }
    }
    return result;
}
console.log(numberOfCharacters('sktpwrroqstkrpwwsqtqopwktsd'))/*.toEqual({
   s: 4,
   k: 3,
   t: 4,
   p: 3,
   w: 4,
   r: 3,
   o: 2,
   q: 3,
   d: 1,
});*/
console.log(numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda'))/*.toEqual({
   a: 5,
   b: 2,
   c: 2,
   d: 4,
   f: 4,
   h: 1,
   j: 4,
   s: 5,
});*/

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayuscula = '';
  var minuscula = '';
  for (i = 0; i<string.length; i++){ 
     if(string[i] === string[i].toUpperCase()){ 
          mayuscula = mayuscula + string[i]; 
       }
   else {
          minuscula = minuscula + string[i];
        } 
   }       
  return (mayuscula + minuscula) 
}  
// console.log(capToFront('soyHENRY'))//.toEqual('HENRYsoy');
// console.log(capToFront('DESArrollaDOR'))//.toEqual('DESADORrrolla');

   
   

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let strProv = frase.split('').reverse().join('');
  return strProv.split(' ').reverse().join(' ');
}
// console.log(asAmirror('I love you so much!'))//.toBe('I evol uoy os !hcum');
// console.log(asAmirror('The Henry Challenge is close!'))//.toBe('ehT yrneH egnellahC si !esolc');

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var alReves = numero.toString().split("").reverse().join(``);
   alReves = parseInt(alReves);
   if(numero === alReves){
      return "Es capicua";
   }
   return  "No es capicua";
}
// console.log(capicua(12321))//.toEqual('Es capicua');
// console.log(capicua(1111))//.toEqual('Es capicua');
// console.log(capicua(105217))//.toEqual('No es capicua');
// console.log(capicua(7878700))//.toEqual('No es capicua');

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   nuevaCadena = string.split("").filter(x => x !== 'a' && x !== 'b' && x !== 'c');
   return  nuevaCadena.join("");
}
// console.log(deleteAbc('abcefgh'))//.toEqual('efgh');
// console.log(deleteAbc('abc'))//.toEqual('');
// console.log(deleteAbc('plural'))//toEqual('plurl');
// console.log(deleteAbc('limon'))//.toEqual('limon');

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a, b){
      return a.length -b.length
   });
}
//console.log(sortArray(['You', 'are', 'beautiful', 'looking']))//.toEqual([
//    'You',
//    'are',
//    'looking',
//    'beautiful',
// ]);
//console.log(sortArray(['pera', 'manzana', 'alcaucil', 'papa']))//.toEqual([
//    'pera',
//    'papa',
//    'manzana',
//    'alcaucil',
// ]);
function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   //return array1.filter(el => array2.includes(el));
   const coincidentes = [];
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          coincidentes.push(array1[i]);
          break;  // salgo del bucle, no necesito seguir buscando
        }
      }
    }
    return coincidentes;
   
}
// console.log(buscoInterseccion([1, 2, 3], [1, 5, 8, 3]))//.toEqual([1, 3]);
// console.log(buscoInterseccion([7, 23, 4], [23, 70]))//.toEqual([23]);
// console.log(buscoInterseccion([1, 20, 3], [22, 5, 7]))//.toEqual([]);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
