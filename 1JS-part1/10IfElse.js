// if / Else Statement:

const age = 15;
// const isOldEnough = age >= 18; //Boolean value is true

if (age >= 18) {
  //<-- condition is true ,then this block of code here will be executed
  console.log(`Gibson can start driving license`);
} else {
  //<-- conddition is false , then this block of code will executed.
  const yearLeft = 18 - age;
  console.log(`Gibson is too young. wait another ${yearLeft} years !`);
}

//Just Keep in mind that this 'else' block is actually optional.

//Now what we have here is 'if', 'else' statement, which is the official name is called a Control Structure.

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  //Boolean value
  century = 20;
  //let century =20;   // Any variable that we declare inside of these blocks will not be accessible outside of the block
} else {
  //let century = 21;
  century = 21;
}
console.log(century);
