'use strict';

const fn = () => {
  const obj1 = {
    name: 'John Doe',
  };
  let obj2 = {
    name: 'Mary Moe',
  };

  obj1.name = 'new name1';
  obj2.name = 'new name2';

  obj1 = {};
  obj2 = {};
};

module.exports = { fn };
