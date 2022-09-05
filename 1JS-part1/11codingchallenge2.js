/*Coding Challenge #2


Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀*/

/////////////////////////////////////////

//DATA 1
const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

//DATA 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJhon = 85;
// const heightJhon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJhon / (heightJhon * heightJhon);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Marks's BMI (${BMIMark}) is higher then John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher then Mark's (${BMIMark})!`);
}
