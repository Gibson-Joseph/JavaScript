//Operators

//An operators basically allows us to transform values or combaine multiple value and realy do all kind of work with value.

////////////////////////////////////////////

//Math Operator:
//- operator
const now = 2037;
const ageGibson = now - 1991;
const ageJoseph = now - 2019;
console.log(ageGibson, ageJoseph);

console.log(ageGibson * 2, ageGibson / 10, 2 ** 3); //2**3 to the power of 3 =2*2*2 =8

//////////////////////////////////////////////

//plus + operator:

//use the plus (+) operator to join strings, or in other words, to concatenate different strings,

const firstName = "Gibson";
const lastName = "Joseph";

//create an empty string or actually a string with a space
console.log(firstName + " " + lastName);

/////////////////////////////////////////////

//typeof operator:
console.log(typeof "Gibson");

////////////////////////////////////////////

//Assignment Operator:
//Assignment operator is just equal sign(=).
let x = 10 + 5; //equal sign is operator  (x=15;)
x += 10; //x=x+10; -->25
x *= 4; //x=x*4; -->100
x++; //x=x+1 -->101 increase the value of one
x--; //x= x-1; -->100 decrease the value of one
x--; //x= x-1; -->99
console.log(x);

//////////////////////////////////////////////

//Comparaton Operator:
//comparation operators is to produce Boolean values.

console.log(ageGibson > ageJoseph); //46 > 19  return true
//<, >, <=, >=

//And the operator will then essentially replay with yes, it is, which means true or no, it's not, which means false.

console.log(ageJoseph >= 19); //false (18 >= 19)

const isFullAge = ageJoseph >= 18; //Boolean
console.log(isFullAge); //true

console.log(now - 1991 > now - 2018); //true

////////////////////////////////////////////////
