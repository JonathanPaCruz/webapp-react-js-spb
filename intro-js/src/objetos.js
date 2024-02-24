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

// invoice.client.name = "Juan";
// invoice.total = 4000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);

console.log(invoice.total());
