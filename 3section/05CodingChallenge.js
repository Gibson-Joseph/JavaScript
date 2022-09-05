/*CODING CHALLENGE #1:

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§Data 1: [17, 21, 23]
§Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀*/

////////////////////////////////////////////////
'use strict';

// 1) Understand the problem:
// -Array transformed to string, separated by ...
// -What is the x days? Answer: index+1

// 2)Breaking up into Sub-Problem:
// -Transformed array into string
// -Transformed each element to string with ºC
// -Tranformed needs to contain day (index + 1)
// -Add ... between element and start and end of string
// -log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`); //<-- sample OutPut

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log(`...${str}`);
};
printForecast(data1);
