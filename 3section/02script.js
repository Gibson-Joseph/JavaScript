//Remember we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = '23';

// const calAge = birthYear => 2037 - birthYear;

// console.log(calAge(1991));

////////////////////////////////

// function foo(x=3,y){
//     return [x,y]
// }
// const ret = foo(5)
// console.log(ret)

////////////////////////////////

// let employee = {
//   name: 'Gibson',
//   dept: {
//     name: 'Account',
//   },
// };

// let anotherEmployee = Object.assign({}, employee);

// employee.dept.name = 'IT';

// console.log(employee.dept.name);
// console.log(anotherEmployee.dept.name);

////////////////////////////////

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

// let sum = 0;

// let number = parseInt(prompt('Enter a number: '));

// while (number >= 0) {
//   sum += number;

//   number = parseInt(prompt('Enter a number: '));
// }

// console.log(`The sum is ${sum}.`);

///////////////////////////////////

// let sum = 0;
// let number = 0;

// do {
//     sum += number;
//     number = parseInt(prompt('Enter a number: '));
// } while(number >= 0)

// console.log(`The sum is ${sum}.`);

///////////////////////////////////

// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

// let sum = 0;
// let number = 0;

// while (number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input from the user
//     number = parseInt(prompt('Enter a number: '));
//     console.log(`the number is ${number}`);

//     // continue condition
//     if (isNaN(number)) {
//         console.log('You entered a string.');
//         number = 0; // the value of number is made 0 again
//         continue;
//     }

// }

// // display the sum
// console.log(`The sum is ${sum}.`);

/////////////////////////////////////////

// program for a simple calculator
// let result;

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;
// }


////////////////////////////////////////

// function modifyArray(arr, callback) {
//     // do something to arr here
//     arr.push(100);
//     // then execute the callback function that was passed
//     callback();
//   }
  
//   var arr = [1, 2, 3, 4, 5];
  
//   modifyArray(arr, function() {
//     console.log("array has been modified", arr);
//   });

///////////////////////////

// (function() {
//     var a = b = 5;
//   })();
  
//   console.log(b);

  /////////////////////


function age(){
  const now=2022;
  const birthYear=2000;
  return now - birthYear
}
console.log(now)  //reference error