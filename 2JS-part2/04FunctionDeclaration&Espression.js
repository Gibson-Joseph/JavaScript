//FUNCTION DECLARATION AND EXPRESSIONS:

//FUNCTION DECLARATION:

function calcAge1(birthYear) {
  //<-- the parameter it's a bit like a local variable, that's only available inside of this function

  return 2037 - birthYear; //to take this value now out of the function, we return it using the return keyword.
}

const age1 = calcAge1(1991);
console.log(age1);

/////////////////////////////////////////

//FUNCTION EXPRESSION:

//expression produce a value.

//In JavaScript, function are actually just values.
//So just a number or a steing or a boolean value.
//So a function is not a type, It's not like a string or number type but it's also a value.
//And so if it's a value, we can store it in a variable.

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

//so it's a function without a name basically, which is also called an anonymous function.

//So the function expression works the exact same way as the function declaration.

//And internally this happens because of a process called hoisting
