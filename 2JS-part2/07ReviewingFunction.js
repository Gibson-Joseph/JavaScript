//REVIEWING FUNCTION:

// "use strict";

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
    console.log(`${firstName} retires in ${retirement} years`); //<-- they will not get executed. because the return statement immediately exits or immediately returns the function
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
    console.log(`${firstName} has already retired!`); //<-- they will not get executed. because the return statement immediately exits or immediately returns the function
  }

  //   return retirement;
  //   return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, `Gibson`));
console.log(yearsUntilRetirement(1950, `Joseph`));
