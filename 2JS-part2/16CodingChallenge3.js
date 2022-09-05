/*Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀*/

/////////////////////////////////////////

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,

  bmi: function () {
    this.bmiMark = this.weight / (this.height * this.height);
    return this.bmiMark;
  },
};

const john = {
  firstName: "john",
  lastName: "Smith",
  weight: 92,
  height: 1.95,

  bmi: function () {
    this.bmijohn = this.weight / (this.height * this.height);
    return this.bmijohn;
  },
};

console.log(mark);
mark.bmi();
console.log(mark.bmiMark);

console.log(john);
john.bmi();
console.log(john.bmijohn);

const higherBmi =
  mark.bmiMark > john.bmijohn
    ? `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmiMark}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmijohn})!`
    : `${john.firstName} ${john.lastName}'s BMI (${john.bmijohn}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmiMark})!`



    // ? `${john.firstName} ${john.lastName}'s BMI (${john.bmijohn}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmiMark})!`
    // : `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmiMark}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmiMark})!`;

console.log(higherBmi);
