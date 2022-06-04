// == and === Operator:

//(===) strict equality Operator:

//(===) Three equals is called the strict equality operator.

//Triple equals(===) does not perform type coercion.

//it's strict, because it does not perform type coercion. And so it only returns true when both values are exactly the same

const age = 18;
if (age === 18)
  //this operator will return a boolean value.
  //whenever or if block only has one line, we actually don't need teo curly braces{}. so we don't need to create the block if we only have one line.
  console.log(`You just become an adult ! (strict)`);

console.log(`18` === 18); //false //because `18`is string is of course different then 18, the number. so its not the same.

//(!==) Not equal --> strict version.

///////////////////////////////////////

//(==) Loose equality Operator:

// Loose equality Operator, which is only two equals (==), and loose equality operator actually does type coercion.

console.log(`18` == 18); //true // string `18` converted to number
//the double equal does type coercion.

const years = 2000;
if (years == 2000) console.log(`You just become an adult ! (loose)`);

// (!=) Not equal --> loose verson

/////////////////////////////////////////

//Avoid the loose equality operator
//when comparing values, always use strict equality(===).

/////////////////////////////////////////

// const favourite = prompt(`What's your favourite number?`);

// console.log(favourite); //string
// console.log(typeof favourite);

// if (favourite == 23) {  //"23" == 23 //true
//   console.log(`cool! 23 is an amazing number!`);
// }

/////////////////////////////////////////

// const favourite = Number( prompt(`What's your favourite number?`));

// console.log(favourite); //Number
// console.log(typeof favourite);

// if (favourite === 23) {  //23 === 23 //true
//   console.log(`cool! 23 is an amazing number!`);
// }

/////////////////////////////////////////

const favourite = Number(prompt(`What's your favourite number?`));

console.log(favourite); //Number
console.log(typeof favourite);

if (favourite === 23) {
  //23 === 23 //true
  console.log(`cool! 23 is an amazing number!`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else if (favourite === 9) {
  console.log(`9 is also a cool number`);
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if(favourite !== 23 ) //strict version
 console.log(`Why not 23 ?`)

 ////////////////////////////////////////