//LOOPING ARRAYS, BREAKING AND CONTINUING:

"use strict";

const gibson = [
  "Gibson",
  "joseph",
  2037 - 1991,
  "techer",
  ["Micheal", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i <= gibson.length - 1; i++) {
  //Reading from gibson array.
  console.log(gibson[i], typeof gibson[i]);

  //Filling types array
  //   types[i] = typeof gibson[i];  //<-- method 1
  types.push(typeof gibson[i]); //<-- method 2
}

console.log(types);

////////////////////////////////////////////

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  //   ages[i] = 2037 - years[i];
  ages.push(2037 - years[i]);
}

console.log(years, ages);

////////////////////////////////////////////
//Two important statements for loops:
//continue and break:

// countinue:

console.log("-------COUNTINUE-------");
for (let i = 0; i < gibson.length; i++) {
  if (typeof gibson[i] !== "string") continue;
  console.log(gibson[i], typeof gibson[i]);
}

console.log("--------BREAK------");
for (let i = 0; i < gibson.length; i++) {
  if (typeof gibson[i] === 'number') break;
  console.log(gibson[i], typeof gibson[i]);
}
