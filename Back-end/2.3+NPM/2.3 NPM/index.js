var generateName = require('sillyname');

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

const superheroes = require('superheroes');
var name = superheroes.random();

console.log(`I am  ${name}.`);

/* IF you are changing the "type"="module" in JSON then you have to use import method in the Index.js otherwise use the 
default code which is mentioned in the npmjs.com */