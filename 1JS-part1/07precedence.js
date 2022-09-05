// Operator Precedence:

const now = 2037;
const ageGibson = now - 1991;
const ageJoseph = now - 2018;

console.log(now - 1991 > now - 2018); //true

////////////////////////////////////////

// Check MDN web site --> JavaScript --> Operator Precedents Table
// in this table, which operators are executed from left to right and which one from right to left.

//////////////////////////////////////////

console.log(25 - 10 - 5); //left to right

//But if it was right to left, then it would be 5 minus 10 minus 25 which would then be somthing completely diffrent.
//This is an example of left to right operation.

////////////////////////////////////////

//Assignment Operator are right to left execution.
let x, y;
x = y = 25 - 10 - 5; //x = y = 10  x = 10 //next right to left

console.log(x, y); //Both 10

//////////////////////////////////////////

//Parenthesis () are executed first

// const averageAge = ageGibson + ageJoseph / 2; //<-- wrong one

const averageAge = (ageGibson + ageJoseph )/ 2; 
//Parenthesis () are executed first
console.log(ageGibson, ageJoseph, averageAge); 

