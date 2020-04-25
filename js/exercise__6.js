'use strict';

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  // eslint-disable-next-line
  for (const product of allProdcuts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 'Невозможно подсчитать результат';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

console.log(calculateTotalPrice(products, 'Захват')); // 2400

console.log(calculateTotalPrice(products, 'Сканер')); // 8100

console.log(calculateTotalPrice(products, 'Звезда смерти')); // 'Невозможно подсчитать результат'
