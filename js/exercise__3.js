'use strict';

const findBestEmployee = function(employees) {
  const exercises = Object.values(employees);
  const bestOfTheBest = Math.max(...exercises);
  // eslint-disable-next-line
  for (let key in employees) {
    if (employees[key] === bestOfTheBest) {
      return `${key}: ${bestOfTheBest}`;
    }
  }
  return 'Все линтяи уволены';
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
