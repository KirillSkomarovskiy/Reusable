'use strict';

const phonebook = [
  { name: '0', phone: '+380445554430' },
  { name: '1', phone: '+380445554431' },
  { name: '2', phone: '+380445554432' },
  { name: '3', phone: '+380445554433' },
  { name: '4', phone: '+380445554434' },
  { name: '5', phone: '+380445554435' },
  { name: '6', phone: '+380445554436' },
  { name: '7', phone: '+380445554437' },
  { name: '8', phone: '+380445554438' },
  { name: '9', phone: '+380445554439' },
];

const findPhoneByName = name => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
