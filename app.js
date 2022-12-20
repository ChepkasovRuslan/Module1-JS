const input = [
    { name: "Milk", price: 20, amount: 15 },
    { name: "Coffee", price: 30, amount: 17 },
    { name: "Tea", price: 10, amount: 14 },
  ];
  
const output = input.map(i => ({ name: i.name, total: i.amount * i.price }));

console.log(output);