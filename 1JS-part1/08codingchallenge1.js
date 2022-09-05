//Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// §Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// §Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

///////////////////////////////////////////


//DATA 1
// const marksMass = 78;
// const marksMeter = 1.69;

// const johnMass = 92;
// const johnMeter = 1.95;

// const markBmi = marksMass / marksMeter ** 2;
// const johnBmi = johnMass / johnMeter ** 2;
// console.log(markBmi,johnBmi);

// console.log(markBmi > johnBmi);

///////////////////////////////////////////

//DATA2
const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJhon / (heightJhon * heightJhon);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


/////////////////////////////////////////////

