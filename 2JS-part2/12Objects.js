//OBJECTS:

//Object is a data Structure in JavaScript
/////////////////////////////////////////

const gibsonArray = [
  `Gibson`,
  `Joseph`,
  2037 - 1991,
  [`Micheal`, `Peter`, `Steven`],
];

console.log(gibsonArray);

//But in Array, there is no way of giving these elements a name.

/////////////////////////////////////////

//Object:

//So in objects, we actually defin key value pairs.

//Key is basically the variable name.

const gibson = {
  //These curly braces here are to define a new object.
  firstName: `Gibson`, //<-- the value can be of any type that we want here.
  lastName: `Joseph`,
  age: 2037 - 1991, //<-- we can put any expression here. so this will be calculated, and then will be assigned to age.
  job: `Teacher`,
  friends: [`Micheal`, `Peter`, `Steven`],
};

console.log(gibson);

//Using the curly braces like this is the easiest one, and is called the object literal syntax. because we are literally writing down the entire object content.

//each of these keys is also called a property.
