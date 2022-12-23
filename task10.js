const payments = [
  {from: 'Ivan', to: 'Oleg', amount: 2500}, 
  {from: 'Ivan', to: 'Igor', amount: 2000}, 
  {from: 'Oleg', to: 'Igor', amount: 1500}
];

const average =
  payments.reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0) / payments.length;

payments.forEach(element => {
  element.diff = element.amount - average;
});

console.log(average);
console.log(payments);