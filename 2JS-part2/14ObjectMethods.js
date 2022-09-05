//OBJECT METHODS:

const gibson = {
  //object can hold different type of data.
  firsName: `Gibson`,
  lastName: `Joseph`,
  birthYear: 1991,
  job: `teacher`,
  friends: [`Michal`, `Peter`, `Steven`],
  hasDriversLicense: true,

  /* calcAge: function (birthYear) {
    //<-- Any function that is attached to an object is called a method  //<--Function Expression produce th value.
    return 2037 - birthYear;
  },*/

  //////////////////////////////////////

  //   function calcAge(birthYear) {  //<-- this is function declaration  //<-- Error
  //     return 2037 - birthYear;
  // },

  ///////////////////////////////////////

  /*calcAge: function () {
    //<-- no need parameter and we will read the birth year directly from the object. And we will use (this) keyword.
    // console.log(this);
    return 2037 - this.birthYear;
  },*/

  //the this key word or the this variable equal to the object on which the method is called, or in other words, it is equal to the object  calling the method/

  /////////////////////////////////////////

  //every method, JavaScript gives us acces to special variable called this.

  /////////////////////////////////////////
  calcAge: function () {
    this.age = 2037 - this.birthYear; //<-- we create a new property on the current object.
    return this.age;
  },
};

// const calcAge = function (birthYear) { //<-- Function expression
//   return 2037 - birthYear;
// };

// console.log(gibson.calcAge(1991));
console.log(gibson.calcAge());

console.log(gibson.age);  //<-- retrive the property that we had already caluclated before.
console.log(gibson.age);
console.log(gibson.age);

console.log(gibson);
