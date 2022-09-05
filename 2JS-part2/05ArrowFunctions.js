//ARROW FUNCTIONS:

//Arrow function is simply a special form of function expression that is shorter and therefore faster to write.

/////////////////////////////////////////

//FUNCTION EXPRESSION:
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};

/////////////////////////////////////////

//ARROW FUNCTION:

//1st we don't need the curly ({}) braces, 2nd don't need any parentheses, 3rd is that the return actually happens implicitly.
const calcAge2 = (birthYear) => 2037 - birthYear; //<-- able to store in variable  //so this value here will automatically be returned without us having to explicitly write the return keyword.

//So this is excellent for simple one-liner functions.

const age3 = calcAge2(1991);
console.log(age3);

/////////////////////////////////////////

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement; //<-- we can only omit the return in case we have a one-liner function. But if we have more, then we need to do the return still.
};
console.log(yearsUntilRetirement(1991));

//more then one line of code basically, in that situation, we need the return statement.

/////////////////////////////////////////

const yearsUntilRetirement1 = (birthYear, firstName) => {
  //<-- number of parameters.
  const age = 2037 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement1(1991, `Gibson`));
console.log(yearsUntilRetirement1(1980, `Joseph`));

/////////////////////////////////////////
