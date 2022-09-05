//Data Type

//every programming language values can have different types.

//depending on the type of data that we want then to hold.

//JavaScript has dynamic typing:
//we do not have to manually defin the data type of value stored in variable. instead, data type are determined automatically.

//7 primitive Data Type.

//numbers:
//floating point number
//used for decimal and integers.
let age = 21; //this is number data Type

///////////////////////////////////////////////

//strings:
//Sequence of characters
//used for text
let firstName = "gibson"; //string Data Type

////////////////////////////////////////////////
 
//Boolean:
//Logical type that can only be true or false.
//used for taking decisions.
let fullage = true; //Boolean Data Type.
// true;
let JavaScriptIsFun = true;
//variable name holding a Boolean value.
console.log(JavaScriptIsFun);

console.log(typeof true); //Boolean
console.log(typeof JavaScriptIsFun); //Boolean
console.log(typeof 23); //Number
console.log(typeof "Gibson");  //String

/////////////////////////////////////////////////

//Undefined:
//Value taken by a variable that is not yet defined(empty value)
//A variable declared but without assigning a value.
//undefined means empty value.
let children; //undefined
let year;  //it will automatically hold the value of undefined.
console.log(year);
console.log(typeof year); 

year=2000;  //Assigning a new value.
console.log(typeof year); //Number

//////////////////////////////////////////////////

//Null:
//also means empty Value.
//it is similar to undefined.
console.log(typeof null) //objest
//JavaScript says that a type of null is an object and this doesn't maje any sense at all.
//this is regraded as a bug or error in javascript .
//however, this bug is naver corrected for legacy reasons
//But now it's of course not an object.

//////////////////////////////////////////////////

//Symbol(ES2015):
//value that is unique and cannot be changed (not usefull for now)

///////////////////////////////////////////////////

//Bigint(ES2020):
//Larger integer then the Number type can hold.
//which is integer that are too large to be represented by the number type.

////////////////////////////////////////////////////

