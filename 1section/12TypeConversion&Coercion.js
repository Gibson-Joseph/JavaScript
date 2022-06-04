// Type Conversion and Coercion:

//Type Conversion and Coercion to numbers and two strings.

// TYPE CONVERSION:
//Typpe Conversion is when we manually convert from one type to another.

//TYPE COERCION:
//Type coercion is when javascript automatically converts types behind the scenes for us.

////////////////////////////////////////////

//Type Conversion:

//String to Number:

const inputYear = "1991";
console.log(inputYear + 18); //199118

const yearInput = "1991";
console.log(Number(yearInput), yearInput); //first one is Number Type & second one is String Type  //converting this string to a number.
console.log(inputYear + 18); //199118
console.log(Number(yearInput) + 18); //1991 + 18 = 2009;

///////////////////////////////////////

console.log(Number("Gibson")); //NaN --> Not a Number
//JaavaScript gives us this not a number value whenever an operation that involves number fails to produce a new number.
//Not a Number actually means an invalid number.
//it's not really not a number (NaN)

console.log(typeof NaN); //Number
//Not a Number actually means an invalid number.

/////////////////////////////////////////

//Numbers to Strings:
console.log(String(23), 23); //String

/////////////////////////////////////////

//Type Coercion:

//So basically, type coercion happens whenever an operator is dealing with two values that have different types.

console.log(`I am ` + 23 + ` years old`); //string

//it work this way because of type coercion.
//in JavaScript, plus (+) operator that we used here trigers a coercion to strings.
//And so whenever there is an operator between a string and a Number will be converted to a string.

/////////////////////////////////////////

console.log(`I am ` + `23` + ` years old`);

// Template literals also takes all the number values and also convert them to strings

/////////////////////////////////////////

console.log(`I am ` + String(23) + ` years old`);

// We would have manually do this like we just learned before.

/////////////////////////////////////////

console.log(`23` - `10` - 3); //Strings to Numbers.

//And so what this means this is that minus (-) operator actually triggers the opposite conversion.

//in thid case, string are converted to numbers

console.log(`23` * `2`) //strings to numbers

//Both of them are now converted to numbers becuse that's the only way that the multiplier (*) operator can work

console.log(`23` / `2`) //strings to Numbers.
//same method.

/////////////////////////////////////////


//instead if we use the plus, then the 3 is converted to strin and the three strings are concatenated.
console.log(`23` + `10` + 3); //string

/////////////////////////////////////////

//example:

let n= `1`+1; //'11' String
n=n-1;
console.log(n);  //10 Number


let x=2+3+4+`5` //"95" string
console.log(x)

let y=`10`-`4`-`3`-2+"5";
console.log(y)

/////////////////////////////////////////
