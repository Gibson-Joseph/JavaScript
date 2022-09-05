'use strict';

//this:
// console.log(this);

// const age = function (birthYear) {
//   console.log(2037 - birthYear); //46
//   console.log(this); //undefined/
// };
// age(1991);

// const age1 = () => {
//   console.log(this);
// };
// age1();

const gibson = {
  name: 'gibson',
  year: 2000,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};
gibson.calcAge(); //37

const joseph = {
  year: 2020,
};
console.log(joseph);
joseph.calcAge = gibson.calcAge;
console.log(joseph);
console.log(joseph.calcAge);
joseph.calcAge(); //17
