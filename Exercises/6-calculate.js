'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => 0.5 * (a + b);

const calculate = () => (
  Array.from(
    { length: 10 },
    (v, k) => k
  ).map(i => average(square(i), cube(i)))
);

module.exports = { square, cube, average, calculate };
