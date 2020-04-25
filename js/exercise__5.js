'use strict';

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  const searchElement = [];
  // eslint-disable-next-line
  for (const obj of arr) {
    // eslint-disable-next-line
    for (const key in obj) {
      if (key === prop) {
        searchElement.push(obj[key]);
      }
    }
  }
  return searchElement;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.table(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.table(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
