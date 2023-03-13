/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
   function Usuario(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }
  
    Usuario.prototype.saludar = function() {
      return 'Hola, mi nombre es ' + this.nombre;
    };
  
    return Usuario;

}
// const Usuario = crearUsuario();
//             const user = new Usuario(
//                'jssamuel',
//                'Samuel',
//                'samuel@email.com',
//                'LoveJS'
//             );
//             console.log(user.usuario)//.toBe('jssamuel');
//             console.log(user.nombre)//.toBe('Samuel');
//             console.log(user.email)//.toBe('samuel@email.com');
//             console.log(user.password)//.toBe('LoveJS');
// const Usuario = crearUsuario();
// const user = new Usuario(
//    'jssamuel',
//    'Samuel',
//    'samuel@email.com',
//    'LoveJS'
// );
// console.log(user.saludar())//.toBe('Hola, mi nombre es Samuel');

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Usuario.prototype.saludar = function() {
      return 'Hello World!';
    };
}
// function Test() {
//    this.test = true;
// }
// agregarMetodoPrototype(Test);
// const test = new Test();
// console.log(test.saludar())//.toBe('Hello World!');

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   String.prototype.reverse = function() {
      var stringInvertida = '';
      for(var i = this.length - 1; i>=0; i--) {
        stringInvertida = stringInvertida + this.charAt(i);
      }
      return stringInvertida;
    };
       
   }
   // agregarStringInvertida();
   // const str = 'Hello';
   // console.log(str.reverse())//.toBe('olleH');

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
