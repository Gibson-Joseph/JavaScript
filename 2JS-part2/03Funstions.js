//FUNCTIONS:

//A Function is simply a piece of code that we can reuse over and over again in our code.

//So it's little bit like a vriable but for whole chunks of code.

//A variable holds value but a function can hold one or more complete lines of code.

function logger() {
  console.log(`My name is Gibson`); //<-- this block of curly braces is called the function body. and it's this code that will be executed when we run this function.
}

logger(); //<-- this process here of basically using the function is called invoking the function, running the function or calling the function.
logger();
logger();

/////////////////////////////////////////

function fruitProcessor(apples, oranges) {
  //<-- Parameters are like variables that are specific only to this function and they will get define once we call the function.
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); //<-- these now will be the inputs of the fruit processor function and these actual values here of the parameters are called the arguments.

console.log(appleJuice);
console.log(fruitProcessor(5, 0)); //<-- only difference is that in this case here we did not capture the value into any variable.

/////////////////////////////////////////

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Power of the function we can reuse the function with different input values and then get a different output.

/////////////////////////////////////////

//function that we used to convert a string to a number.

const num = Number("23");
console.log(num);

/////////////////////////////////////////
