//INTRODUCTION TO ARRAY:

const friend1 = `Michel`;
const friend2 = `Steven`;
const friend3 = `Peter`;

//Array is like a big container into which we can throw variables and then latter reference them.

//programming is most of the time, all about data. so we get data frome somewhere we store and process data and then we give some data back.

// And the data, it has to go somewhere.so it has to be stored in some place. And for that, we use data structures, just like Arrays.

//So in case we have more, then just a single value.

//The two most importent data structures at least in JavaScript, are Arrays and Objects

const friends = [michal]; //<-- we use the brackets, to create a new array.  //We can put different values, separated by commas. //<--But anyway, it's way more usual to just use the brackets, Which ic called the a literal syntax
console.log(friends);

/////////////////////////////////////////

//Another Way:
const y = new Array(1991, 1984, 2008, 2020); //<--So on the array can hold as many values as we want. And also values of any type that we'd like.

//And so here we used a different way of creating the array, which was using this Array Function. So you see that it's a function because we called it here basically using these parenthesis. And we also needed to use the new keyword because otherwise it's not gonna work.

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //<--Dot (.) length is called a property  //<-- is that this is gonna be the exact amount of elements that is in the Array. And it's not Zero based.

//We can use this to automatically get the last element of any Array.
console.log(friends[friends.length - 1]); //<-- inside of the brackets [], we can put any expression. We could not put a statement. Inside of these square brackets[], JavaScript expects an expression, not a statement.

/////////////////////////////////////////

friends[2] = `jay`; //<-- Replace the array element.
console.log(friends);

//Only primitive values, are immutable. But Array is not a primitive value.

//So what you need to know for now is that we can actually mutate Arrays even though they were declared with const.

/////////////////////////////////////////

//Now what we can not do is actually replace the entire Array.

// friends=[`Gibson`, `Joseph`] //<-- That would be illegal.

/////////////////////////////////////////

//Array can actually hold values with different types all at the same time.

const firstName = `Gibson`;

const gibson = [firstName, `Joseph`, 2022 - 2000, `teacher`, friends];
console.log(gibson);
console.log(gibson.length);

/////////////////////////////////////////

//Exercise:

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years)) //NaN
console.log(calcAge(years[0]));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);

const age3 = calcAge(years[years.length - 1]); //<-- Any possition of the Array simply needs to be an expression. So somthing that produce a value.
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
]; //So basically we can place function calls into an array just fine, because they will produse a value.

console.log(ages);
