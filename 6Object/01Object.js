'use Strict';

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
console.log('<---------------->');
//object:

const me = {
  name: 'gibson',
  age: 20,
};

const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('Me ', me);

//Now we get that both me and my friend have the age of 27.
console.log('<---------------->');
/////////////////////////////

//primitive
let lastName = 'gibson';
let oldLastName = lastName;
lastName = 'joseph';
console.log(`last name-->${lastName},old Name -->${oldLastName}`);

console.log('<---------------->');
//Each primitive value will simply be saved into its own piece of memory in the stack.

////////////////////////////
//refrence
const gibson = {
  firstName: 'gibson',
  lastName: 'joseph',
  age: '21',
};

const marriedGibson = gibson;
marriedGibson.lastName = 'Rahul';
console.log('before marage', gibson);
console.log('after marage', marriedGibson);

console.log('<---------------->');
// marriedGibson = {};
/////////////////
// copying object
const gibson1 = {
  firstName: 'gibson',
  lastName: 'joseph',
  age: '21',
};

const gibsonCopy1 = Object.assign({}, gibson1);
gibsonCopy1.lastName = 'Davis';

console.log('gibson1 --->', gibson1);
console.log('gibsonCopy1 --->', gibsonCopy1);

console.log('<---------------->');

///////////////

const gibson2 = {
  firstName: 'gibson',
  lastName: 'joseph',
  age: '21',
  family: ['eddi', 'ben'],
};

const gibsonCopy2 = Object.assign({}, gibson2);
gibsonCopy2.lastName = 'Davis';

console.log('gibson2 --->', gibson2);
console.log('gibsonCopy2 --->', gibsonCopy2);
gibsonCopy2.family.push('Austin');
gibsonCopy2.family.push('Alwin');

console.log('gibson2 --->', gibson2);
console.log('gibsonCopy2 --->', gibsonCopy2);
console.log('<---------------->');
