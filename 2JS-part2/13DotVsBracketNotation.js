//DOT Vs BRACKET NOTATION:

const gibson = {
  firstName: `Gibson`,
  lastName: `Joseph`,
  age: 2037 - 1991,
  job: `Teacher`,
  friends: [`Micheal`, `Peter`, `Steven`],
};

console.log(gibson);

//DOT NOTATION:

console.log(gibson.lastName); //<-- retrive the value
console.log(gibson.friends); //<-- real property name.

//BRACKET NOTATION:

console.log(gibson[`lastName`]); //<-- here we need to specify a string with the property name.

/////////////////////////////////////////

//we can actually put any expression that we'd like, So we don't have to explicitly write the string here, but instead we can compute it from some operation because remember that an operation is basically an expression. so something that produce a value.

const nameKey = `Name`;
console.log(gibson[`first` + nameKey]); //<--  JavaScript sees this line of code, it will start by executing this plus operation and so it will create a string firstName
console.log(gibson[`last` + nameKey]); //<-- that in the square brackets, we could put any expression here.

/////////////////////////////////////////

//Now the same thig would not work with the dot operator or the dot notation.
// console.log(gibson.'last' + nameKey);  //<-- unexpected string.

//And so that's the reason why we need the brackets notation. and dot notation, we have to use the real final property name and not a computed property name.

/////////////////////////////////////////

const intrestedIn = prompt(
  `What do want should know about Gibson? Choose between firstName, lastName, age, job and friends`
); //<-- this function will return a strins

//Dot notation:

console.log(gibson.intrestedIn); //<-- undefined //That undefined is what we get when we try to access a property on an object that does not exist. //So gibson does not have a proberty called 'intrestedIn'.

//Bracket notation:

// console.log(gibson[intrestedIn]); //we can put any expression here whic in this case will be  'intrestedIn'. And so JavaScript will now come here and replace 'intrestedIn' with the actual value of the variable and then that's the one that will be loocked up on the gibson object.

if (gibson[intrestedIn]) {
  console.log(gibson[intrestedIn]);
} else {
  console.log(
    `Wrong request! Choose between firstName, lastName, age, job and friends`
  );
}

/////////////////////////////////////////

//Add new properties:

//Dot notation:
gibson.location = `Thirunelveli`;
//Bracket notation:
gibson[`email`] = `gibsonjoseph@gmail.com`;

console.log(gibson);

/////////////////////////////////////////

//challenge:
//"Gibson has 3 friends, and his best friend is called Micheal"

//Dot Notation:
console.log(
  `${gibson.firstName} has ${gibson.firstName.length} friends, and his best friend is called ${gibson.friends[0]}`
);

//Bracket Notation:
console.log(
  `${gibson[`firstName`]} has ${
    gibson[`firstName`].length
  } friends, and his best friend is called ${gibson[`friends`][0]}`
);

/////////////////////////////////////////