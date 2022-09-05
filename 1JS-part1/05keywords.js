// Key Words
// Let Const Var

//let and const were introduced in ES6
//var keyword is the old way of declaring varibles.

////////////////////////////////////////////

//let:
//use the let keyword to declare variables that can change later
//let is block scoped

let age=30;
console.log(age);
age=10;  //reassign the value
console.log(age);

////////////////////////////////////////////

//const:
// use the const keyword to declare the variable that are not supposed to change at any point in the future.

const birthDay = 2000;
// birthDay =2020;  //<---error
//the value in const variable cannot be changed.

//const keyword cannot declare empty const variables.

// const job;  //<--not legal

///////////////////////////////////////////

//var:
//var keyword is the old way of declaring varibles.
//var is function scoped
var job= "programmer"
job="teacher"

////////////////////////////////////////////