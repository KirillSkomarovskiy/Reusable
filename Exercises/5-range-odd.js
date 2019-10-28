'use strict';

const rangeOdd = (start, end) => (
  Array.from(
    { length: end - start + 1 },
    (value, key) => start + key
  ).filter(item => item % 2)
);

module.exports = { rangeOdd };
