/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
  let obj = {
   nombre : nombre,
   edad : edad,
   meow : function (){
      return "Meow!";
   }
  }
  return obj;
};
// console.log(crearGato('Snowball', 1).nombre)//.toBe('Snowball');
// console.log(crearGato('Snowball', 1).edad)//.toBe(1);
// console.log(crearGato('Snowball II', 5).nombre)//.toBe('Snowball II');
// console.log(crearGato('Snowball II', 5).edad)//.toBe(5);
// console.log(crearGato('Snowball III', 2).meow())//.toBe('Meow!');

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto. 
   // Tu código:
   let obj = {
      nombre : nombre,
      email : email,
      password : password,
   }
   return obj;
};

// const user = {
//    nombre: 'Jhon',
//    email: 'jhon@email.com',
//    password: 'correcthorsebatterystaple',
// };

// const user2 = {
//    nombre: 'Samuel',
//    email: 'samuel@email.com',
//    password: 'password',
// };

//console.log(nuevoUsuario(user.nombre, user.email, user.password))//.toEqual(user);
//console.log(nuevoUsuario(user2.nombre, user2.email, user2.password))//.toEqual(user2);

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
};
// const object = {
//    x: 1,
//    y: 2,
   
// };
// const updatedObject = {
//    x: 1,
//    y: 2,
//    z: null,
// };
// console.log(agregarPropiedad(object, 'z'))//.toEqual(updatedObject);

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo]();
};
// const object = {
//    x: 0,
//    incrementX: function () {
//       this.x++;
//    },
// };
//invocarMetodo(object, 'incrementX');
//console.log(object.x)//.toBe(1);

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var result = objetoMisterioso.numeroMisterioso * 5;

  return result;
};
// const mysteryBox = {
//    numeroMisterioso: 999,
// };
// mysteryBox.numeroMisterioso = -5;
// console.log(multiplicarNumeroDesconocidoPorCinco(mysteryBox))//.toBe(4995);
// console.log(multiplicarNumeroDesconocidoPorCinco(mysteryBox))//.toBe(-25);

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
};
// const updatedObject = {
//    x: 1,
//    y: 2,
// };
// const object = {
//    x: 1,
//    y: 2,
//    z: null,
// };
//console.log(eliminarPropiedad(object, 'z'))//.toEqual(updatedObject);

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.email){
      return true
    }else {
      return false
    }
};
// console.log(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' }))//.toEqua(true);
// console.log(tieneEmail({ usernombre: 'Jhon', email: null }))//.toEqual(false);
// console.log(tieneEmail({ usernombre: 'Antonio' }))//.toEqual(false);

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   for (const propiedades in objeto){
      if(propiedades === propiedad)return true;
    }
    return false;
};
// const obj = {
//    x: true,
// };
// console.log(tienePropiedad(obj, 'x'))//.toEqual(true);
// console.log(tienePropiedad(obj, 'y'))//.toEqual(false);

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.password !== password)return false;
   return true;
   
};
// const user = {
//    password: 'Me encanta JS!',
// };
// const password = 'Me encanta JS!';
//    console.log(verificarPassword(user, password))//.toBe(true);
// const user = {
//    password: 'Me encanta JS!',
// };
// const password = 'Hacker time!';
//    console.log(verificarPassword(user, password))//.toBe(false);

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
};
// const user = {
//    password: 'Me encanta JS!',
// };
// const password = 'Me encanta JS mucho más!';
// console.log(actualizarPassword(user, password).password)//.toBe(password);

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
};
// const user = {//user es lo mismo que objeto => obj {}
//    amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
// };
// const newFriend = 'Shay';
// console.log(agregarAmigo(user, 'Shay').amigos.pop())//.toBe('Shay');

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for(let i = 0; i < objetoMuchosUsuarios.length; i++){
      objetoMuchosUsuarios[i].esPremium = true
    }
    return objetoMuchosUsuarios;
};
// const users = [
//    { esPremium: false },
//    { esPremium: false },
//    { esPremium: false },
//    { esPremium: false },
//    { esPremium: false },
// ];
// const updatedUsers = [
//    { esPremium: true },
//    { esPremium: true },
//    { esPremium: true },
//    { esPremium: true },
//    { esPremium: true },
// ];
// console.log(pasarUsuarioAPremium(users))//.toEqual(updatedUsers);

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
  let suma = 0; 
  for (let i = 0; i < objetoUsuario.posts.length; i++){
    suma = suma + objetoUsuario.posts[i].likes;
  }
  return suma;
};
// const user = {
//    usernombre: 'Jhon Doe',
//    password: 'JavaScript es genial!',
//    posts: [
//       {
//          id: '1',
//          title: 'Aventuras en JS!',
//          likes: 10,
//       },
//       {
//          id: '2',
//          title: 'Soy Henry!',
//          likes: 100,
//       },
//       {
//          id: '3',
//          title: 'Qué es un JavaScript?',
//          likes: 35,
//       },
//       {
//          id: '4',
//          title: 'JS Objects for Dummies',
//          likes: 42,
//       },
//       {
//          id: '5',
//          title: 'Educación online',
//          likes: 99,
//       },
//    ],
//};
// console.log(sumarLikesDeUsuario(user))//.toBe(286);

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function(){
      return this.precio-(this.precio * this.porcentajeDeDescuento);
    }
    return objetoProducto;
   
};
// const storeItem = {
//    precio: 80,
//    porcentajeDeDescuento: 0.1,
// };
// const storeItem2 = {
//    precio: 5,
//    porcentajeDeDescuento: 0.5,
// };
// console.log(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento)//.toBeDefined();
// console.log(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento)//.toBeDefined();
// console.log(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento())//.toBe(72);
// console.log(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento())//.toBe(2.5);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
