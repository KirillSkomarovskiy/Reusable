'use strict';

const range = (start, end) => (
  Array.from(
    { length: end - start + 1 },
    (value, key) => start + key
  )
);

module.exports = { range };
