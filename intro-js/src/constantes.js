let firstname = "Jonathan"; // Valores con cambios
const lastname = "Pacheco"; // Valores que no cambian

const condicion = true;
if (condicion) {
  const lastname = "Cruz";
  console.log(lastname);
}
/*
 * ignore
 * con control + alt + } da como resultado ``
 * con control + alt + + da como resultado ~
 */

console.log(`Hola mundo! ${firstname} - ${lastname}`); // Variables que se interpola por sus valores
// *Expresión lamba
const sayHello = (name = "Sin nombre", age = "Sin edad") => {
  const greeting = `Hola Mundo! ${name} y ${age}`;
  // console.log("Hola Mundo!");
  return greeting;
};
const result = sayHello("Jonathan", 25);
console.log(result);
