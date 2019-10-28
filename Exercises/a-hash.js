'use strict';

const phonebook = {
  a: '+380445554430',
  b: '+380445554431',
  c: '+380445554432',
  d: '+380445554433',
  e: '+380445554434',
  f: '+380445554435',
  g: '+380445554436',
  j: '+380445554437',
  i: '+380445554438',
  k: '+380445554439',
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
