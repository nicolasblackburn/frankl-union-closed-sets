const data = require('./data');
const {display, nChooseK, power, range} = require('./functions');

console.log('range(0) equals Ø?');
console.log(display(range(0)));

console.log('range(1) equals {1}?');
console.log(display(range(1)));

console.log('range(2) equals {1, 2}?');
console.log(display(range(2)));

console.log('nChooseK(3, 0) equals {Ø}?');
console.log(display(nChooseK([1, 2, 3], 0)));

console.log('nChooseK(3, 1) equals {{1}, {2}, {3}}?');
console.log(display(nChooseK([1, 2, 3], 1)));

console.log('nChooseK(3, 2) equals {{1, 2}, {1, 3}, {2, 3}}?');
console.log(display(nChooseK([1, 2, 3], 2)));

console.log('nChooseK(3, 3) equals {{1, 2, 3}}?');
console.log(display(nChooseK([1, 2, 3], 3)));

console.log('power([1, 2, 3]) equals {Ø, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}?');
console.log(display(power([1, 2, 3])));