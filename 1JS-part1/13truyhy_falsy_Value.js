//Truthy and Falsy Value:

//Type Conversion and coercion to Boolleans.

//FALSY VALUE:

//Falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean.

//And in javaScript, there are only five(5) falsy values.

//5 Falsy Values: 0, ""(empty string), undefined, null, NaN.

//All of these five(5) values will be converted to false when we attempt to convert them to a boolean.

//They are not exactly false initially.

console.log(Boolean(0));
console.log(Boolean(undefined)); //<-- Falsy Value
console.log(Boolean(0));
console.log(Boolean(""));

//the conversion to boolean is always implicit, not explicit or in other words is always typed coercion that JavaScript does automatically behind the scenes.

///////////////////////////////////////

//TRUTHY VALUES

//Values that will be converted to true, for example, any Number that is not zero or any string that is not an empty string will be converted to true when we attempt to convert them to a boolen.

console.log(Boolean("Gibson"));
console.log(Boolean({})); //<-- Truthy Value
console.log(Boolean(100));

//the conversion to boolean is always implicit, not explicit or in other words is always typed coercion that JavaScript does automatically behind the scenes.

////////////////////////////////////////

//It happens in two scenarios.
//first, When using logical operator, and Second in a logical context, like for example, in the condition of an if else statement.

////////////////////////////////////////

//How type coercion works in if else condition,

const money = 0; // Falsy value
if (money) {
  //False
  console.log(`Don't spend it all :)`);
} else {
  console.log(`You Should get a job!`);
}

////////////////////////////////////////

const myMoney = 100; // Truthy value
if (myMoney) {
  //True
  console.log(`Don't spend it all :)`);
} else {
  console.log(`You Should get a job!`);
}

////////////////////////////////

let height; // undefined
if (height) {  //False 
  console.log(`YAH! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}

/////////////////////////////////////

let weight = 55;
if (weight) { //True
  console.log(`YAH! Weight is defined`);
} else {
  console.log(`Weight is UNDEFINED`);
}
