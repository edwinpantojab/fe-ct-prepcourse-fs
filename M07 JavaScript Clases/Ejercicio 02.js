/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio) {
        // Tu código:
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.domicilio = domicilio
        this.detalle = function() {
          return { 
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            domicilio: this.domicilio
          }
        }
      }
}
// const nuevaPersona = new Persona(
//   'Juan',
//   'Pérez',
//   22,
//   'Saavedra 123'
// );
// console.log(nuevaPersona)//.toBeInstanceOf(Persona);
// console.log(nuevaPersona.nombre)//.toBe('Juan');
// console.log(nuevaPersona.apellido)//.toBe('Pérez');
// console.log(nuevaPersona.edad)//.toBe(22);
// console.log(nuevaPersona.domicilio)//.toBe('Saavedra 123');

// const nuevaPersona = new Persona(
//   'Juan',
//   'Pérez',
//   22,
//   'Saavedra 123'
// );
// console.log(nuevaPersona.detalle())//.toStrictEqual({
//   nombre: 'Juan',
//   apellido: 'Pérez',
//   edad: 22,
//   domicilio: 'Saavedra 123',
// });

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   const persona = new Persona(nombre, apellido, edad, domicilio);
  return persona;
}
// console.log(crearInstanciaPersona('Juan', 'Pérez', 22, 'Saavedra 123'))//.toBeInstanceOf(Persona);

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   Persona.prototype.datos = function() {
      return this.nombre + ", " + this.edad + " años";
    }
}
// agregarMetodo();
//             const persona = new Persona('Juan', 'Pérez', 22, 'Saavedra 123');
//             persona.nombre === 'Juan' && persona.edad === 22
//                console.log(persona.datos())//.toBe('Juan, 22 años')
//                console.log(persona.datos())//.toBe('undefined, undefined años');
               
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
