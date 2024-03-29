const product = ["Pencil", "Paper", "Keyboard", "Mouse"];
product.push("Microphone", "Televisión");
console.log(product);
console.log(product.length);

// Método 1.-
console.log("---Método 1---");
product.forEach(function (el) {
  console.log(el);
});
// Método 2.-
console.log("---Método 2---");
product.forEach((el) => {
  console.log(el);
});

// Método 3.-
console.log("---Método 3---");
for (const prod of product) {
  console.log(prod);
}

//Método clásico
console.log("---Método Clásico---");
for (let i = 0; i < product.length; i++) {
  const element = product[i];
  console.log(element);
}
function main() {
  console.log("hola");
}
main();
//*click @ $ <= !=
//*console.log(main); txt-type
