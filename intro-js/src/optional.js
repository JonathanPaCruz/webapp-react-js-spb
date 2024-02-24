// Creating a object in js
const invoice = {
  id: 10,
  name: "Office",
  date: new Date(),

  //Objeto cliente
  client: {
    id: 2,
    name: "Jonathan",
    lastname: "Cruz",
    age: 20,
    address: {
      street: "#16 de septiembre",
      number: 236,
    },
  },
  // Objeto compañía
  company: {
    name: "Stream",
  },
  // Objeto Item
  items: [
    { product: "Pencil", price: 5, quantity: 15 },
    { product: "Mouse", price: 25, quantity: 1 },
    { product: "Keyboard", price: 250, quantity: 3 },
    { product: "Paper", price: 45, quantity: 10 },
  ],
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return `Su total es: ${total}`;
  },

  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

/* 
  El signo ? nos aseguramos que no marque error y genere undefined
*/
console.log(invoice.company?.name);
console.log(invoice.client?.name);
console.log(invoice.client?.address?.street);

//Método 1.-
if (invoice.company != undefined && invoice.company.name) {
  console.log("working!");
} else console.log("No hay información relacionada.");

// Método 2.-
if (invoice.client?.name) console.log("working!!!", invoice.client.name);
else console.log("No hay información relacionada.");

if (invoice.client?.address?.street)
  console.log("La dirección es:", invoice.client.address.street);
else console.log("No hay información relacionada.");
