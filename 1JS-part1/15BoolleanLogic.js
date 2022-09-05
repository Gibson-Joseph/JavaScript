// Boolean Logic:

//Booleanlogic is branc of computer science, which uses true and false values to solve complex logical problems.

//And in order to do that, it uses several logical operators to compain true and false values. so much like we use arithmetic operators, to compain numeric values.

/////////////////////////////////////////

//AND Operator:
//what the AND operator does is to return true only if both A AND B are true.

//no matter how many variables

//Result of operation, depending on two (2) variables.

/////////////////////////////////////////

//OR Operator:
//OR operator will be true if just one of the variables is true.

// no matter how many variables.

/////////////////////////////////////////

//NOT Operator:
// NOT Operato doesn't combine multiple values.
//The NOT operators acts on only one Boolean value and it basically just inverts is.

//if A is true, it will become false.
//if it's false, then NOT will become true.

/////////////////////////////////////////

//EXAMPLE:

// const hasDriversLicense = true; //A
// const hasGoodVision = false; //B

// console.log(hasDriversLicense && hasGoodVision); //AND //false
// console.log(hasDriversLicense || hasGoodVision); //OR //true
// console.log(!hasDriversLicense); //NOT //false

/////////////////////////////////////////

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Gibson is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

/////////////////////////////////////////

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired = true; //c

console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision &&!isTired) { //!isTired is false
  console.log(`Gibson is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}
