//Strings And Template Literals:

const firstName = "Gibson";
const job = "Teacher";
const birthYear = 2000;
const year = 2022;

const gibson =
  "i'am " +
  firstName +
  ", a " +
  (year - birthYear) +
  " " + //<--- This one is Complex String.
  "years old " +
  job +
  "!";

console.log(gibson);

//And so that's why starting with ES6, we have much better tool for doing this kind of stuff now.which is called, template literals

//So with template literals, we can write a string in a more normal way, and then basically insert the variables directly into the string and then they will simply be replaced.

//So basically a template literal can assemble multiple pieces intio one final string.

//`` <-- Backticks

const gibsonNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; //<-- easier way of writing this string.

console.log(gibsonNew);

console.log(`Just a regulat string...`);

console.log("String with\n multiple\n lines"); //<-- it's all same strings. but, spread across multiple lines.

//But indeed now with template strings, there is an easier way of doing this.

console.log(`string
multiple
line.`); //<-- So all we have to do is simply hit return, and it will create a new line .

//wheneveer you need a multiple string, you always make sure to use this template literal.
