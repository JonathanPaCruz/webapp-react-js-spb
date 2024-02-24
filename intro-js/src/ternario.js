let average = 5.7;

// Método 1.- Con ternario
const data = average >= 5.5 ? "Aprobaste" : "Reprobaste";
console.log(`Resultado: ${data}`);
// Método 2.- if
if (average >= 5.5) console.log("Haz aprobado");
else console.log("Estas reprobado");

/* 
Comprobando que valor es mayor de los datos declarados.
*/
let max = 0;
const a = 2;
const b = 4;
const c = 6;

max = a > b ? a : b;
max = max > c ? max : c;
console.log(`El número mayor es: ${max}`); // Salida 6
