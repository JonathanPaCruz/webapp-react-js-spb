//*Si hay varias lineas, debe ser con llaves y el return
const sayHello = (name = "No definido", age = "No definido") =>
  `Hola Mundo! ${name} ${age}`;
const result = sayHello("Jonathan", 25);
console.log(result);

//*Por ser una sola linea, se puede simplificar de la siguiente manera, con expresión lamba
const operation = (a = 0, b = 0) => a + b;
console.log(operation(10, 10));