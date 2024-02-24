// Creating a object in js
const invoice = {
  id: 10,
  name: "Office",
  date: new Date(),
  client: {
    id: 2,
    name: "Jonathan",
    lastname: "Cruz",
    age: 20,
  },

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

// const invoice2 = invoice;

/* 
Para crear una nueva instancia a partir de la original 
clonar la original se utiliza de la siguiente forma.
*/
const invoiceCopy = { ...invoice };
const result = invoice == invoiceCopy;

//Es una sola linea de código
if (result) console.log(result);
else console.log("no son iguales");

invoiceCopy.id = 20;
console.log(invoice.id); // id:10
console.log(invoiceCopy.id); //id: 20
